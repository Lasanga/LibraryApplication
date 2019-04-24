import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { AuthorOutputDto, CategoryOutputDto, BookInputDto, BooksService, AuthorService, CategoryService } from '../../shared-services/shared-services.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  authors: AuthorOutputDto[] = [];
  categories: CategoryOutputDto[] = [];
  book: BookInputDto = new BookInputDto();
  canEditSrc: Boolean = false;

  constructor(
    public dialogRef: MatDialogRef<BookCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public token: any,
    private _bookService: BooksService,
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

  onSubmit(data: BookInputDto): void{
    data.year = new Date('August 19, 2019 23:15:30');
    this._bookService.createBook(data).subscribe(res =>{
      this.dialogRef.close();
      location.reload();
    })
  }

}
