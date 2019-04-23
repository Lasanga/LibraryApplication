import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username = new FormControl('', [
    Validators.required
  ]);
  password = new FormControl('', [
    Validators.required
  ]);


  private returnUrl: string;
  private msg: string;

  constructor(
    private _authService: AuthService,
    private router: Router, 
    private activated: ActivatedRoute
  ) { }

  ngOnInit() {      
    
    if( this._authService.isAuthenticated() ){

      this.router.navigate(['/book']);

    }

  }


  public _login()
  {

    this.activated.queryParams.subscribe(params => {
        this.returnUrl = params["returnUrl"];
    });

    this._authService.authenticate(this.username.value, this.password.value)
    .subscribe(res =>{

      if(res)
      {
        this.router.navigate(['/book']);
        location.reload();
        
      }else{
        this.msg = "Error";
      }


    })

  }


}