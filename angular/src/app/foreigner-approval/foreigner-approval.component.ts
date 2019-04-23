import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  username: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-foreigner-approval',
  templateUrl: './foreigner-approval.component.html',
  styleUrls: ['./foreigner-approval.component.css']
})
export class ForeignerApprovalComponent implements OnInit {

  displayedColumns: string[] = ['username', 'email', 'options'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {

  }

  onApproval(id){

  }

}
