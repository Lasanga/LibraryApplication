import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.url = 'http://localhost:5000/connect/token';
    }
    AuthService.isAuthenticated = function () {
        throw new Error("Method not implemented.");
    };
    AuthService.prototype.authenticate = function (username, password) {
        var headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': 'http://localhost:4200' });
        var body = new URLSearchParams();
        body.set('username', username);
        body.set('password', password);
        body.set('grant_type', "password");
        body.set('client_id', "js");
        body.set('client_secret', "secret");
        return this.http.post(this.url, body.toString(), {
            headers: headers
        }).pipe(map(function (jwt) {
            if (jwt && jwt.access_token) {
                localStorage.setItem('token', JSON.stringify(jwt));
                localStorage.setItem('username', username);
                return true;
            }
        }));
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.getToken = function () {
        return this.jwtHelper.tokenGetter();
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, JwtHelperService])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map