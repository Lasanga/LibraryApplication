import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-government-publication',
  templateUrl: './government-publication.component.html',
  styleUrls: ['./government-publication.component.css']
})
export class GovernmentPublicationComponent implements OnInit {

  private color : "red";
  private icon: string;
  private hidden: boolean;
  constructor() { }

  ngOnInit() {
    this.hidden=true;
    this.icon = "edit";
  }

  onClickHide(){
    if(this.hidden){
      this.hidden = false;
      this.icon = "close";
    }else{
      this.hidden = true;
      this.icon="edit";
    }
  }
  getHidden(){
    return this.hidden;
  }
  getIcon(){
    return this.icon;
  }
}
