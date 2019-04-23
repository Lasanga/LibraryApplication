import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService, BookOutputDto } from '../shared-services/shared-services.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public admin:string;
  id;
  role:string;

  bookOutputDto: BookOutputDto[] = [];

  constructor(
    private jwtHelper: JwtHelperService,
    private _Activatedroute:ActivatedRoute,
    private router: Router,
    private _bookService: BooksService
  ) { }

  ngOnInit() {

    this._bookService.getAll().subscribe(res => {
      this.bookOutputDto = res;
    })

    this.id = this._Activatedroute.snapshot.params['id'];
    console.log(this.id);

    const token = localStorage.getItem('token');
    const decodeToken = this.jwtHelper.decodeToken(token);

    if (!decodeToken) {
      return false;
    }

    if(decodeToken['role'] == 'Admin'){
      this.admin = "Admin";
    }else{
      this.admin = "No";
    }



  }

  // bookBtn(){
  //   if(this.admin == 'Admin'){
  //     this.router.navigate([ '/booksAdmin' ]);
  //   }
  // }

}
