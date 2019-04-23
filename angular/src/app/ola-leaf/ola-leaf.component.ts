import { Component, OnInit } from '@angular/core';
import { OlaleafoutputDto, OlaLeafsService, OlaleafUpdateDto } from '../shared-services/shared-services.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatDialog } from '@angular/material';
import { OlaLeafEditComponent } from './ola-leaf-edit/ola-leaf-edit.component';
import { OlaLeafCreateComponent } from './ola-leaf-create/ola-leaf-create.component';

@Component({
  selector: 'app-ola-leaf',
  templateUrl: './ola-leaf.component.html',
  styleUrls: ['./ola-leaf.component.css']
})
export class OlaLeafComponent implements OnInit {

  olaLeafOutputDto: OlaleafoutputDto[] = [];
  canEdit: Boolean = false;
  canDelete: Boolean = false;
  isForeign: Boolean = false;

  constructor(
    private jwtHelper: JwtHelperService,
    private _olaService: OlaLeafsService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    this._olaService.getAll().subscribe(res => {
      this.olaLeafOutputDto = res;
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

    if (decodeToken['role'] == 'ForeignUser')
      this.isForeign = true;
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
    const dialogRef = this.dialog.open(OlaLeafEditComponent, {
      width: '800px',
      data: { data: olaLeaf }
    });
  }

  openCreate(): void {
    const dialogRef = this.dialog.open(OlaLeafCreateComponent, {
      width: '800px'
    });
  }
}
