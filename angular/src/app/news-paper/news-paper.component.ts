import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-paper',
  templateUrl: './news-paper.component.html',
  styleUrls: ['./news-paper.component.css']
})
export class NewsPaperComponent implements OnInit {

  private hidden:boolean;
  private icon:string;
  private choice:any;
  private color:string = "red";
  public bookStatus:string = "public";
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

  onClickColorChange(choice:any){
    this.choice = choice;
    if(this.choice ==1){
      this.color = "green";
      this.bookStatus = "Public";
    }else if(this.choice ==2){
      this.color = "red";
      this.bookStatus = "Rare";
    }
  }
  getHidden(){
    return this.hidden;
  }

  getIcon(){
    return this.icon;
  }

  colorChange(){
    return this.color;
  }
}
