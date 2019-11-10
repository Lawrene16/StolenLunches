(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donate-donate-module"],{

/***/ "./src/app/donate/donate.module.ts":
/*!*****************************************!*\
  !*** ./src/app/donate/donate.module.ts ***!
  \*****************************************/
/*! exports provided: DonatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonatePageModule", function() { return DonatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _donate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donate.page */ "./src/app/donate/donate.page.ts");







var routes = [
    {
        path: '',
        component: _donate_page__WEBPACK_IMPORTED_MODULE_6__["DonatePage"]
    }
];
var DonatePageModule = /** @class */ (function () {
    function DonatePageModule() {
    }
    DonatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_donate_page__WEBPACK_IMPORTED_MODULE_6__["DonatePage"]]
        })
    ], DonatePageModule);
    return DonatePageModule;
}());



/***/ }),

/***/ "./src/app/donate/donate.page.html":
/*!*****************************************!*\
  !*** ./src/app/donate/donate.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"topdiv\">\n    <img class=\"topimg\" src=\"../../assets/iconsandbackgrounds/curve background.png\">\n  </div>\n\n  <div class=\"toolbargrid\">\n    <div class=\"bits\" routerLink=\"/home\" routerDirection=\"backward\">\n      <ion-icon height=\"45\" style=\"font-size: 25px; color: white; margin-top: 10px; margin-left: 15px\"\n        name=\"arrow-back\"></ion-icon>\n    </div>\n\n    <div class=\"bits\" style=\"text-align: center\">\n      <b style=\"font-size: 18px; color:white; margin-top: 15px; position: absolute; right: 45vw\">GIVE</b>\n    </div>\n\n    <div class=\"bits\">\n    </div>\n  </div>\n\n  <div style=\"width: 100vw;\">\n\n    <p style=\"margin: 0px;\" align=\"center\">\n      <img height=\"95px\" src=\"../../assets/iconsandbackgrounds/give.png\">\n    </p>\n\n    <br>\n    <p style=\"margin:0px; font-weight: 700; opacity: 0.8; font-size: 22px;\" align=\"center\">Make one time donation</p>\n    <p align=\"center\" style=\"margin: 25px; text-align: center; opacity: 0.8; font-size: 15px;\"\n      align=\"center; font-weight: 300\">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>\n\n    <br>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col style=\"padding-top: 28px; font-weight: 500; font-size: 17px; opacity: 0.7; padding-left: 10px;\"\n          size=\"4\">\n          I am giving\n        </ion-col>\n\n        <ion-col size=\"7\">\n          <ion-item>\n            <ion-input [(ngModel)]=\"amountchosen\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <br>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)=\"selectAmount(0)\" size=\"3\" style=\"padding: 10px;\">\n          <div [style.background-color]=\"oneSelected ? 'black' : (!oneSelected ? 'white' : null)\" \n          [style.color]=\"oneSelected ? 'white' : (!oneSelected ? 'black' : null)\" \n          class=\"eachamount\" style=\"border: 1px solid rgb(0, 0, 0, 0.7);\"\n          >$25</div>\n        </ion-col>\n\n        <ion-col (click)=\"selectAmount(1)\" size=\"3\" style=\"padding: 10px;\">\n          <div [style.background-color]=\"twoSelected ? 'black' : (!twoSelected ? 'white' : null)\" \n          [style.color]=\"twoSelected ? 'white' : (!twoSelected ? 'black' : null)\" \n          class=\"eachamount\" style=\"border: 1px solid rgb(0, 0, 0, 0.7);\">$50</div>\n        </ion-col>\n\n        <ion-col (click)=\"selectAmount(2)\" size=\"3\" style=\"padding: 10px;\">\n          <div [style.background-color]=\"threeSelected ? 'black' : (!threeSelected ? 'white' : null)\"\n          [style.color]=\"threeSelected ? 'white' : (!threeSelected ? 'black' : null)\" \n           class=\"eachamount\" style=\"border: 1px solid rgb(0, 0, 0, 0.7);\">$100</div>\n        </ion-col>\n\n        <ion-col (click)=\"selectAmount(3)\" size=\"3\" style=\"padding: 10px;\">\n          <div [style.background-color]=\"fourSelected ? 'black' : (!fourSelected ? 'white' : null)\"\n          [style.color]=\"fourSelected ? 'white' : (!fourSelected ? 'black' : null)\" \n           class=\"eachamount\" style=\"border: 1px solid rgb(0, 0, 0, 0.7);\">$150</div>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n  <ion-button margin expand=\"block\" (click)=\"makePayment()\">MAKE PAYMENT</ion-button>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/donate/donate.page.scss":
/*!*****************************************!*\
  !*** ./src/app/donate/donate.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topdiv {\n  height: 23vh;\n  overflow: hidden; }\n\n.bottomdiv {\n  height: 77vh; }\n\n.topimg {\n  position: absolute; }\n\n.toolbargrid {\n  position: absolute;\n  z-index: 5;\n  top: 0.5vh;\n  width: 100%; }\n\n.bits {\n  float: left;\n  height: 60px;\n  width: 32%; }\n\n.eachamount {\n  height: 40px;\n  text-align: center;\n  font-weight: 400;\n  vertical-align: middle;\n  line-height: 35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvU3RvbGVuTHVuY2hlcy9zcmMvYXBwL2RvbmF0ZS9kb25hdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RvbmF0ZS9kb25hdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcGRpdiB7XG4gICAgaGVpZ2h0OiAyM3ZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3R0b21kaXYge1xuICAgIGhlaWdodDogNzd2aDtcbn1cblxuLnRvcGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4udG9vbGJhcmdyaWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIHRvcDogMC41dmg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5iaXRzIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDMyJTtcbn1cblxuLmVhY2hhbW91bnQge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/donate/donate.page.ts":
/*!***************************************!*\
  !*** ./src/app/donate/donate.page.ts ***!
  \***************************************/
/*! exports provided: DonatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonatePage", function() { return DonatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var DonatePage = /** @class */ (function () {
    function DonatePage(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.oneSelected = false;
        this.twoSelected = false;
        this.threeSelected = false;
        this.fourSelected = false;
        this.amountchosen = "";
    }
    DonatePage.prototype.ngOnInit = function () { };
    DonatePage.prototype.selectAmount = function (index) {
        switch (index) {
            case 0:
                this.amountchosen = "$25";
                this.oneSelected = !this.oneSelected;
                this.twoSelected = false;
                this.threeSelected = false;
                this.fourSelected = false;
                break;
            case 1:
                this.amountchosen = "$50";
                this.twoSelected = !this.twoSelected;
                this.oneSelected = false;
                this.threeSelected = false;
                this.fourSelected = false;
                break;
            case 2:
                this.amountchosen = "$100";
                this.threeSelected = !this.threeSelected;
                this.twoSelected = false;
                this.oneSelected = false;
                this.fourSelected = false;
                break;
            case 3:
                this.amountchosen = "$150";
                this.fourSelected = !this.fourSelected;
                this.oneSelected = false;
                this.threeSelected = false;
                this.twoSelected = false;
                break;
        }
    };
    DonatePage.prototype.makePayment = function () {
        this.presentToast("Disabled by the developer on purpose");
    };
    DonatePage.prototype.presentToast = function (message) {
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
    DonatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-donate",
            template: __webpack_require__(/*! ./donate.page.html */ "./src/app/donate/donate.page.html"),
            styles: [__webpack_require__(/*! ./donate.page.scss */ "./src/app/donate/donate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], DonatePage);
    return DonatePage;
}());



/***/ })

}]);
//# sourceMappingURL=donate-donate-module.js.map