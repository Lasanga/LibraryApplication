import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserRegisterInputDto, AccountService } from '../shared-services/shared-services.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, _userService, _authService) {
        this.router = router;
        this._userService = _userService;
        this._authService = _authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (this._authService.isAuthenticated()) {
            this.router.navigate(['/book']);
        }
        this.userRegister = new UserRegisterInputDto();
    };
    RegisterComponent.prototype.register = function (userRegister) {
        var _this = this;
        this._userService.register(userRegister).subscribe(function (res) {
            _this.router.navigate(['/login']);
        });
    };
    RegisterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AccountService,
            AuthService])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map