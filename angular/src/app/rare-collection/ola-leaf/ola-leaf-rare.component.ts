import { Component, OnInit } from '@angular/core';
import { OlaleafoutputDto, OlaLeafsService } from 'src/app/shared-services/shared-services.component';

@Component({
  selector: 'app-rare-ola-leaf',
  templateUrl: './ola-leaf-rare.component.html',
  styleUrls: ['./ola-leaf-rare.component.css']
})
export class OlaLeafRareComponent implements OnInit {

  olaLeafOutputDto: OlaleafoutputDto[] = [];

  constructor(
    private _olaService: OlaLeafsService
  ) { }

  ngOnInit() {

    this._olaService.getRare().subscribe(res => {
      this.olaLeafOutputDto = res;
    })

  }

}
