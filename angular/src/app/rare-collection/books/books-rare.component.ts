import { Component, OnInit } from '@angular/core';
import { BookOutputDto, BooksService } from 'src/app/shared-services/shared-services.component';

@Component({
  selector: 'app-rare-books',
  templateUrl: './books-rare.component.html',
  styleUrls: ['./books-rare.component.css']
})
export class BooksRareComponent implements OnInit {

  bookOutputDto: BookOutputDto[] = [];

  constructor(
    private _bookService: BooksService
  ) { }

  ngOnInit() {

    this._bookService.getRare().subscribe(res => {
      this.bookOutputDto = res;
    })


  }

}
