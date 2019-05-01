import { Component, OnInit } from '@angular/core';
import { BookOutputDto, BooksService, BookUpdateDto } from 'src/app/shared-services/shared-services.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatDialog } from '@angular/material';
import { RareBooksEditComponent } from './rare-books-edit/rare-books-edit.component';

@Component({
  selector: 'app-rare-books',
  templateUrl: './books-rare.component.html',
  styleUrls: ['./books-rare.component.css']
})
export class BooksRareComponent implements OnInit {

  bookOutputDto: BookOutputDto[] = [];
  canEdit: Boolean = false;
  canDelete: Boolean = false;
  isContentFilled = false;
  isContentError = true;

  constructor(
    private _bookService: BooksService,
    private jwtHelper: JwtHelperService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    this._bookService.getRare().subscribe(res => {
      this.bookOutputDto = res;

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

    if (decodeToken['permission'].includes("books.edit"))
      this.canEdit = true;

    if (decodeToken['permission'].includes("books.delete"))
      this.canDelete = true;

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
    const dialogRef = this.dialog.open(RareBooksEditComponent, {
      width: '800px',
      data: { data: book }
    });
  }


}
