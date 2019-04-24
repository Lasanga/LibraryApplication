import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { GovtPublicationInputDto, GovernmentPublicationsService, AuthorService, CategoryService } from 'src/app/shared-services/shared-services.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var GovernmentPublicationCreateComponent = /** @class */ (function () {
    function GovernmentPublicationCreateComponent(dialogRef, token, _govService, _authorService, _categoryService) {
        this.dialogRef = dialogRef;
        this.token = token;
        this._govService = _govService;
        this._authorService = _authorService;
        this._categoryService = _categoryService;
        this.authors = [];
        this.categories = [];
        this.govPub = new GovtPublicationInputDto();
        this.canEditSrc = false;
    }
    GovernmentPublicationCreateComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    GovernmentPublicationCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authorService.getAll().subscribe(function (res) {
            _this.authors = res;
        });
        this._categoryService.getAll().subscribe(function (res) {
            _this.categories = res;
        });
    };
    GovernmentPublicationCreateComponent.prototype.onSubmit = function (data) {
        var _this = this;
        data.year = new Date('August 19, 2019 23:15:30');
        this._govService.create(data).subscribe(function (res) {
            _this.dialogRef.close();
            location.reload();
        });
    };
    GovernmentPublicationCreateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-government-publication-create',
            templateUrl: './government-publication-create.component.html',
            styleUrls: ['./government-publication-create.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object, GovernmentPublicationsService,
            AuthorService,
            CategoryService])
    ], GovernmentPublicationCreateComponent);
    return GovernmentPublicationCreateComponent;
}());
export { GovernmentPublicationCreateComponent };
//# sourceMappingURL=government-publication-create.component.js.map