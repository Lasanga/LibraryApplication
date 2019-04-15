import { Component, OnInit } from '@angular/core';
import { OlaLeafsService } from '../shared-services/shared-services.component';

@Component({
  selector: 'app-ola-leaf',
  templateUrl: './ola-leaf.component.html',
  styleUrls: ['./ola-leaf.component.css']
})
export class OlaLeafComponent implements OnInit {

  constructor(
    private _olaleafService: OlaLeafsService
  ) { }

  ngOnInit() {
    this._olaleafService.getAll().subscribe(res => console.log(res));
  }

}
