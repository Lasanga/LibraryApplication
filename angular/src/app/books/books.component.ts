import { BooksService } from './../shared-services/shared-services.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  private hidden:boolean;
  private icon:string;
  public bookStatus:string = "Public";
  private choice:any;
  private color:string = "green";
  jasonData : object[];

  constructor(
    private _booksService : BooksService
  ) { }

  ngOnInit() {
    this._booksService.getAll().subscribe(res=>{
      this.jasonData = res
    });
    this.hidden = true;
    this.icon = "edit";
  }

  onClickHide(){
    if(this.hidden){
      this.hidden=false;
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
