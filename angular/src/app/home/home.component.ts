import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public admin:string;
  id;
  role:string;

  constructor(
    private jwtHelper: JwtHelperService,
    private _Activatedroute:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    // this.role = localStorage.getItem('username');

    this.id = this._Activatedroute.snapshot.params['id'];
    console.log(this.id);

    const token = localStorage.getItem('token');
    const decodeToken = this.jwtHelper.decodeToken(token);

    if (!decodeToken) {
      // console.log('Invalid token');
      return false;
    }

    // return allowedRoles.includes(decodeToken['role']);

    // console.log(decodeToken['role']);

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
