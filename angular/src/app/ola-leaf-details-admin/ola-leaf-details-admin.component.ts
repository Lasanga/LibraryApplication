import { Component, OnInit } from '@angular/core';
import { OlaEditComponent } from '../ola-edit/ola-edit.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-ola-leaf-details-admin',
  templateUrl: './ola-leaf-details-admin.component.html',
  styleUrls: ['./ola-leaf-details-admin.component.css']
})
export class OlaLeafDetailsAdminComponent implements OnInit {

  jasonData:object[];
  constructor(
    private olaEdit: MatDialog
  ) { }

  ngOnInit() {
  }

  openEdit(element) {
    const olaLeafRef = this.olaEdit.open(OlaEditComponent, {
      width: '500px',
      data: {element:element}
    });

    olaLeafRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
