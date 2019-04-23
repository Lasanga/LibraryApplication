import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GovernmentPublicationsService } from '../shared-services/shared-services.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatDialog } from '@angular/material';
import { GovernmentPublicationEditComponent } from './government-publication-edit/government-publication-edit.component';
import { GovernmentPublicationCreateComponent } from './government-publication-create/government-publication-create.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
var GovernmentPublicationComponent = /** @class */ (function () {
    function GovernmentPublicationComponent(jwtHelper, _govService, dialog, router, _authservice) {
        this.jwtHelper = jwtHelper;
        this._govService = _govService;
        this.dialog = dialog;
        this.router = router;
        this._authservice = _authservice;
        this.govPubOutputDto = [];
        this.canEdit = false;
        this.canDelete = false;
        this.isForeign = false;
    }
    GovernmentPublicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authservice.isAuthenticated()) {
            this._govService.getAll().subscribe(function (res) {
                _this.govPubOutputDto = res;
            });
            var token = localStorage.getItem('token');
            var decodeToken = this.jwtHelper.decodeToken(token);
            if (!decodeToken) {
                return false;
            }
            if (decodeToken['permission'].includes("books.edit"))
                this.canEdit = true;
            if (decodeToken['permission'].includes("books.delete"))
                this.canDelete = true;
            if (decodeToken['role'] == 'ForeignUser')
                this.isForeign = true;
        }
        else {
            this.router.navigate(['/404NotFound']);
        }
    };
    GovernmentPublicationComponent.prototype.option = function (element) {
        var _this = this;
        if (!isNaN(element)) {
            this._govService.delete(element).subscribe(function (res) {
                _this.ngOnInit();
            });
        }
        else {
            this.openDialog(element);
        }
    };
    GovernmentPublicationComponent.prototype.openDialog = function (govPub) {
        var dialogRef = this.dialog.open(GovernmentPublicationEditComponent, {
            width: '800px',
            data: { data: govPub }
        });
    };
    GovernmentPublicationComponent.prototype.openCreate = function () {
        var dialogRef = this.dialog.open(GovernmentPublicationCreateComponent, {
            width: '800px'
        });
    };
    GovernmentPublicationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-government-publication',
            templateUrl: './government-publication.component.html',
            styleUrls: ['./government-publication.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [JwtHelperService,
            GovernmentPublicationsService,
            MatDialog,
            Router,
            AuthService])
    ], GovernmentPublicationComponent);
    return GovernmentPublicationComponent;
}());
export { GovernmentPublicationComponent };
//# sourceMappingURL=government-publication.component.js.map