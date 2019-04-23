import { Component, OnInit, Inject } from '@angular/core';
import { AuthorOutputDto, CategoryOutputDto, NewsPapersService, AuthorService, CategoryService, NewspaperUpdateDto } from 'src/app/shared-services/shared-services.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-news-paper-edit',
  templateUrl: './news-paper-edit.component.html',
  styleUrls: ['./news-paper-edit.component.css']
})
export class NewsPaperEditComponent implements OnInit {

  authors: AuthorOutputDto[] = [];
  categories: CategoryOutputDto[] = [];
1
  canType: Boolean = false;

  constructor(
    public dialogRef: MatDialogRef<NewsPaperEditComponent>,
    @Inject(MAT_DIALOG_DATA) public newsPaper: NewspaperUpdateDto,
    private _newsService: NewsPapersService,
    private _authorService: AuthorService,
    private _categoryService: CategoryService,
    private jwtHelper: JwtHelperService,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this._authorService.getAll().subscribe(res => {
      this.authors = res;
    });

    this._categoryService.getAll().subscribe(res => {
      this.categories = res;
    });

    const token = localStorage.getItem('token');
    const decodeToken = this.jwtHelper.decodeToken(token);

    if (decodeToken['permission'].includes("newspaper.rare"))
      this.canType = true;
  }

  onSubmit(data: NewspaperUpdateDto): void{
    data.year = new Date('August 19, 2019 23:15:30');
    this._newsService.update(data).subscribe(res =>{
      this.dialogRef.close();
      location.reload();
    })
  }
}
