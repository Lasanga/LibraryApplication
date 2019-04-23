import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Intellect';
  name = "Guest";
  viewRare: Boolean = false;

  public isLoggedIn = false;

  // isLoggedIn$: Observable<boolean>;

  constructor(
    private router: Router,
    private jwtHelper: JwtHelperService
  ) { }

  ngOnInit() {

    const token = localStorage.getItem('token');
    const decodeToken = this.jwtHelper.decodeToken(token);

    if (!decodeToken) {
      return false;
    }

    if (decodeToken['role'][0] == "LocalUser")
      this.viewRare = true;


  }

  _showName()
  {

    if( localStorage.getItem('token') )
    {
      this.isLoggedIn = true;
      this.name = localStorage.getItem('username');
    }else{
      this.name = "Guest";
    }

    return this.name;

  }


  _logout()
  {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/home']);
    location.reload();
  }

}
