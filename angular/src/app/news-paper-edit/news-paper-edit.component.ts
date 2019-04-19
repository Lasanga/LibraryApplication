import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-news-paper-edit',
  templateUrl: './news-paper-edit.component.html',
  styleUrls: ['./news-paper-edit.component.css']
})
export class NewsPaperEditComponent implements OnInit {

  constructor(
    private newsPaperRef:MatDialogRef<NewsPaperEditComponent>
  ) { }

  ngOnInit() {
  }

  public sourceType:Array<Object> = [
    {value: 'Public-0', viewValue:'Public'},
    {value: 'Rare-1', viewValue: 'Rare'}
];
  onClose(){
    this.newsPaperRef.close();
  }

}
