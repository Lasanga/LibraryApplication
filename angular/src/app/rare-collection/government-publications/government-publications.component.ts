import { Component, OnInit } from '@angular/core';
import { GovtPublicationOutputDto, GovernmentPublicationsService } from 'src/app/shared-services/shared-services.component';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-rare-government-publications',
  templateUrl: './government-publications.component.html',
  styleUrls: ['./government-publications.component.css']
})
export class GovernmentPublicationsComponent implements OnInit {

  govPubOutputDto: GovtPublicationOutputDto[] = [];

  constructor(
    private _govService: GovernmentPublicationsService,
    private _authservice: AuthService
  ) { }

  ngOnInit() {

    if( this._authservice.isAuthenticated() ){

      this._govService.getRare().subscribe(res => {
        this.govPubOutputDto = res;
      })

    }
  }

}
