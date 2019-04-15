import { Component, OnInit } from '@angular/core';
import { BooksService, BookOutputDto, CategoryService, CategoryOutputDto } from '../shared-services/shared-services.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  category: CategoryOutputDto[] = [];

  constructor(
    private _categoryService: CategoryService
  ) { }

  ngOnInit() {
    this._categoryService.getAll().subscribe(res => {
      res.forEach(element => {
        console.log(element.displayName);
      });
    });
  }

}
