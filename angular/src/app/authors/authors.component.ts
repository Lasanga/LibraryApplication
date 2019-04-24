import { Component, OnInit } from '@angular/core';
import { AuthorService, AuthorOutputDto, AuthorInputDto } from '../shared-services/shared-services.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatDialog } from '@angular/material';
import { AuthorCreateComponent } from './author-create/author-create.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authorOutputDto: AuthorOutputDto[] =[];
  canEdit: Boolean = false;
  input: AuthorInputDto = new AuthorInputDto();

  constructor(
    private _authorView: AuthorService,
    private _authservice: AuthService,
    private router: Router,
    private jwtHelper: JwtHelperService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    if( this._authservice.isAuthenticated() )
    {

      this._authorView.getAll().subscribe(res => {
        this.authorOutputDto = res;
      })

      const token = localStorage.getItem('token');
      const decodeToken = this.jwtHelper.decodeToken(token);

      if (!decodeToken) {
        return false;
      }

      if (decodeToken['permission'].includes("author.add"))
        this.canEdit = true;

    }else {

      this.router.navigate(['/404NotFound']);

    }

  }


  _onDelete(id:number){
    // id = id;
    this._authorView.delete(id).subscribe(res => {
      location.reload();
    })
  }

  openCreate(): void {
    const dialogRef = this.dialog.open(AuthorCreateComponent, {
      width: '800px'
    });
  }

}
