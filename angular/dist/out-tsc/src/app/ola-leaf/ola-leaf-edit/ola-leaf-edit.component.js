import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { OlaleafUpdateDto, OlaLeafsService, AuthorService, CategoryService } from 'src/app/shared-services/shared-services.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { JwtHelperService } from '@auth0/angular-jwt';
var OlaLeafEditComponent = /** @class */ (function () {
    function OlaLeafEditComponent(dialogRef, olaLeaf, _olaService, _authorService, _categoryService, jwtHelper) {
        this.dialogRef = dialogRef;
        this.olaLeaf = olaLeaf;
        this._olaService = _olaService;
        this._authorService = _authorService;
        this._categoryService = _categoryService;
        this.jwtHelper = jwtHelper;
        this.authors = [];
        this.categories = [];
        this.canType = false;
    }
    OlaLeafEditComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    OlaLeafEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authorService.getAll().subscribe(function (res) {
            _this.authors = res;
        });
        this._categoryService.getAll().subscribe(function (res) {
            _this.categories = res;
        });
        var token = localStorage.getItem('token');
        var decodeToken = this.jwtHelper.decodeToken(token);
        if (decodeToken['permission'].includes("olaleaf.rare")) {
            if (decodeToken['role'] == 'Librarian') {
                this.canType = false;
            }
            else {
                this.canType = true;
            }
        }
    };
    OlaLeafEditComponent.prototype.onSubmit = function (data) {
        var _this = this;
        data.year = new Date('August 19, 2019 23:15:30');
        this._olaService.update(data).subscribe(function (res) {
            _this.dialogRef.close();
            location.reload();
        });
    };
    OlaLeafEditComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ola-leaf-edit',
            templateUrl: './ola-leaf-edit.component.html',
            styleUrls: ['./ola-leaf-edit.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef,
            OlaleafUpdateDto,
            OlaLeafsService,
            AuthorService,
            CategoryService,
            JwtHelperService])
    ], OlaLeafEditComponent);
    return OlaLeafEditComponent;
}());
export { OlaLeafEditComponent };
//# sourceMappingURL=ola-leaf-edit.component.js.map