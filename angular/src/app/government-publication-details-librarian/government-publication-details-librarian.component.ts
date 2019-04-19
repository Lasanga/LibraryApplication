import { Component, OnInit } from '@angular/core';
import { GovernmentPublicationEditComponent } from '../government-publication-edit/government-publication-edit.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-government-publication-details-librarian',
  templateUrl: './government-publication-details-librarian.component.html',
  styleUrls: ['./government-publication-details-librarian.component.css']
})
export class GovernmentPublicationDetailsLibrarianComponent implements OnInit {

  jasonData:object[];
  constructor(
    private govPubEdit:MatDialog
  ) { }

  ngOnInit() {
  }

  openEdit(element) {
    const govPubRef = this.govPubEdit.open(GovernmentPublicationEditComponent, {
      width: '500px',
      data: {element:element}
    });

    govPubRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
