import { Component, OnInit } from '@angular/core';
import { GovtPublicationOutputDto, GovernmentPublicationsService } from 'src/app/shared-services/shared-services.component';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-rare-government-publications',
  templateUrl: './government-publications-rare.component.html',
  styleUrls: ['./government-publications-rare.component.css']
})
export class GovernmentPublicationsRareComponent implements OnInit {

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
