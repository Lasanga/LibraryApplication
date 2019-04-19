import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public admin:string;

  constructor(
    private jwtHelper: JwtHelperService
  ) { }

  ngOnInit() {

    const token = localStorage.getItem('token');
    const decodeToken = this.jwtHelper.decodeToken(token);

    if (!decodeToken) {
      console.log('Invalid token');
      return false;
    }

    // return allowedRoles.includes(decodeToken['role']);

    console.log(decodeToken['role']);

    if(decodeToken['role'] == 'Admin'){
      this.admin = "Admin";
    }else{
      this.admin = "No";
    }

  }

}
