import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewsPaperEditComponent } from '../news-paper-edit/news-paper-edit.component';

@Component({
  selector: 'app-news-paper-details',
  templateUrl: './news-paper-details.component.html',
  styleUrls: ['./news-paper-details.component.css']
})
export class NewsPaperDetailsComponent implements OnInit {

  constructor(
    private newsPaperEdit:MatDialog
  ) { }

  ngOnInit() {
  }

  openEdit() {
    const newsPaperRef = this.newsPaperEdit.open(NewsPaperEditComponent, {
      width: '500px',
      data: {}
    });

    newsPaperRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
