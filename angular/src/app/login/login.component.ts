import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

export class LoginComponent implements OnInit {

  username = new FormControl('', [
    Validators.required
  ]);
  password = new FormControl('', [
    Validators.required
  ]);

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // matcher = new MyErrorStateMatcher();

  private returnUrl: string;
  private msg: string;

  constructor(
    private _authService: AuthService,
    private router: Router, 
    private activated: ActivatedRoute
  ) { }

 

  ngOnInit() {                

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
        // window.location.href = "/home";
        this.router.navigate(['/home']);
        
      }else{
        this.msg = "Error";
      }


    })

  }


}