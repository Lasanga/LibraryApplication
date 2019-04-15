import { Component, OnInit } from '@angular/core';
import { OlaLeafsService } from '../shared-services/shared-services.component';

@Component({
  selector: 'app-ola-leaf',
  templateUrl: './ola-leaf.component.html',
  styleUrls: ['./ola-leaf.component.css']
})
export class OlaLeafComponent implements OnInit {

  private hidden:boolean;
  private icon:string;
  constructor(
    private _olaleafService: OlaLeafsService
  ) { }

  ngOnInit() {
    this._olaleafService.getAll().subscribe(res => console.log(res));
    this.hidden = true;
    this.icon ="edit";
  }

  onClickHide(){
    if(this.hidden){
      this.hidden = false;
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
