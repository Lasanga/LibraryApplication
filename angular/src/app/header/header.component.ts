import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Intellect';
  name = "Guest";

  public isLoggedIn = false;

  // isLoggedIn$: Observable<boolean>;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

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
