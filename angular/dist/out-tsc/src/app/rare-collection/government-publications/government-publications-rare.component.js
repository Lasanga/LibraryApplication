import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GovernmentPublicationsService } from 'src/app/shared-services/shared-services.component';
import { AuthService } from 'src/app/auth.service';
var GovernmentPublicationsRareComponent = /** @class */ (function () {
    function GovernmentPublicationsRareComponent(_govService, _authservice) {
        this._govService = _govService;
        this._authservice = _authservice;
        this.govPubOutputDto = [];
    }
    GovernmentPublicationsRareComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authservice.isAuthenticated()) {
            this._govService.getRare().subscribe(function (res) {
                _this.govPubOutputDto = res;
            });
        }
    };
    GovernmentPublicationsRareComponent = tslib_1.__decorate([
        Component({
            selector: 'app-rare-government-publications',
            templateUrl: './government-publications-rare.component.html',
            styleUrls: ['./government-publications-rare.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [GovernmentPublicationsService,
            AuthService])
    ], GovernmentPublicationsRareComponent);
    return GovernmentPublicationsRareComponent;
}());
export { GovernmentPublicationsRareComponent };
//# sourceMappingURL=government-publications-rare.component.js.map