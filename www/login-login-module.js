(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <div class=\"topcover\">\n    <div>\n      <ion-grid>\n        <ion-row>\n          <ion-col (click)=\"gotoregister()\" size=\"2\" style=\"text-align: center\">\n            <ion-icon style=\"font-size: 25px; color: white; margin-top: 15px\" name=\"arrow-back\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"8\">\n            <p align=center style=\"font-size: 18px; color:white\">LOGIN</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <p align=\"center\"><img src=\"../../assets/iconsandbackgrounds/iconn.png\" height=\"120\"><br><br><b style=\"text-align: center; color: white; font-size: 18px\">Please login to your <br>account</b></p>\n\n  </div>\n\n\n  <div padding>\n\n    <ion-item class=\"each_item\">\n      <img src=\"../../assets/iconsandbackgrounds/User.png\" style=\"margin-right: 15px; zoom: 70%;\">\n      <ion-input type=\"text\" [(ngModel)]=\"email\" placeholder=\"User Name\"></ion-input>\n    </ion-item>\n\n\n    <ion-item class=\"each_item\">\n      <img src=\"../../assets/iconsandbackgrounds/Password.png\" style=\"margin-right: 15px; zoom: 70%;\">\n      <ion-input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\"></ion-input>\n    </ion-item>\n\n    <p class=\"tna\" align=center>Terms and Agreement</p>\n\n    <ion-button expand=\"block\" (click)=\"login()\">LOGIN</ion-button>\n\n    <p routerLink=\"/register\" routerDirection=\"forward\"  class=\"tna\" style=\"margin-top: 20px\" align=center>Dont have an account?<b\n        style=\"font-size: 14px; margin-left: 5px\">Register Now</b></p>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topcover {\n  height: 55vh;\n  background-image: url('backg.png');\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.secondlayer {\n  position: absolute;\n  text-align: center;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n\n.tna {\n  font-size: 12px;\n  opacity: 0.6;\n  margin-bottom: 20px; }\n\n.each_item {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvU3RvbGVuTHVuY2hlcy9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQVk7RUFDWixrQ0FBbUU7RUFFbkUsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSWhCO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFLdkI7RUFDSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Bjb3ZlcntcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDU1dmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbnNhbmRiYWNrZ3JvdW5kcy9iYWNrZy5wbmcnKTtcbiAgICAgICAgXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uc2Vjb25kbGF5ZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbi50bmF7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmVhY2hfaXRlbXtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var LoginPage = /** @class */ (function () {
    function LoginPage(router, authService, toastCtrl, loadingController) {
        this.router = router;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.email = "";
        this.password = "";
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.email == "" || this.email.length < 3 ||
            !this.email.includes('@') || !this.email.includes('.')) {
            this.presentToast("Invalid username/email address");
        }
        else if (this.password == "" || this.password.length < 6) {
            this.presentToast("Password name field is either blank or too short");
        }
        else {
            this.loadingController.create({
                message: 'Logging In',
            }).then(function (res) {
                res.present();
                _this.authService.loginExistingUser(_this.email, _this.password).then(function () {
                    res.dismiss();
                    _this.router.navigateByUrl('/home');
                }).catch(function (err) {
                    _this.presentToast(err);
                    res.dismiss();
                });
            });
        }
    };
    LoginPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 2000,
                            color: 'dark'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map