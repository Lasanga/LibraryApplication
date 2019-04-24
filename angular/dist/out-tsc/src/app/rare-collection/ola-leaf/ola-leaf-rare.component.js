import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OlaLeafsService } from 'src/app/shared-services/shared-services.component';
var OlaLeafRareComponent = /** @class */ (function () {
    function OlaLeafRareComponent(_olaService) {
        this._olaService = _olaService;
        this.olaLeafOutputDto = [];
    }
    OlaLeafRareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._olaService.getRare().subscribe(function (res) {
            _this.olaLeafOutputDto = res;
        });
    };
    OlaLeafRareComponent = tslib_1.__decorate([
        Component({
            selector: 'app-rare-ola-leaf',
            templateUrl: './ola-leaf-rare.component.html',
            styleUrls: ['./ola-leaf-rare.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [OlaLeafsService])
    ], OlaLeafRareComponent);
    return OlaLeafRareComponent;
}());
export { OlaLeafRareComponent };
//# sourceMappingURL=ola-leaf-rare.component.js.map