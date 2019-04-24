import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AccountService, AddForiegnerInputDto } from '../shared-services/shared-services.component';
// export interface PeriodicElement {
//   username: string;
//   email: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [];
var ForeignerApprovalComponent = /** @class */ (function () {
    function ForeignerApprovalComponent(_accountService) {
        this._accountService = _accountService;
        // displayedColumns: string[] = ['userName', 'email', 'isActive'];
        this.foreignOutputDto = [];
        this.input = new AddForiegnerInputDto();
    }
    ForeignerApprovalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._accountService.getForiegners().subscribe(function (res) {
            _this.foreignOutputDto = res;
        });
        // console.log(this.foreignOutputDto);
    };
    ForeignerApprovalComponent.prototype._onApproved = function (id) {
        this.input.id = id;
        this._accountService.addForiegner(this.input).subscribe(function (res) {
            location.reload();
        });
        // console.log(id);
    };
    ForeignerApprovalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-foreigner-approval',
            templateUrl: './foreigner-approval.component.html',
            styleUrls: ['./foreigner-approval.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AccountService])
    ], ForeignerApprovalComponent);
    return ForeignerApprovalComponent;
}());
export { ForeignerApprovalComponent };
//# sourceMappingURL=foreigner-approval.component.js.map