import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-government-publication-edit',
  templateUrl: './government-publication-edit.component.html',
  styleUrls: ['./government-publication-edit.component.css']
})
export class GovernmentPublicationEditComponent implements OnInit {

  constructor(
    private govPubRef: MatDialogRef<GovernmentPublicationEditComponent>
  ) { }

  ngOnInit() {
  }

  onClose(){
    this.govPubRef.close();
  }
}
