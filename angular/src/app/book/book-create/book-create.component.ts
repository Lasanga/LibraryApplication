import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BooksService, BookInputDto, AuthorService, CategoryService, AuthorOutputDto, CategoryOutputDto } from 'src/app/shared-services/shared-services.component';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  authors: AuthorOutputDto[] = [];
  categories: CategoryOutputDto[] = [];
  book: BookInputDto = new BookInputDto();

  constructor(
    public dialogRef: MatDialogRef<BookCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public bookData: BookInputDto,
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
    })
  }

}
