import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
var HeaderComponent = /** @class */ (function () {
    // isLoggedIn$: Observable<boolean>;
    function HeaderComponent(router, jwtHelper) {
        this.router = router;
        this.jwtHelper = jwtHelper;
        this.title = 'Intellect';
        this.name = "Guest";
        this.viewRare = false;
        this.viewForeignerApprovals = false;
        this.isLoggedIn = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        var decodeToken = this.jwtHelper.decodeToken(token);
        if (!decodeToken) {
            return false;
        }
        if (decodeToken['role'][0] == "LocalUser") {
            this.viewRare = true;
        }
        if (decodeToken['role'] == 'Admin') {
            this.viewForeignerApprovals = true;
            this.viewRare = true;
        }
    };
    HeaderComponent.prototype._showName = function () {
        if (localStorage.getItem('token')) {
            this.isLoggedIn = true;
            this.name = localStorage.getItem('username');
        }
        else {
            this.name = "Guest";
        }
        return this.name;
    };
    HeaderComponent.prototype._logout = function () {
        this.isLoggedIn = false;
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this.router.navigate(['/home']);
        location.reload();
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            JwtHelperService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map