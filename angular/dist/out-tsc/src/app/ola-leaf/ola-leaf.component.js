import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OlaLeafsService } from '../shared-services/shared-services.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatDialog } from '@angular/material';
import { OlaLeafEditComponent } from './ola-leaf-edit/ola-leaf-edit.component';
import { OlaLeafCreateComponent } from './ola-leaf-create/ola-leaf-create.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
var OlaLeafComponent = /** @class */ (function () {
    function OlaLeafComponent(jwtHelper, _olaService, dialog, _authservice, router) {
        this.jwtHelper = jwtHelper;
        this._olaService = _olaService;
        this.dialog = dialog;
        this._authservice = _authservice;
        this.router = router;
        this.olaLeafOutputDto = [];
        this.canEdit = false;
        this.canDelete = false;
        this.isForeign = false;
    }
    OlaLeafComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authservice.isAuthenticated()) {
            this._olaService.getAll().subscribe(function (res) {
                _this.olaLeafOutputDto = res;
            });
            var token = localStorage.getItem('token');
            var decodeToken = this.jwtHelper.decodeToken(token);
            if (!decodeToken) {
                return false;
            }
            if (decodeToken['permission'].includes("olaleaf.edit"))
                this.canEdit = true;
            if (decodeToken['permission'].includes("olaleaf.delete"))
                this.canDelete = true;
            if (decodeToken['role'] == 'ForeignUser')
                this.isForeign = true;
        }
        else {
            this.router.navigate(['/404NotFound']);
        }
    };
    OlaLeafComponent.prototype.option = function (element) {
        var _this = this;
        if (!isNaN(element)) {
            this._olaService.delete(element).subscribe(function (res) {
                _this.ngOnInit();
            });
        }
        else {
            this.openDialog(element);
        }
    };
    OlaLeafComponent.prototype.openDialog = function (olaLeaf) {
        var dialogRef = this.dialog.open(OlaLeafEditComponent, {
            width: '800px',
            data: { data: olaLeaf }
        });
    };
    OlaLeafComponent.prototype.openCreate = function () {
        var dialogRef = this.dialog.open(OlaLeafCreateComponent, {
            width: '800px'
        });
    };
    OlaLeafComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ola-leaf',
            templateUrl: './ola-leaf.component.html',
            styleUrls: ['./ola-leaf.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [JwtHelperService,
            OlaLeafsService,
            MatDialog,
            AuthService,
            Router])
    ], OlaLeafComponent);
    return OlaLeafComponent;
}());
export { OlaLeafComponent };
//# sourceMappingURL=ola-leaf.component.js.map