import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  selected = 'None';

  private hidden:boolean;

  constructor() { }

  ngOnInit() {
    this.hidden = true;
  }

  showUserIdentity()
  {
    return this.hidden;
  }

  localUserClick()
  {
    this.hidden = false;
  }

  foreignUserClick()
  {
    this.hidden = true;
  }


}
