import { Component, OnInit } from '@angular/core';
import { AccountService, UnRegUserOutputDto, AddForiegnerInputDto } from '../shared-services/shared-services.component';

// export interface PeriodicElement {
//   username: string;
//   email: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-foreigner-approval',
  templateUrl: './foreigner-approval.component.html',
  styleUrls: ['./foreigner-approval.component.css']
})
export class ForeignerApprovalComponent implements OnInit {

  // displayedColumns: string[] = ['userName', 'email', 'isActive'];
  foreignOutputDto: UnRegUserOutputDto[] = [];
  // dataSource = this.foreignOutputDto;

  constructor(
    private _accountService: AccountService,
  ) { }

  ngOnInit() {

    this._accountService.getForiegners().subscribe(res => {
      this.foreignOutputDto = res;
    })

    // console.log(this.foreignOutputDto);

  }

  _onApproved(id:any){
    this._accountService.addForiegner(id).subscribe(res => {
      location.reload();
    })
    // console.log(id);
  }

}
