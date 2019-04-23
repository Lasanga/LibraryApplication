import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../shared-services/shared-services.component';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(jwtHelper, _Activatedroute, router, _bookService) {
        this.jwtHelper = jwtHelper;
        this._Activatedroute = _Activatedroute;
        this.router = router;
        this._bookService = _bookService;
        this.bookOutputDto = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bookService.getAll().subscribe(function (res) {
            _this.bookOutputDto = res;
        });
        this.id = this._Activatedroute.snapshot.params['id'];
        console.log(this.id);
        var token = localStorage.getItem('token');
        var decodeToken = this.jwtHelper.decodeToken(token);
        if (!decodeToken) {
            return false;
        }
        if (decodeToken['role'] == 'Admin') {
            this.admin = "Admin";
        }
        else {
            this.admin = "No";
        }
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [JwtHelperService,
            ActivatedRoute,
            Router,
            BooksService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map