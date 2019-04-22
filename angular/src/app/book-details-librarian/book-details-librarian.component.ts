import { BookOutputDto } from './../shared-services/shared-services.component';
import { Component, OnInit } from '@angular/core';
import { BookEditComponent } from '../book-edit/book-edit.component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../shared-services/shared-services.component';

@Component({
  selector: 'app-book-details-librarian',
  templateUrl: './book-details-librarian.component.html',
  styleUrls: ['./book-details-librarian.component.css']
})
export class BookDetailsLibrarianComponent implements OnInit {

  result:  BookOutputDto;
  id: number = 0;
  constructor(
    private bookEdit:MatDialog,
    private _Activatedroute:ActivatedRoute,
    private _bookService:BooksService
  ) { }

  ngOnInit() {
     this.id = this._Activatedroute.snapshot.params['id'];

    this._bookService.get(this.id)
    .subscribe(res => {
      this.result = res;
    })
  }

  openEdit() {
    const bookRef = this.bookEdit.open(BookEditComponent, {
      width: '500px',
      data: {}
    });

    bookRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
