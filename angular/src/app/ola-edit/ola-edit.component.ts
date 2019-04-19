import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OlaLeafsService } from '../shared-services/shared-services.component';

@Component({
  selector: 'app-ola-edit',
  templateUrl: './ola-edit.component.html',
  styleUrls: ['./ola-edit.component.css']
})
export class OlaEditComponent implements OnInit {

  element:any;
  constructor(
    private olaLeafRef: MatDialogRef<OlaEditComponent>, @Inject(MAT_DIALOG_DATA) public data:any,
    private _olaLeafService:OlaLeafsService) {
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
    this.olaLeafRef.close();
  }
}
