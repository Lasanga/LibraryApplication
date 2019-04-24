import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { OlaLeafInputDto, OlaLeafsService, AuthorService, CategoryService } from 'src/app/shared-services/shared-services.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var OlaLeafCreateComponent = /** @class */ (function () {
    function OlaLeafCreateComponent(dialogRef, token, _olaService, _authorService, _categoryService) {
        this.dialogRef = dialogRef;
        this.token = token;
        this._olaService = _olaService;
        this._authorService = _authorService;
        this._categoryService = _categoryService;
        this.authors = [];
        this.categories = [];
        this.olaLeaf = new OlaLeafInputDto();
        this.canEditSrc = false;
    }
    OlaLeafCreateComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    OlaLeafCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authorService.getAll().subscribe(function (res) {
            _this.authors = res;
        });
        this._categoryService.getAll().subscribe(function (res) {
            _this.categories = res;
        });
    };
    OlaLeafCreateComponent.prototype.onSubmit = function (data) {
        var _this = this;
        data.year = new Date('August 19, 2019 23:15:30');
        this._olaService.create(data).subscribe(function (res) {
            _this.dialogRef.close();
            location.reload();
        });
    };
    OlaLeafCreateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ola-leaf-create',
            templateUrl: './ola-leaf-create.component.html',
            styleUrls: ['./ola-leaf-create.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object, OlaLeafsService,
            AuthorService,
            CategoryService])
    ], OlaLeafCreateComponent);
    return OlaLeafCreateComponent;
}());
export { OlaLeafCreateComponent };
//# sourceMappingURL=ola-leaf-create.component.js.map