import { Component, OnInit, Inject } from '@angular/core';
import { BookUpdateDto, BooksService, AuthorService, AuthorOutputDto, CategoryOutputDto, CategoryService } from 'src/app/shared-services/shared-services.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-rare-books-edit',
  templateUrl: './rare-books-edit.component.html',
  styleUrls: ['./rare-books-edit.component.css']
})
export class RareBooksEditComponent implements OnInit {

  authors: AuthorOutputDto[] = [];
  categories: CategoryOutputDto[] = [];

  canType: Boolean = false;

  constructor(
    private _bookService: BooksService,
    public dialogRef: MatDialogRef<RareBooksEditComponent>,
    private _authorService: AuthorService,
    private _categoryService: CategoryService,
    private jwtHelper: JwtHelperService,
    @Inject(MAT_DIALOG_DATA) public book: BookUpdateDto,
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
