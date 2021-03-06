import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegisterInputDto, AccountService } from '../shared-services/shared-services.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  userRegister: UserRegisterInputDto;

  constructor(
    private router: Router,
    private _userService: AccountService,
    private _authService: AuthService
  ) { }

  ngOnInit() {

    if( this._authService.isAuthenticated() ){

      this.router.navigate(['/book']);

    }

    this.userRegister = new UserRegisterInputDto();
  }

  register(userRegister: UserRegisterInputDto): void{
    this._userService.register(userRegister).subscribe(res => {
      this.router.navigate(['/login']);
    })
  }



}
