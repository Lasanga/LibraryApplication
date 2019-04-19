import { BookEditComponent } from '../book-edit/book-edit.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(
    private bookEdit:MatDialog
  ) { }

  ngOnInit() {
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
