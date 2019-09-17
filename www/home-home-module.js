(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"topdiv\">\n    <!-- <div style=\"width: 100%; height: 5vh; background-color: #4e4e4e\"></div> -->\n    <img class=\"topimg\" src=\"../../assets/iconsandbackgrounds/curve background.png\">\n  </div>\n\n  <div class=\"toolbargrid\">\n    <div class=\"bits\">\n      <img height=\"45\" style=\"border-radius: 50%; margin-left: 20px; margin-top: 5px\"\n        src=\"../../assets/iconsandbackgrounds/ariana.jpg\">\n    </div>\n\n    <div class=\"bits\" style=\"text-align: center\">\n      <b style=\"font-size: 18px; color:white; margin-top: 15px; position: absolute; right: 42vw\">MENU</b>\n    </div>\n\n    <div (click)=\"logout()\" class=\"bits\">\n      <ion-icon name=\"power\" style=\"color: white; font-size: 26px; position: absolute; right: 20px; top: 10px\">\n      </ion-icon>\n    </div>\n  </div>\n\n  <div class=\"bottomdiv\">\n    <div class=\"rulelines\">\n      <div class=\"myvertical\"></div>\n      <div class=\"myhorizontal\"></div>\n    </div>\n\n    <div class=\"iconstoclick\">\n\n        <ion-grid style=\"margin-top: 40px\">\n          <ion-row style=\"width: 100%\">\n            <ion-col style=\"width: 40vw; height: 33vh;\" routerLink=\"/biblestudy\" routerDirection=\"forward\">\n                <!-- <p align=\"center\"><img height=\"120\" src=\"../../assets/iconsandbackgrounds/bible.png><br><br><b style=\"font-size: 15px; opacity: 0.7;\">BIBLE STUDY</b></p> -->\n                <p align=\"center\"><img height=\"90\" src=\"../../assets/iconsandbackgrounds/bible.png\"><br><br><b style=\"font-size: 15px; opacity: 0.6;\">BIBLE STUDY</b></p>\n\n            </ion-col>\n\n            <ion-col style=\"width: 40vw; height: 33vh;\">\n                <p align=\"center\"><img height=\"90\" src=\"../../assets/iconsandbackgrounds/join.png\"><br><br><b style=\"font-size: 15px; opacity: 0.6;\">JOIN</b></p>\n            </ion-col>\n            \n          </ion-row>\n\n\n          <ion-row style=\"width: 100%\">\n              <ion-col style=\"width: 40vw; height: 33vh;\">\n                  <p align=\"center\"><img height=\"90\" src=\"../../assets/iconsandbackgrounds/give.png\"><br><br><b style=\"font-size: 15px; opacity: 0.6;\">GIVE</b></p>\n              </ion-col>\n  \n              <ion-col style=\"width: 40vw; height: 33vh;\" routerLink=\"/request\" routerDirection=\"forward\" >\n                  <p align=\"center\"><img height=\"90\" src=\"../../assets/iconsandbackgrounds/prayer.png\"><br><br><b style=\"font-size: 15px; opacity: 0.6;\">PRAYER REQUEST</b></p>\n              </ion-col>\n              \n            </ion-row>\n        </ion-grid>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topdiv {\n  height: 25vh;\n  overflow: hidden; }\n\n.bottomdiv {\n  height: 75vh; }\n\n.myvertical {\n  height: 67vh;\n  top: 30vh;\n  left: 50vw;\n  background-color: black;\n  position: absolute;\n  width: 1px;\n  opacity: 0.15; }\n\n.myhorizontal {\n  width: 90vw;\n  background-color: black;\n  position: absolute;\n  top: 60vh;\n  left: 5vw;\n  height: 1px;\n  opacity: 0.15; }\n\n.topimg {\n  position: absolute; }\n\n.iconstoclick {\n  width: 100%;\n  height: 75vh; }\n\n.toolbargrid {\n  position: absolute;\n  z-index: 5;\n  top: 1.2vh;\n  width: 100%; }\n\n.bits {\n  float: left;\n  height: 60px;\n  width: 32%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvc3RvbGVuLWx1bmNoL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUdqQjtFQUNJLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBRWxCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0IsRUFBQTs7QUFPdEI7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BkaXYge1xuICAgIGhlaWdodDogMjV2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm90dG9tZGl2e1xuICAgIGhlaWdodDogNzV2aDtcbn1cblxuLm15dmVydGljYWx7XG4gICAgaGVpZ2h0OiA2N3ZoO1xuICAgIHRvcDogMzB2aDtcbiAgICBsZWZ0OiA1MHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4OyAgICBcbiAgICBvcGFjaXR5OiAwLjE1O1xufVxuXG4ubXlob3Jpem9udGFse1xuICAgIHdpZHRoOiA5MHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyBoZWlnaHQ6IDEwcHg7XG4gICAgdG9wOiA2MHZoO1xuICAgIGxlZnQ6IDV2dztcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBvcGFjaXR5OiAwLjE1O1xufVxuXG4udG9waW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gdG9wOiAzLjV2aDtcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwJSk7XG59XG5cbi8vIC5teWRpdnNcblxuLmljb25zdG9jbGlja3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDc1dmg7XG59XG5cbi50b29sYmFyZ3JpZHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogNTtcbiAgICB0b3A6IDEuMnZoO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYml0c3tcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDMyJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var HomePage = /** @class */ (function () {
    function HomePage(router, authService) {
        this.router = router;
        this.authService = authService;
        console.log(firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser);
    }
    HomePage.prototype.logout = function () {
        this.authService.logoutUser();
        this.router.navigateByUrl('/home');
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map