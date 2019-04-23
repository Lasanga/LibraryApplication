import { Component, OnInit } from '@angular/core';
import { GovtPublicationOutputDto, GovernmentPublicationsService, GovtPublicationUpdateDto } from 'src/app/shared-services/shared-services.component';
import { AuthService } from 'src/app/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { GovernmentPublicationsRareEditComponent } from './government-publications-rare-edit/government-publications-rare-edit.component';

@Component({
  selector: 'app-rare-government-publications',
  templateUrl: './government-publications-rare.component.html',
  styleUrls: ['./government-publications-rare.component.css']
})
export class GovernmentPublicationsRareComponent implements OnInit {

  govPubOutputDto: GovtPublicationOutputDto[] = [];
  canEdit: Boolean = false;
  canDelete: Boolean = false;

  constructor(
    private jwtHelper: JwtHelperService,
    private _govService: GovernmentPublicationsService,
    public dialog: MatDialog,
    private router: Router,
    private _authservice: AuthService
  ) { }

  ngOnInit() {

    if( this._authservice.isAuthenticated() ){

      this._govService.getRare().subscribe(res => {
        this.govPubOutputDto = res;
      })

      const token = localStorage.getItem('token');
      const decodeToken = this.jwtHelper.decodeToken(token);
  
      if (!decodeToken) {
        return false;
      }
  
      if (decodeToken['permission'].includes("books.edit"))
        this.canEdit = true;
  
      if (decodeToken['permission'].includes("books.delete"))
        this.canDelete = true;

    }

  }

  option(element: any): void {
    if (!isNaN(element)) {
      this._govService.delete(element).subscribe(res => {
        this.ngOnInit();
      })
    } else {
      this.openDialog(element);
    }
  }

  openDialog(govPub: GovtPublicationUpdateDto): void {
    const dialogRef = this.dialog.open(GovernmentPublicationsRareEditComponent, {
      width: '800px',
      data: { data: govPub }
    });
  }

}
