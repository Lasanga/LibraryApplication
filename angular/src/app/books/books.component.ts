import { BooksService, BookOutputDto } from './../shared-services/shared-services.component';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  private hidden:boolean;
  private icon:string;
  public bookStatus:string = "Public";
  private choice:any;
  private color:string = "green";
  jasonData : object[];
  public role: string;
  jasonData : BookOutputDto[] = [];

  constructor(
    private _booksService : BooksService,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) { }

  ngOnInit() {

    this._booksService.getAll().subscribe(res=>{
      this.jasonData = res
    });

    this.hidden = true;
    this.icon = "edit";

    const token = localStorage.getItem('token');
    const decodeToken = this.jwtHelper.decodeToken(token);
    // console.log();
    this.role = decodeToken['role'];
    // console.log(decodeToken);
  }

  onClickHide(){
    if(this.hidden){
      this.hidden=false;
      this.icon = "close";
    }else{
      this.hidden = true;
      this.icon = "edit";
    }
  }

  onClickColorChange(choice:any){
    this.choice = choice;
    if(this.choice ==1){
      this.color = "green";
      this.bookStatus = "Public";
    }else if(this.choice ==2){
      this.color = "red";
      this.bookStatus = "Rare";
    }
  }

  getHidden(){
    return this.hidden;
  }

  getIcon(){
    return this.icon;
  }
  colorChange(){
    return this.color;
  }

  _onBooksViewmore(){

    if( this.role == 'Admin' ){

      this.router.navigate([ './booksAdmin' ]);

    }else if( this.role == 'Librarian' ){

      this.router.navigate([ './booksLibrarian' ]);

    }else if( this.role[0] == 'LocalUser'){

      this.router.navigate([ './booksUser' ]);

    }else{

      this.router.navigate([ './login' ]);
      
    }


  }

   


}


