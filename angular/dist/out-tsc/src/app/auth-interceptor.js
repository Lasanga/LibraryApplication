import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        if (this.authService.isAuthenticated()) {
            var accessToken = JSON.parse(this.authService.getToken()).access_token;
            var token = "Bearer " + accessToken;
            var authReq = req.clone({ headers: req.headers.set("Authorization", token) });
            return next.handle(authReq);
        }
        return next.handle(req);
    };
    AuthInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AuthService])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
export { AuthInterceptor };
//# sourceMappingURL=auth-interceptor.js.map