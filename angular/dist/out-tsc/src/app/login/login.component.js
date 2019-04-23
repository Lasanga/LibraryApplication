import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_authService, router, activated) {
        this._authService = _authService;
        this.router = router;
        this.activated = activated;
        this.username = new FormControl('', [
            Validators.required
        ]);
        this.password = new FormControl('', [
            Validators.required
        ]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this._authService.isAuthenticated()) {
            this.router.navigate(['/book']);
        }
    };
    LoginComponent.prototype._login = function () {
        var _this = this;
        this.activated.queryParams.subscribe(function (params) {
            _this.returnUrl = params["returnUrl"];
        });
        this._authService.authenticate(this.username.value, this.password.value)
            .subscribe(function (res) {
            if (res) {
                _this.router.navigate(['/book']);
                location.reload();
            }
            else {
                _this.msg = "Error";
            }
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            Router,
            ActivatedRoute])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map