import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
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

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // matcher = new MyErrorStateMatcher();

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
