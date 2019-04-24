import { Component, OnInit } from '@angular/core';
import { BooksService, BookOutputDto, BookUpdateDto } from '../shared-services/shared-services.component';
import { MatDialog } from '@angular/material';
import { BookEditComponent } from './book-edit/book-edit.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BookCreateComponent } from './book-create/book-create.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookOutputDto: BookOutputDto[] = [];
  canEdit: Boolean = false;
  canDelete: Boolean = false;
  isForeign: Boolean = false;

  constructor(
    private jwtHelper: JwtHelperService,
    private _bookService: BooksService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    this._bookService.getAll().subscribe(res => {
      this.bookOutputDto = res;
    })

    const token = localStorage.getItem('token');
    const decodeToken = this.jwtHelper.decodeToken(token); 
    
    console.log(decodeToken);
    
    if (!decodeToken) {
      return false;
    }

    if (decodeToken['permission'].includes("books.edit"))
      this.canEdit = true;

    if (decodeToken['permission'].includes("books.delete"))
      this.canDelete = true;

    if (decodeToken['role'] == 'ForeignUser')
      this.isForeign = true;

  }

  option(element: any): void {
    if (!isNaN(element)) {
      this._bookService.deleteBook(element).subscribe(res => {
        this.ngOnInit();
      })
    } else {
      this.openDialog(element);
    }
  }

  openDialog(book: BookUpdateDto): void {
    const dialogRef = this.dialog.open(BookEditComponent, {
      width: '800px',
      data: { data: book }
    });
  }

  openCreate(): void {
    const dialogRef = this.dialog.open(BookCreateComponent, {
      width: '800px'
    });
  }
  
}
