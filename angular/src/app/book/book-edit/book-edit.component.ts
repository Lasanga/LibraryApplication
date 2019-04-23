import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Location } from '@angular/common';
import { BooksService, AuthorOutputDto, CategoryOutputDto, AuthorService, CategoryService, BookOutputDto, BookUpdateDto } from 'src/app/shared-services/shared-services.component';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  authors: AuthorOutputDto[] = [];
  categories: CategoryOutputDto[] = [];

  canType: Boolean = false;

  constructor(
    public dialogRef: MatDialogRef<BookEditComponent>,
    @Inject(MAT_DIALOG_DATA) public book: BookUpdateDto,
    private _bookService: BooksService,
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

    if (decodeToken['permission'].includes("books.rare")){
      
      if(decodeToken['role'] == 'Librarian'){
        this.canType = false;
      }else{
        this.canType = true;
      }
    }

  }

  onSubmit(data: BookUpdateDto): void{
    data.year = new Date('August 19, 2019 23:15:30');
    this._bookService.updateBook(data).subscribe(res =>{
      this.dialogRef.close();
      location.reload();
    })
  }

}
