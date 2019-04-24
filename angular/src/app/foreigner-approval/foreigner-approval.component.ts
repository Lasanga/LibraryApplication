import { Component, OnInit, Input } from '@angular/core';
import { AccountService, UnRegUserOutputDto, AddForiegnerInputDto } from '../shared-services/shared-services.component';


@Component({
  selector: 'app-foreigner-approval',
  templateUrl: './foreigner-approval.component.html',
  styleUrls: ['./foreigner-approval.component.css']
})
export class ForeignerApprovalComponent implements OnInit {

  foreignOutputDto: UnRegUserOutputDto[] = [];
  input: AddForiegnerInputDto = new AddForiegnerInputDto();

  constructor(
    private _accountService: AccountService,
  ) { }

  ngOnInit() {

    this._accountService.getForiegners().subscribe(res => {
      this.foreignOutputDto = res;
    })

  }

  _onApproved(id:string){
    this.input.id = id;
    this._accountService.addForiegner(this.input).subscribe(res => {
      location.reload();
    })
  }

}
