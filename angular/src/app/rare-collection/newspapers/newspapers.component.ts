import { Component, OnInit } from '@angular/core';
import { NewspaperOutputDto, NewsPapersService } from 'src/app/shared-services/shared-services.component';

@Component({
  selector: 'app-rare-newspapers',
  templateUrl: './newspapers.component.html',
  styleUrls: ['./newspapers.component.css']
})
export class NewspapersComponent implements OnInit {

  newsOutputDto: NewspaperOutputDto[] = [];

  constructor(
    private _newsService: NewsPapersService
  ) { }

  ngOnInit() {

    this._newsService.getRare().subscribe(res => {
      this.newsOutputDto = res;
    })
    
  }

}
