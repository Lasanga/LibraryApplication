import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rare-collection',
  templateUrl: './rare-collection.component.html',
  styleUrls: ['./rare-collection.component.css']
})
export class RareCollectionComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    if( !this._authService.isAuthenticated() )
    {
      this.router.navigate(['/login'])
    }

  }

}
