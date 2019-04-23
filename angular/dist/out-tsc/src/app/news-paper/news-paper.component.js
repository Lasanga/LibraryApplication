import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NewsPapersService } from '../shared-services/shared-services.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatDialog } from '@angular/material';
import { NewsPaperEditComponent } from './news-paper-edit/news-paper-edit.component';
import { NewsPaperCreateComponent } from './news-paper-create/news-paper-create.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
var NewsPaperComponent = /** @class */ (function () {
    function NewsPaperComponent(jwtHelper, _newsService, dialog, _authservice, router) {
        this.jwtHelper = jwtHelper;
        this._newsService = _newsService;
        this.dialog = dialog;
        this._authservice = _authservice;
        this.router = router;
        this.newsOutputDto = [];
        this.canEdit = false;
        this.canDelete = false;
        this.isForeign = false;
    }
    NewsPaperComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authservice.isAuthenticated()) {
            this._newsService.getAll().subscribe(function (res) {
                _this.newsOutputDto = res;
            });
            var token = localStorage.getItem('token');
            var decodeToken = this.jwtHelper.decodeToken(token);
            if (!decodeToken) {
                return false;
            }
            if (decodeToken['permission'].includes("newspaper.edit"))
                this.canEdit = true;
            if (decodeToken['permission'].includes("newspaper.delete"))
                this.canDelete = true;
            if (decodeToken['role'] == 'ForeignUser')
                this.isForeign = true;
        }
        else {
            this.router.navigate(['/404NotFound']);
        }
    };
    NewsPaperComponent.prototype.option = function (element) {
        var _this = this;
        if (!isNaN(element)) {
            this._newsService.delete(element).subscribe(function (res) {
                _this.ngOnInit();
            });
        }
        else {
            this.openDialog(element);
        }
    };
    NewsPaperComponent.prototype.openDialog = function (newsPaper) {
        var dialogRef = this.dialog.open(NewsPaperEditComponent, {
            width: '800px',
            data: { data: newsPaper }
        });
    };
    NewsPaperComponent.prototype.openCreate = function () {
        var dialogRef = this.dialog.open(NewsPaperCreateComponent, {
            width: '800px'
        });
    };
    NewsPaperComponent = tslib_1.__decorate([
        Component({
            selector: 'app-news-paper',
            templateUrl: './news-paper.component.html',
            styleUrls: ['./news-paper.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [JwtHelperService,
            NewsPapersService,
            MatDialog,
            AuthService,
            Router])
    ], NewsPaperComponent);
    return NewsPaperComponent;
}());
export { NewsPaperComponent };
//# sourceMappingURL=news-paper.component.js.map