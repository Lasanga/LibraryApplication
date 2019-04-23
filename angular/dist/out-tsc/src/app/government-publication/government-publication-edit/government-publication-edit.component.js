import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { GovtPublicationUpdateDto, GovernmentPublicationsService, AuthorService, CategoryService } from 'src/app/shared-services/shared-services.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { JwtHelperService } from '@auth0/angular-jwt';
var GovernmentPublicationEditComponent = /** @class */ (function () {
    function GovernmentPublicationEditComponent(dialogRef, govPub, _govService, _authorService, _categoryService, jwtHelper) {
        this.dialogRef = dialogRef;
        this.govPub = govPub;
        this._govService = _govService;
        this._authorService = _authorService;
        this._categoryService = _categoryService;
        this.jwtHelper = jwtHelper;
        this.authors = [];
        this.categories = [];
        this.canType = false;
    }
    GovernmentPublicationEditComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    GovernmentPublicationEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authorService.getAll().subscribe(function (res) {
            _this.authors = res;
        });
        this._categoryService.getAll().subscribe(function (res) {
            _this.categories = res;
        });
        var token = localStorage.getItem('token');
        var decodeToken = this.jwtHelper.decodeToken(token);
        if (decodeToken['permission'].includes("govt.rare")) {
            if (decodeToken['role'] == 'Librarian') {
                this.canType = false;
            }
            else {
                this.canType = true;
            }
        }
    };
    GovernmentPublicationEditComponent.prototype.onSubmit = function (data) {
        var _this = this;
        data.year = new Date('August 19, 2019 23:15:30');
        this._govService.update(data).subscribe(function (res) {
            _this.dialogRef.close();
            location.reload();
        });
    };
    GovernmentPublicationEditComponent = tslib_1.__decorate([
        Component({
            selector: 'app-government-publication-edit',
            templateUrl: './government-publication-edit.component.html',
            styleUrls: ['./government-publication-edit.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef,
            GovtPublicationUpdateDto,
            GovernmentPublicationsService,
            AuthorService,
            CategoryService,
            JwtHelperService])
    ], GovernmentPublicationEditComponent);
    return GovernmentPublicationEditComponent;
}());
export { GovernmentPublicationEditComponent };
//# sourceMappingURL=government-publication-edit.component.js.map