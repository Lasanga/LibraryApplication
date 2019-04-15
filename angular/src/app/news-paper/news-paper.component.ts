import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-paper',
  templateUrl: './news-paper.component.html',
  styleUrls: ['./news-paper.component.css']
})
export class NewsPaperComponent implements OnInit {

  private hidden:boolean;
  private icon:string;
  constructor() { }

  ngOnInit() {
    this.hidden = true;
    this.icon = "edit";
  }

  onClickHide(){
    if(this.hidden){
      this.hidden =false;
      this.icon = "close";
    }else{
      this.hidden = true;
      this.icon = "edit";
    }
  }

  getHidden(){
    return this.hidden;
  }

  getIcon(){
    return this.icon;
  }
}
