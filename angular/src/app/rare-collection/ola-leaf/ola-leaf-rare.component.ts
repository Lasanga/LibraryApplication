import { Component, OnInit } from '@angular/core';
import { OlaleafoutputDto, OlaLeafsService, OlaleafUpdateDto } from 'src/app/shared-services/shared-services.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { OlaLeafRareEditComponent } from './ola-leaf-rare-edit/ola-leaf-rare-edit.component';

@Component({
  selector: 'app-rare-ola-leaf',
  templateUrl: './ola-leaf-rare.component.html',
  styleUrls: ['./ola-leaf-rare.component.css']
})
export class OlaLeafRareComponent implements OnInit {

  olaLeafOutputDto: OlaleafoutputDto[] = [];
  canEdit: Boolean = false;
  canDelete: Boolean = false;
  isContentFilled = false;
  isContentError = true;

  constructor(
    private jwtHelper: JwtHelperService,
    private _olaService: OlaLeafsService,
    public dialog: MatDialog,
    private _authservice: AuthService,
    public router: Router
  ) { }

  ngOnInit() {

    this._olaService.getRare().subscribe(res => {
      this.olaLeafOutputDto = res;

      if(res.length != 0){
        this.isContentFilled = true;
        this.isContentError = false;
      }
      
    })

    const token = localStorage.getItem('token');
    const decodeToken = this.jwtHelper.decodeToken(token);

    if (!decodeToken) {
      return false;
    }

    if (decodeToken['permission'].includes("olaleaf.edit"))
      this.canEdit = true;

    if (decodeToken['permission'].includes("olaleaf.delete"))
      this.canDelete = true;

  }

  option(element: any): void {
    if (!isNaN(element)) {
      this._olaService.delete(element).subscribe(res => {
        this.ngOnInit();
      })
    } else {
      this.openDialog(element);
    }
  }

  openDialog(olaLeaf: OlaleafUpdateDto): void {
    const dialogRef = this.dialog.open(OlaLeafRareEditComponent, {
      width: '800px',
      data: { data: olaLeaf }
    });
  }
  

}
