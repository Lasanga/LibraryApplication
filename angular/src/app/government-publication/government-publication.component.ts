import { Component, OnInit } from '@angular/core';
import { GovtPublicationOutputDto, GovernmentPublicationsService, GovtPublicationUpdateDto } from '../shared-services/shared-services.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatDialog } from '@angular/material';
import { GovernmentPublicationEditComponent } from './government-publication-edit/government-publication-edit.component';
import { GovernmentPublicationCreateComponent } from './government-publication-create/government-publication-create.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-government-publication',
  templateUrl: './government-publication.component.html',
  styleUrls: ['./government-publication.component.css']
})
export class GovernmentPublicationComponent implements OnInit {

  govPubOutputDto: GovtPublicationOutputDto[] = [];
  canEdit: Boolean = false;
  canDelete: Boolean = false;
  isForeign: Boolean = false;

  constructor(
    private jwtHelper: JwtHelperService,
    private _govService: GovernmentPublicationsService,
    public dialog: MatDialog,
    private router: Router,
    private _authservice: AuthService
  ) { }

  ngOnInit() {

    if( this._authservice.isAuthenticated() ){

      this._govService.getAll().subscribe(res => {
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
  
      if (decodeToken['role'] == 'ForeignUser')
        this.isForeign = true;

    }else{
      this.router.navigate(['/404NotFound']);
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
    const dialogRef = this.dialog.open(GovernmentPublicationEditComponent, {
      width: '800px',
      data: { data: govPub }
    });
  }

  openCreate(): void {
    const dialogRef = this.dialog.open(GovernmentPublicationCreateComponent, {
      width: '800px'
    });
  }

}
