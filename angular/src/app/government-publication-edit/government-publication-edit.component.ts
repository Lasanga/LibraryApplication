import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GovernmentPublicationsService } from '../shared-services/shared-services.component';

@Component({
  selector: 'app-government-publication-edit',
  templateUrl: './government-publication-edit.component.html',
  styleUrls: ['./government-publication-edit.component.css']
})
export class GovernmentPublicationEditComponent implements OnInit {

  element:any;
  constructor(
    private govPubRef: MatDialogRef<GovernmentPublicationEditComponent>, @Inject(MAT_DIALOG_DATA) public data:any,
    private _governmentService:GovernmentPublicationsService) {
      this.element = data['element'];
      console.log(this.element);
     }

  ngOnInit() {
  }

  public sourceType:Array<Object> = [
    {value: 'Public-0', viewValue:'Public'},
    {value: 'Rare-1', viewValue: 'Rare'}
];
  onClose(){
    this.govPubRef.close();
  }
}
