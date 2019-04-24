import { Component, OnInit, Inject } from '@angular/core';
import { AuthorOutputDto, CategoryOutputDto, NewspaperInputDto, NewsPapersService, AuthorService, CategoryService } from 'src/app/shared-services/shared-services.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-news-paper-create',
  templateUrl: './news-paper-create.component.html',
  styleUrls: ['./news-paper-create.component.css']
})
export class NewsPaperCreateComponent implements OnInit {

  authors: AuthorOutputDto[] = [];
  categories: CategoryOutputDto[] = [];
  newsPaper: NewspaperInputDto = new NewspaperInputDto();
  canEditSrc: Boolean = false;

  constructor(
    public dialogRef: MatDialogRef<NewsPaperCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public token: any,
    private _newsService: NewsPapersService,
    private _authorService: AuthorService,
    private _categoryService: CategoryService
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
  }

  onSubmit(data: NewspaperInputDto): void{
    data.year = new Date('August 19, 2019 23:15:30');
    this._newsService.create(data).subscribe(res =>{
      this.dialogRef.close();
      location.reload();
    })
  }
}
