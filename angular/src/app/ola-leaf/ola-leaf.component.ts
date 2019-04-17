import { Component, OnInit } from '@angular/core';
import { OlaLeafsService } from '../shared-services/shared-services.component';
import { MatDialog } from '@angular/material';
import { OlaEditComponent } from '../ola-edit/ola-edit.component';

@Component({
  selector: 'app-ola-leaf',
  templateUrl: './ola-leaf.component.html',
  styleUrls: ['./ola-leaf.component.css']
})
export class OlaLeafComponent implements OnInit {

  private hidden:boolean;
  private icon:string;
  private choice:any;
  public bookStatus:string = "Public";
  private color:string = "green";
  jsonData: object[];

  constructor(
    private _olaleafService: OlaLeafsService,
    private olaEdit: MatDialog
  ) {}

  ngOnInit() {
    this._olaleafService.getAll().subscribe(res => {
      this.jsonData = res;
    });
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

  openEdit() {
    const olaLeafRef = this.olaEdit.open(OlaEditComponent, {
      width: '500px',
      data: {}
    });

    olaLeafRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
