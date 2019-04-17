import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-ola-edit',
  templateUrl: './ola-edit.component.html',
  styleUrls: ['./ola-edit.component.css']
})
export class OlaEditComponent implements OnInit {

  constructor(
    private olaLeafRef: MatDialogRef<OlaEditComponent>
  ) { }

  ngOnInit() {
  }

  onClose(){
    this.olaLeafRef.close();
  }
}
