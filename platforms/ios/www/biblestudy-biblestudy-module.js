(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["biblestudy-biblestudy-module"],{

/***/ "./src/app/biblestudy/biblestudy.module.ts":
/*!*************************************************!*\
  !*** ./src/app/biblestudy/biblestudy.module.ts ***!
  \*************************************************/
/*! exports provided: BiblestudyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiblestudyPageModule", function() { return BiblestudyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _biblestudy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./biblestudy.page */ "./src/app/biblestudy/biblestudy.page.ts");







var routes = [
    {
        path: '',
        component: _biblestudy_page__WEBPACK_IMPORTED_MODULE_6__["BiblestudyPage"]
    }
];
var BiblestudyPageModule = /** @class */ (function () {
    function BiblestudyPageModule() {
    }
    BiblestudyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_biblestudy_page__WEBPACK_IMPORTED_MODULE_6__["BiblestudyPage"]]
        })
    ], BiblestudyPageModule);
    return BiblestudyPageModule;
}());



/***/ }),

/***/ "./src/app/biblestudy/biblestudy.page.html":
/*!*************************************************!*\
  !*** ./src/app/biblestudy/biblestudy.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n      <div class=\"topdiv\">\n          <img class=\"topimg\" src=\"../../assets/iconsandbackgrounds/curve background.png\">\n      </div>\n    \n      <div class=\"toolbargrid\">\n        <div class=\"bits\" routerLink=\"/home\" routerDirection=\"backward\">\n          <ion-icon height=\"45\" style=\"font-size: 25px; color: white; margin-top: 10px; margin-left: 15px\"\n          name=\"arrow-back\"></ion-icon>\n        </div>\n    \n        <div class=\"bits\" style=\"text-align: center\">\n          <b style=\"font-size: 18px; color:white; margin-top: 15px; position: absolute; right: 33vw\">BIBLE STUDY</b>\n        </div>\n    \n        <div class=\"bits\">\n        </div>\n      </div>\n\n      <ion-searchbar padding animated=\"true\" placeholder=\"Search...\"></ion-searchbar>\n\n      <ion-item style=\"margin-right: 10px\" lines=\"none\">\n        <p style=\"font-size: 18px; opacity: 0.8; font-family: Arial, Helvetica, sans-serif\">23 Items</p>\n        <ion-icon style=\"opacity: 0.7;\" name=\"md-funnel\" slot=\"end\"></ion-icon>\n        <p style=\"width: 50px; margin-left: 5px; font-size: 15px; opacity: 0.7;\" slot=\"end\">Sort by</p>\n      </ion-item>\n\n      <ion-card (click)=\"viewstudy()\" class=\"eachcard\" *ngFor=\"let study of studies\">\n        <div style=\"height: 140px; background-color: black\">\n            <ion-icon  style=\"font-size: 32px; float: right; padding: 10px\" color=\"light\" name=\"ios-more\"></ion-icon>\n\n            <div style=\"padding-left: 10px; padding-top: 100px\">\n                <div style=\"height: 25px; padding-top: 2.5px; background-color: rgb(255, 255, 255, 0.2); color: white; text-align: center; width: 60px; margin-left: 10px; border-radius: 20px; border:0.5px solid white\">\n                    Live\n                </div>\n            </div>\n\n\n            \n        </div>\n\n        <div style=\"height: 60px\">\n            <ion-item lines=\"none\">\n                <p style=\"font-size: 18px; opacity: 0.8; font-family: Arial, Helvetica, sans-serif\">Verse endings</p>\n                <ion-icon style=\"opacity: 0.8; font-size: 28px;\" name=\"ios-add-circle-outline\" slot=\"end\"></ion-icon>\n                <ion-chip slot=\"end\" style=\"background-color: white; margin-left: 8px; height: 26px; border-radius: 20px; border:0.5px solid rgb(0, 0, 0, 0.7)\">\n                    <ion-icon style=\"color: red\" name=\"heart\" ></ion-icon>\n                    <ion-label  style=\"opacity: 0.8\">57</ion-label>\n                  </ion-chip>\n              </ion-item>\n        </div>\n\n      </ion-card>\n\n      <br>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/biblestudy/biblestudy.page.scss":
/*!*************************************************!*\
  !*** ./src/app/biblestudy/biblestudy.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topdiv {\n  height: 23vh;\n  overflow: hidden; }\n\n.bottomdiv {\n  height: 77vh; }\n\n.topimg {\n  position: absolute; }\n\n.toolbargrid {\n  position: absolute;\n  z-index: 5;\n  top: 0.5vh;\n  width: 100%; }\n\n.bits {\n  float: left;\n  height: 60px;\n  width: 32%; }\n\n.eachcard {\n  height: 200px;\n  margin: 15px;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvU3RvbGVuTHVuY2hlcy9zcmMvYXBwL2JpYmxlc3R1ZHkvYmlibGVzdHVkeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdkO0VBQ0EsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2JpYmxlc3R1ZHkvYmlibGVzdHVkeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wZGl2IHtcbiAgICBoZWlnaHQ6IDIzdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJvdHRvbWRpdntcbiAgICBoZWlnaHQ6IDc3dmg7XG59XG5cbi50b3BpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnRvb2xiYXJncmlke1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIHRvcDogMC41dmg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5iaXRze1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogMzIlO1xufVxuXG4uZWFjaGNhcmR7XG5oZWlnaHQ6IDIwMHB4O1xubWFyZ2luOiAxNXB4O1xuYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/biblestudy/biblestudy.page.ts":
/*!***********************************************!*\
  !*** ./src/app/biblestudy/biblestudy.page.ts ***!
  \***********************************************/
/*! exports provided: BiblestudyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiblestudyPage", function() { return BiblestudyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BiblestudyPage = /** @class */ (function () {
    function BiblestudyPage(router) {
        this.router = router;
        this.studies = [{ title: 'Verse Endings' }, { title: 'Parashiyot' }, { title: 'Chapter 2' }];
    }
    BiblestudyPage.prototype.ngOnInit = function () {
    };
    BiblestudyPage.prototype.viewstudy = function () {
        this.router.navigateByUrl('/viewstudy');
    };
    BiblestudyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-biblestudy',
            template: __webpack_require__(/*! ./biblestudy.page.html */ "./src/app/biblestudy/biblestudy.page.html"),
            styles: [__webpack_require__(/*! ./biblestudy.page.scss */ "./src/app/biblestudy/biblestudy.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BiblestudyPage);
    return BiblestudyPage;
}());



/***/ })

}]);
//# sourceMappingURL=biblestudy-biblestudy-module.js.map