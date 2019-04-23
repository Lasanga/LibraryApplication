import { Component, OnInit } from '@angular/core';
import { NewspaperOutputDto, NewsPapersService, NewspaperUpdateDto } from '../shared-services/shared-services.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatDialog } from '@angular/material';
import { NewsPaperEditComponent } from './news-paper-edit/news-paper-edit.component';
import { NewsPaperCreateComponent } from './news-paper-create/news-paper-create.component';

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

  constructor(
    private jwtHelper: JwtHelperService,
    private _NewsService: NewsPapersService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    this._NewsService.getAll().subscribe(res => {
      this.newsOutputDto = res;
    })

    const token = localStorage.getItem('token');
    const decodeToken = this.jwtHelper.decodeToken(token);

    if (!decodeToken) {
      return false;
    }

    if (decodeToken['permission'].includes("newsPapers.edit"))
      this.canEdit = true;

    if (decodeToken['permission'].includes("newsPapers.delete"))
      this.canDelete = true;

    if (decodeToken['role'] == 'ForeignUser')
      this.isForeign = true;
  }


  option(element: any): void {
    if (!isNaN(element)) {
      this._NewsService.delete(element).subscribe(res => {
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
