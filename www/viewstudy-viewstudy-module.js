(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewstudy-viewstudy-module"],{

/***/ "./src/app/viewstudy/viewstudy.module.ts":
/*!***********************************************!*\
  !*** ./src/app/viewstudy/viewstudy.module.ts ***!
  \***********************************************/
/*! exports provided: ViewstudyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewstudyPageModule", function() { return ViewstudyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewstudy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewstudy.page */ "./src/app/viewstudy/viewstudy.page.ts");







var routes = [
    {
        path: '',
        component: _viewstudy_page__WEBPACK_IMPORTED_MODULE_6__["ViewstudyPage"]
    }
];
var ViewstudyPageModule = /** @class */ (function () {
    function ViewstudyPageModule() {
    }
    ViewstudyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_viewstudy_page__WEBPACK_IMPORTED_MODULE_6__["ViewstudyPage"]]
        })
    ], ViewstudyPageModule);
    return ViewstudyPageModule;
}());



/***/ }),

/***/ "./src/app/viewstudy/viewstudy.page.html":
/*!***********************************************!*\
  !*** ./src/app/viewstudy/viewstudy.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n    <div class=\"topdiv\">\n        <img class=\"topimg\" src=\"../../assets/iconsandbackgrounds/curve background.png\">\n    </div>\n  \n    <div class=\"toolbargrid\">\n      <div class=\"bits\" routerLink=\"/biblestudy\" routerDirection=\"backward\">\n        <ion-icon height=\"45\" style=\"font-size: 25px; color: white; margin-top: 10px; margin-left: 15px\"\n        name=\"arrow-back\"></ion-icon>\n      </div>\n  \n      <div class=\"bits\" style=\"text-align: center\">\n        <b style=\"font-size: 18px; color:white; margin-top: 15px; position: absolute; right: 33vw\">VIEW STUDY</b>\n      </div>\n  \n      <div class=\"bits\">\n      </div>\n    </div>\n\n    <ion-card class=\"eachcard\">\n        <div style=\"height: 240px; background-color: black; \">\n            <ion-icon  style=\"font-size: 32px; float: right; padding-right: 20px; padding-top: 10px\" color=\"light\" name=\"ios-more\"></ion-icon>\n\n            <div style=\"padding-left: 10px; padding-top: 20px\">\n                <div slot=\"end\" style=\"height: 25px; padding-top: 2.5px; background-color: rgb(255, 255, 255, 0.2); color: white; text-align: center; width: 60px; margin-left: 10px; border-radius: 20px; border:0.5px solid white\">\n                    Live\n                </div>\n            </div>\n\n            <p (click)=\"playVideo()\" align=\"center\" style=\"margin-top: 30px\"><img style=\"height: 70px; width: 70px\" src=\"../../assets/iconsandbackgrounds/play.png\"></p>\n            \n\n            \n        </div>\n      </ion-card>\n\n      <div style=\"height: 60px; margin-left: 10px; margin-right: 10px\">\n          <ion-item style=\"margin-right: 12px;\" lines=\"none\">\n              <p style=\"font-size: 18px; opacity: 0.8; font-family: Arial, Helvetica, sans-serif\">Verse endings</p>\n              <ion-icon (click)=\"increase()\" style=\"opacity: 0.8; font-size: 28px;\" name=\"ios-add-circle-outline\" slot=\"end\"></ion-icon>\n              <ion-chip outline=\"true\" slot=\"end\" style=\"background-color: white; margin-left: 8px; height: 26px; \">\n                  <ion-icon style=\"color: red\" name=\"heart\" ></ion-icon>\n                  <ion-label style=\"opacity: 0.8\">{{noOfLikes}}</ion-label>\n                </ion-chip>\n            </ion-item>\n      </div>\n\n      <!-- [ngStyle]=\"{'color': textcolorthree}\" -->\n        <ion-item style=\"--ion-background-color: #e6e6e6;\" lines=\"none\">\n          <ion-avatar style=\"height: 90px; width: 90px; padding: 10px\" slot=\"start\">\n            <img src=\"../../assets/iconsandbackgrounds/ariana.jpg\">\n          </ion-avatar>\n          <ion-label><div style=\"font-size: 18px\">Amanda</div>\n          <div style=\"opacity: 0.8; font-size: 16px; margin-top: 5px\">Amazing work! keep it up!</div></ion-label>\n        </ion-item>\n\n        <ion-item style=\"--ion-background-color: #ffffff;\" lines=\"none\">\n            <ion-avatar style=\"height: 90px; width: 90px; padding: 10px\" slot=\"start\">\n              <img src=\"../../assets/iconsandbackgrounds/ariana.jpg\">\n            </ion-avatar>\n            <ion-label><div style=\"font-size: 18px\">Andrew</div>\n            <div style=\"opacity: 0.8; font-size: 16px; margin-top: 5px\">Hi would you mind</div></ion-label>\n          </ion-item>\n\n          <ion-item style=\"--ion-background-color: #e6e6e6;\" lines=\"none\">\n              <ion-avatar style=\"height: 90px; width: 90px; padding: 10px\" slot=\"start\">\n                <img src=\"../../assets/iconsandbackgrounds/ariana.jpg\">\n              </ion-avatar>\n              <ion-label><div style=\"font-size: 18px\">Lucy</div>\n              <div style=\"opacity: 0.8; font-size: 16px; margin-top: 5px\">Amazing work! keep it up!</div></ion-label>\n            </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/viewstudy/viewstudy.page.scss":
/*!***********************************************!*\
  !*** ./src/app/viewstudy/viewstudy.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topdiv {\n  height: 23vh;\n  overflow: hidden; }\n\n.bottomdiv {\n  height: 77vh; }\n\n.topimg {\n  position: absolute; }\n\n.toolbargrid {\n  position: absolute;\n  z-index: 5;\n  top: 0.5vh;\n  width: 100%; }\n\n.bits {\n  float: left;\n  height: 60px;\n  width: 32%; }\n\n.eachcard {\n  height: 240px;\n  margin: 15px;\n  border-radius: 10px; }\n\n.eachcomment {\n  --ion-background-color: rgb(233,233,233); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvc3RvbGVuLWx1bmNoL3NyYy9hcHAvdmlld3N0dWR5L3ZpZXdzdHVkeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdkO0VBQ0EsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFHbkI7RUFDSSx3Q0FBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzdHVkeS92aWV3c3R1ZHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcGRpdiB7XG4gICAgaGVpZ2h0OiAyM3ZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3R0b21kaXZ7XG4gICAgaGVpZ2h0OiA3N3ZoO1xufVxuXG4udG9waW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50b29sYmFyZ3JpZHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogNTtcbiAgICB0b3A6IDAuNXZoO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYml0c3tcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDMyJTtcbn1cblxuLmVhY2hjYXJke1xuaGVpZ2h0OiAyNDBweDtcbm1hcmdpbjogMTVweDtcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5lYWNoY29tbWVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLDIzMywyMzMpO1xuIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/viewstudy/viewstudy.page.ts":
/*!*********************************************!*\
  !*** ./src/app/viewstudy/viewstudy.page.ts ***!
  \*********************************************/
/*! exports provided: ViewstudyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewstudyPage", function() { return ViewstudyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ViewstudyPage = /** @class */ (function () {
    function ViewstudyPage(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.noOfLikes = 57;
        this.hasliked = false;
        this.comments = [{ name: 'Amanda', text: 'Amazing work! keep it up!', color: '#e9e9e9' },
            { name: 'Andrew', text: 'Hi would you mind', color: '#ffffff' },
            { name: 'Lucy', text: 'Amazing work! keep it up!', color: '#e9e9e9' },];
    }
    ViewstudyPage.prototype.ngOnInit = function () {
    };
    ViewstudyPage.prototype.playVideo = function () {
        this.presentToast("No video available yet");
    };
    ViewstudyPage.prototype.increase = function () {
        if (this.hasliked) {
            this.presentToast("You have already liked this video");
        }
        else {
            this.noOfLikes += 1;
            this.hasliked = true;
        }
    };
    ViewstudyPage.prototype.presentToast = function (message) {
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
    ViewstudyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewstudy',
            template: __webpack_require__(/*! ./viewstudy.page.html */ "./src/app/viewstudy/viewstudy.page.html"),
            styles: [__webpack_require__(/*! ./viewstudy.page.scss */ "./src/app/viewstudy/viewstudy.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ViewstudyPage);
    return ViewstudyPage;
}());



/***/ })

}]);
//# sourceMappingURL=viewstudy-viewstudy-module.js.map