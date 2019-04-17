import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  constructor(
    private bookEditRef:MatDialogRef<BookEditComponent>
  ) { }

  ngOnInit() {
  }

  onClose(){
    this.bookEditRef.close();
  }
}
