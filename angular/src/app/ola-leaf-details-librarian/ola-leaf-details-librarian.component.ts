import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OlaEditComponent } from '../ola-edit/ola-edit.component';

@Component({
  selector: 'app-ola-leaf-details-librarian',
  templateUrl: './ola-leaf-details-librarian.component.html',
  styleUrls: ['./ola-leaf-details-librarian.component.css']
})
export class OlaLeafDetailsLibrarianComponent implements OnInit {

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
