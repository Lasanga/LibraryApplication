import { Component, OnInit } from '@angular/core';
import { NewspaperOutputDto, NewsPapersService, NewspaperUpdateDto } from '../shared-services/shared-services.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatDialog } from '@angular/material';
import { NewsPaperEditComponent } from './news-paper-edit/news-paper-edit.component';
import { NewsPaperCreateComponent } from './news-paper-create/news-paper-create.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-paper',
  templateUrl: './news-paper.component.html',
  styleUrls: ['./news-paper.component.css']
})
export class NewsPaperComponent implements OnInit {

  newsOutputDto: NewspaperOutputDto[] = [];
  canEdit: Boolean = false;
  canDelete: Boolean = false;
  isForeign: Boolean = false;
  length = 5;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  isContentFilled = false;
  isContentError = true;

  constructor(
    private jwtHelper: JwtHelperService,
    private _newsService: NewsPapersService,
    public dialog: MatDialog,
    private _authservice: AuthService,
    public router: Router
  ) { }

  ngOnInit() {

    if( this._authservice.isAuthenticated() ){

      this._newsService.getAll().subscribe(res => {
        this.newsOutputDto = res;

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

      if (decodeToken['permission'].includes("newspaper.edit"))
        this.canEdit = true;

      if (decodeToken['permission'].includes("newspaper.delete"))
        this.canDelete = true;

      if (decodeToken['role'] == 'ForeignUser')
        this.isForeign = true;

    }else{
      this.router.navigate(['/404NotFound']);
    }


  }


  option(element: any): void {
    if (!isNaN(element)) {
      this._newsService.delete(element).subscribe(res => {
        this.ngOnInit();
      })
    } else {
      this.openDialog(element);
    }
  }

  openDialog(newsPaper: NewspaperUpdateDto): void {
    const dialogRef = this.dialog.open(NewsPaperEditComponent, {
      width: '800px',
      data: { data: newsPaper }
    });
  }

  openCreate(): void {
    const dialogRef = this.dialog.open(NewsPaperCreateComponent, {
      width: '800px'
    });
  }

}
