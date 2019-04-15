import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private returnUrl: string;

  constructor(
    private _authService: AuthService,
    private router: Router, 
    private activated: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activated.queryParams.subscribe(params => {
        this.returnUrl = params["returnUrl"];
    });

    const username = "admin";
    const password = "123qwe";

    this._authService.authenticate(username, password)
    .subscribe(res =>{
      console.log(res)
    })

  }

}
