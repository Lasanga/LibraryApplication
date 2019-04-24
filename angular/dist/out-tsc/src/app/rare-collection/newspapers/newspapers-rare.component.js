import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NewsPapersService } from 'src/app/shared-services/shared-services.component';
var NewspapersRareComponent = /** @class */ (function () {
    function NewspapersRareComponent(_newsService) {
        this._newsService = _newsService;
        this.newsOutputDto = [];
    }
    NewspapersRareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._newsService.getRare().subscribe(function (res) {
            _this.newsOutputDto = res;
        });
    };
    NewspapersRareComponent = tslib_1.__decorate([
        Component({
            selector: 'app-rare-newspapers',
            templateUrl: './newspapers-rare.component.html',
            styleUrls: ['./newspapers-rare.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [NewsPapersService])
    ], NewspapersRareComponent);
    return NewspapersRareComponent;
}());
export { NewspapersRareComponent };
//# sourceMappingURL=newspapers-rare.component.js.map