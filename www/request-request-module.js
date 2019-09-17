(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["request-request-module"],{

/***/ "./src/app/request/request.module.ts":
/*!*******************************************!*\
  !*** ./src/app/request/request.module.ts ***!
  \*******************************************/
/*! exports provided: RequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPageModule", function() { return RequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request.page */ "./src/app/request/request.page.ts");







var routes = [
    {
        path: '',
        component: _request_page__WEBPACK_IMPORTED_MODULE_6__["RequestPage"]
    }
];
var RequestPageModule = /** @class */ (function () {
    function RequestPageModule() {
    }
    RequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_request_page__WEBPACK_IMPORTED_MODULE_6__["RequestPage"]]
        })
    ], RequestPageModule);
    return RequestPageModule;
}());



/***/ }),

/***/ "./src/app/request/request.page.html":
/*!*******************************************!*\
  !*** ./src/app/request/request.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <div class=\"topcover\">\n    <div>\n      <ion-grid>\n        <ion-row>\n          <ion-col routerLink=\"/home\" routerDirection=\"backward\"  size=\"2\" style=\"text-align: center\">\n            <ion-icon style=\"font-size: 25px; color: white; margin-top: 15px\" name=\"arrow-back\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"8\">\n            <p align=center style=\"font-size: 18px; color:white\"><b>PRAYER REQUEST</b></p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <p align=\"center\"><img src=\"../../assets/iconsandbackgrounds/request2.png\" height=\"120\"><br><br><b style=\"text-align: center; color: white; font-size: 19px\">Submit a  <br>Prayer Request</b></p>\n\n  </div>\n\n\n  <div padding>\n\n    <ion-item style=\"margin-top: 20px\" lines=\"none\" class=\"each_item\">\n      <img src=\"../../assets/iconsandbackgrounds/comment.png\" style=\"margin-right: 15px; zoom: 36%;\">\n      <ion-label style=\"opacity: 0.7; margin-left: 8px;\">Comments</ion-label>\n    </ion-item>\n\n\n    <ion-item>\n      <textarea #myInput id=\"myInput\" rows=\"1\" maxLength=\"500\" (keyup)=\"resize()\" [(ngModel)]=\"prayer\"></textarea>\n    </ion-item>\n    \n    <br>\n    <ion-button expand=\"block\" (click)=\"sendRequest()\">SEND</ion-button>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/request/request.page.scss":
/*!*******************************************!*\
  !*** ./src/app/request/request.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topcover {\n  height: 55vh;\n  background-image: url('backg.png');\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.secondlayer {\n  position: absolute;\n  text-align: center;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n\n#myInput {\n  width: calc(100% - 10px);\n  border: 0;\n  border-radius: 0;\n  font-size: 16px;\n  background: transparent; }\n\n.each_item {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvc3RvbGVuLWx1bmNoL3NyYy9hcHAvcmVxdWVzdC9yZXF1ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixrQ0FBbUU7RUFFbkUsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSWhCO0VBQ0ksd0JBQXdCO0VBQ3hCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUVmLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVxdWVzdC9yZXF1ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Bjb3ZlcntcbiAgICBoZWlnaHQ6IDU1dmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbnNhbmRiYWNrZ3JvdW5kcy9iYWNrZy5wbmcnKTtcbiAgICAgICAgXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uc2Vjb25kbGF5ZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbiNteUlucHV0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZWFjaF9pdGVte1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/request/request.page.ts":
/*!*****************************************!*\
  !*** ./src/app/request/request.page.ts ***!
  \*****************************************/
/*! exports provided: RequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPage", function() { return RequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stolenlunch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stolenlunch.service */ "./src/app/stolenlunch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RequestPage = /** @class */ (function () {
    function RequestPage(toastCtrl, router, stolenLunchService, loadingCtrl) {
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.stolenLunchService = stolenLunchService;
        this.loadingCtrl = loadingCtrl;
        this.prayer = "";
    }
    RequestPage.prototype.ngOnInit = function () {
    };
    RequestPage.prototype.resize = function () {
        this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
    };
    RequestPage.prototype.sendRequest = function () {
        var _this = this;
        if (this.prayer == "") {
            this.presentToast("Please input a prayer request");
        }
        else if (this.prayer.length < 3) {
            this.presentToast("Prayer request length has to be more than 3 letters");
        }
        else {
            this.loadingCtrl.create({
                message: 'Receiving your prayer request'
            }).then(function (load) {
                load.present();
                _this.stolenLunchService.sendPrayerRequest(_this.prayer).then(function () {
                    load.dismiss();
                    _this.presentToast("Prayer request submitted successfully");
                    _this.prayer = "";
                }).catch(function (err) {
                    load.dismiss();
                    _this.presentToast(err);
                });
            });
        }
    };
    RequestPage.prototype.presentToast = function (message) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RequestPage.prototype, "myInput", void 0);
    RequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request',
            template: __webpack_require__(/*! ./request.page.html */ "./src/app/request/request.page.html"),
            styles: [__webpack_require__(/*! ./request.page.scss */ "./src/app/request/request.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _stolenlunch_service__WEBPACK_IMPORTED_MODULE_3__["StolenlunchService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], RequestPage);
    return RequestPage;
}());



/***/ }),

/***/ "./src/app/stolenlunch.service.ts":
/*!****************************************!*\
  !*** ./src/app/stolenlunch.service.ts ***!
  \****************************************/
/*! exports provided: StolenlunchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StolenlunchService", function() { return StolenlunchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var StolenlunchService = /** @class */ (function () {
    function StolenlunchService() {
        this.firedata = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]();
        this.fireauth = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]();
    }
    StolenlunchService.prototype.sendPrayerRequest = function (request) {
        var _this = this;
        var key = this.firedata.ref('/users').push().key;
        return new Promise(function (resolve, reject) {
            _this.firedata.ref('/requests').child(_this.fireauth.currentUser.uid)
                .child(key).set({
                prayer: request
            }).then(function () {
                resolve(key);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    StolenlunchService.prototype.joinStolenLunches = function () {
        var key = this.firedata.ref('/users').push().key;
        return new Promise(function (resolve, reject) {
            // this.firedata.ref('/newmembers').child()
        });
    };
    StolenlunchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StolenlunchService);
    return StolenlunchService;
}());



/***/ })

}]);
//# sourceMappingURL=request-request-module.js.map