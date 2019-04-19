import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GovernmentPublicationEditComponent } from '../government-publication-edit/government-publication-edit.component';
import { GovernmentPublicationsService } from '../shared-services/shared-services.component';

@Component({
  selector: 'app-government-publication',
  templateUrl: './government-publication.component.html',
  styleUrls: ['./government-publication.component.css']
})
export class GovernmentPublicationComponent implements OnInit {

  private icon: string;
  private hidden: boolean;
  public bookStatus:string = "Public";
  private color:string = "green";
  private choice:any;
  jasonData:object[];

  constructor(
    private _governmentPublication: GovernmentPublicationsService,
    private govPubEdit:MatDialog
  ) { }

  ngOnInit() {
    this._governmentPublication.getAll().subscribe(res =>{
      this.jasonData = res
    });
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
  colorChange(){
    return this.color;
  }
  openEdit() {
    const govPubRef = this.govPubEdit.open(GovernmentPublicationEditComponent, {
      width: '500px',
      data: {}
    });

    govPubRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
