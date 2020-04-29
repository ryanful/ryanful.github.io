(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
    scroll(dir) {
        let about = document.querySelector("div.content");
        if (dir === 'd') {
            about.scrollIntoView({ behavior: 'smooth' });
        }
    }
    rightClick() {
        return false;
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["about"]], decls: 45, vars: 0, consts: [[1, "about", "page"], ["id", "about-pic"], [1, "down"], ["role", "button", "data-slide", "next", "aria-hidden", "true", 1, "material-icons", "expand-more", 3, "click"], [1, "content"], ["id", "about-fav"], ["src", "../assets/images/self/self1.jpg", "draggable", "false", 2, "border-radius", "5%", 3, "contextmenu"], ["id", "about-text"], ["href", "https://instagram.com/abeikuyanful", "target", "_blank"], [1, "fa", "fa-instagram"], ["href", "https://www.github.com/ryanful", "target", "_blank"], [1, "fa", "fa-github"], ["href", "https://www.linkedin.com/in/ryanful/", "target", "_blank"], [1, "fa", "fa-linkedin-square"], ["href", "../assets/RaheelsResume.pdf", "target", "_blank"], [1, "fa", "fa-file-text"], ["href", "../assets/RaheelYanful-Resume.pdf", "target", "_blank"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_3_listener() { return ctx.scroll("d"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " expand_more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function AboutComponent_Template_img_contextmenu_7_listener() { return ctx.rightClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Raheel Abeiku Yanful");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hi! My name is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Raheel Abeiku Yanful");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ". I am currently a junior at Cornell University pursing a Computer Science degee. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " I've been heavily involved with the art of photography for 4+ years now. Some of my best work comes unplanned and unexpected, after long periods of feeling uninspired. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " For any inquiries, email me or dm me on Instagram! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " IG: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "@abeikuyanful");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "rah.captures@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Resume ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media only screen and (max-width: 800px) {\n  #about-pic[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .content[_ngcontent-%COMP%]{\n    top: 0 !important;\n    padding-bottom: 5vh;\n  }\n\n  #about-text[_ngcontent-%COMP%] {\n    width: 80% !important;\n  }\n\n  #about-fav[_ngcontent-%COMP%] {\n    max-width: 80vw !important;\n  }\n}\n\n.page[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 90%;\n}\n\n#about-pic[_ngcontent-%COMP%] {\n  \n  \n  background-image: url('/../assets/images/self/self2.jpg'); \n\n  \n  height: 100%;\n  width: 100%;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n}\n\n.down[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  top: 90%;\n}\n\n.expand-more[_ngcontent-%COMP%]:hover{\n  opacity: 1;\n  cursor: pointer;\n}\n\n.expand-more[_ngcontent-%COMP%] {\n  font-size: 10vh;\n  opacity: .5;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: 11%;\n  height: 100%;\n  width: 100vw;\n}\n\n#about-text[_ngcontent-%COMP%] {\n  \n  \n  width: 80%;\n  max-width: 600px;\n  max-height: 60%;\n  \n  \n}\n\n#about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n#about-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#about-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  margin-bottom: .5vh;\n}\n\n#about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n  margin-top: .5vh;\n}\n\n#about-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e6c498;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n#about-fav[_ngcontent-%COMP%] {\n  \n  \n  max-height: 40%;\n  max-width: 80vw;\n  \n}\n\n#about-fav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  max-height: 100%;\n  max-width: 80vw;\n}\n\n.resume-link[_ngcontent-%COMP%]{\n  font-size: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0RBQWtEO0VBQ2xELHlEQUF5RDs7RUFFekQsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCOztBQUV4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsUUFBUTtBQUNWOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlOztFQUVmLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgI2Fib3V0LXBpYyB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbnRlbnR7XG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDV2aDtcbiAgfVxuXG4gICNhYm91dC10ZXh0IHtcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjYWJvdXQtZmF2IHtcbiAgICBtYXgtd2lkdGg6IDgwdncgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ucGFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA5MCU7XG59XG5cbiNhYm91dC1waWMge1xuICAvKiBUaGUgaW1hZ2UgdXNlZCovXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltYWdlcy9JTUdfMTg1Mi5qcGdcIik7ICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLy4uL2Fzc2V0cy9pbWFnZXMvc2VsZi9zZWxmMi5qcGcnKTsgXG5cbiAgLyogU2V0IGEgc3BlY2lmaWMgaGVpZ2h0ICovXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxufVxuXG4uZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDkwJTtcbn1cblxuLmV4cGFuZC1tb3JlOmhvdmVye1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5leHBhbmQtbW9yZSB7XG4gIGZvbnQtc2l6ZTogMTB2aDtcbiAgb3BhY2l0eTogLjU7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMSU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4jYWJvdXQtdGV4dCB7XG4gIC8qIFRoZSBpbWFnZSB1c2VkKi9cbiAgLyogU2V0IGEgc3BlY2lmaWMgaGVpZ2h0ICovXG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1heC1oZWlnaHQ6IDYwJTtcbiAgXG4gIC8qYm9yZGVyOiAxcHggc29saWQgYmxhY2s7Ki9cbn1cblxuI2Fib3V0LXRleHQgcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbiNhYm91dC10ZXh0IGgxLCBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Fib3V0LXRleHQgaDF7XG4gIG1hcmdpbi1ib3R0b206IC41dmg7XG59XG4jYWJvdXQtdGV4dCBoMntcbiAgbWFyZ2luLXRvcDogLjV2aDtcbn1cblxuI2Fib3V0LXRleHQgYSB7XG4gIGNvbG9yOiAjZTZjNDk4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jYWJvdXQtZmF2IHtcbiAgLyogVGhlIGltYWdlIHVzZWQqL1xuICAvKiBTZXQgYSBzcGVjaWZpYyBoZWlnaHQgKi9cbiAgbWF4LWhlaWdodDogNDAlO1xuICBtYXgtd2lkdGg6IDgwdnc7XG4gIC8qYm9yZGVyOiAxcHggc29saWQgYmxhY2s7Ki9cbn1cblxuI2Fib3V0LWZhdiBpbWd7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogODB2dztcbn1cblxuLnJlc3VtZS1saW5re1xuICBmb250LXNpemU6IDV2aDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery-page/gallery-page.component */ "./src/app/gallery-page/gallery-page.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/panel/panel.component.ts");











const routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"] },
    { path: 'work', component: _work_work_component__WEBPACK_IMPORTED_MODULE_3__["WorkComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: 'portfolio', component: _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_6__["GalleryPageComponent"] },
    { path: 'gallery/:id', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"] },
    { path: 'panel/:id', component: _panel_panel_component__WEBPACK_IMPORTED_MODULE_8__["PanelComponent"] },
    { path: 'resume', redirectTo: '../assets/RaheelYanful-Resume.pdf' },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                useHash: true, onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled'
            })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        useHash: true, onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'Raheel\'s Portfolio';
    }
    onActivate(event, yer) {
        console.log("ROUTE", yer.activatedRoute);
        document.body.scrollTop = 0;
        document.body.scrollLeft = 0;
        let x = document.querySelector("nav.nav");
        if (x !== null) {
            let menu = document.querySelector(".menu i");
            if (x.className === "nav responsive") {
                x.className = "nav";
                menu.id = "menu";
                menu.textContent = "menu";
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[3, "activate"], ["yer", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "router-outlet", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onActivate($event, _r39); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery-page/gallery-page.component */ "./src/app/gallery-page/gallery-page.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images.service */ "./src/app/images.service.ts");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/panel/panel.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_images_service__WEBPACK_IMPORTED_MODULE_11__["ImagesService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
        _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_9__["GalleryPageComponent"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["GalleryComponent"],
        _panel_panel_component__WEBPACK_IMPORTED_MODULE_12__["PanelComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                    _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
                    _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                    _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_9__["GalleryPageComponent"],
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["GalleryComponent"],
                    _panel_panel_component__WEBPACK_IMPORTED_MODULE_12__["PanelComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [_images_service__WEBPACK_IMPORTED_MODULE_11__["ImagesService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/gallery-page/gallery-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/gallery-page/gallery-page.component.ts ***!
  \********************************************************/
/*! exports provided: GalleryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageComponent", function() { return GalleryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");



class GalleryPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
GalleryPageComponent.ɵfac = function GalleryPageComponent_Factory(t) { return new (t || GalleryPageComponent)(); };
GalleryPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryPageComponent, selectors: [["gallery-page"]], decls: 1, vars: 0, consts: [["name", "portfolio"]], template: function GalleryPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gallery", 0);
    } }, directives: [_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnktcGFnZS9nYWxsZXJ5LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gallery-page',
                templateUrl: './gallery-page.component.html',
                styleUrls: ['./gallery-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images.service */ "./src/app/images.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["regularGallery"];
function GalleryComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function GalleryComponent_div_1_div_2_Template_img_contextmenu_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.rightClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/../assets/images/projects/", ctx_r7.details.name, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GalleryComponent_div_1_ng_template_3_video_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your browser does not support HTML5 video. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GalleryComponent_div_1_ng_template_3_iframe_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 27);
} }
function GalleryComponent_div_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryComponent_div_1_ng_template_3_video_1_Template, 3, 0, "video", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryComponent_div_1_ng_template_3_iframe_2_Template, 1, 0, "iframe", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.id === "proj-risk");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.id === "proj-albums");
} }
function GalleryComponent_div_1_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+ ", model_r16, " +");
} }
function GalleryComponent_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function GalleryComponent_div_1_div_27_Template_img_contextmenu_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.rightClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pic_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r11.setBackground(i_r18));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r11.path + pic_r17.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GalleryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryComponent_div_1_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GalleryComponent_div_1_ng_template_3_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Models:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GalleryComponent_div_1_p_11_Template, 2, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Story:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_1_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.scroll("d"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Click on me to see the full series!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_1_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.scroll("d"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function GalleryComponent_div_1_Template_div_scroll_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.checkArrows(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, GalleryComponent_div_1_div_27_Template, 2, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_1_Template_i_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.scroll("l"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " chevron_left ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_1_Template_i_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.scroll("r"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " chevron_right ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.id !== "proj-risk" && ctx_r4.id !== "proj-albums")("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.details.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.details.models);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.details.desc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx_r4.elementVisible(ctx_r4.showLeft));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx_r4.elementVisible(ctx_r4.showRight));
} }
function GalleryComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function GalleryComponent_ng_template_2_div_0_Template_img_contextmenu_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.rightClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pic_r28 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r27.path + pic_r28.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GalleryComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleryComponent_ng_template_2_div_0_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_ng_template_2_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.scroll("u"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " expand_less ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_ng_template_2_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.scroll("rd"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx_r6.elementVisible(ctx_r6.showUp));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx_r6.elementVisible(ctx_r6.showDown));
} }
class GalleryComponent {
    constructor(imagesService, route) {
        this.imagesService = imagesService;
        this.route = route;
        //images controls
        this.showLeft = false;
        this.showRight = true;
        this.showUp = false;
        this.showDown = true;
    }
    ngOnInit() {
        this.setUpPageWithImages();
    }
    ngOnDestroy() {
        this.imageSub.unsubscribe();
    }
    setUpPageWithImages() {
        this.imageSub = this.route.paramMap
            .subscribe(params => {
            if (this.id !== 'portfolio') {
                this.id = params.get("id");
            }
            let photos = this.imagesService.getPhotos(this.id);
            this.details = this.imagesService.getProjectDetails(this.id);
            this.path = photos.path;
            this.images = photos.images;
            this.isProj = this.id.substr(0, 4) === 'proj';
            if (this.isProj) {
                let page = document.querySelector(".gallery.page");
                if (page !== null) {
                    page.scrollTo(0, 0);
                }
                let gallery = document.querySelector("#proj-gallery");
                if (gallery !== null) {
                    gallery.scrollTo(0, 0);
                }
            }
        });
    }
    setBackground(index) {
        // console.log("we tried");
        // document.querySelector("div.image").setAttribute("background-color", "#e8d8c3");
        let colors = ["rgb(24, 6, 6)", "rgb(40, 16, 16)", "none"];
        let ind = index * 2 % 3;
        return colors[ind];
    }
    scroll(dir) {
        if (this.isProj) {
            let gallery = document.querySelector("div#proj-gallery");
            let bodyWidth = document.documentElement.clientWidth;
            let moveAmt = bodyWidth > 600 ? .5 * bodyWidth : bodyWidth;
            if (dir === 'd') {
                gallery.scrollIntoView({ behavior: 'smooth' });
            }
            else if (dir === 'l') {
                //accounts for resizing off window with mod offset
                gallery.scrollLeft -= gallery.scrollLeft % moveAmt + moveAmt;
            }
            else if (dir === 'r') {
                gallery.scrollLeft += moveAmt - gallery.scrollLeft % moveAmt;
            }
        }
        else {
            let regGall = document.querySelector("div.page");
            let offset = regGall.scrollTop % regGall.clientHeight;
            if (dir === 'rd') {
                regGall.scrollTop += regGall.clientHeight - offset;
            }
            else if (dir = "u") {
                regGall.scrollTop -= regGall.clientHeight + offset;
            }
        }
    }
    checkArrows() {
        if (this.isProj) {
            let gallery = document.querySelector("div#proj-gallery");
            let projGalleryEnd = gallery.scrollWidth - gallery.clientWidth;
            this.showLeft = !(gallery.scrollLeft === 0);
            this.showRight = !(gallery.scrollLeft >= projGalleryEnd);
        }
        else {
            let regGall = document.querySelector("div.page");
            let galleryEnd = regGall.scrollHeight - regGall.clientHeight;
            this.showUp = regGall.scrollTop !== 0;
            this.showDown = !(regGall.scrollTop >= galleryEnd);
        }
    }
    elementVisible(isVis) {
        return isVis ? 'visible' : 'hidden';
    }
    rightClick() {
        return false;
    }
    isLandscape(height, width) {
        return height / width >= 4 / 3;
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["gallery"]], viewQuery: function GalleryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.regGall = _t.first);
    } }, inputs: { id: ["name", "id"] }, decls: 4, vars: 2, consts: [[1, "gallery", "page", 3, "scroll"], ["style", "height:100%;", 4, "ngIf", "ngIfElse"], ["regularGallery", ""], [2, "height", "100%"], [1, "details"], ["id", "detail-image", 4, "ngIf", "ngIfElse"], ["detailVid", ""], ["id", "detail-text"], ["id", "text"], [4, "ngFor", "ngForOf"], [1, "link"], [3, "click"], [1, "down"], ["role", "button", "data-slide", "next", "aria-hidden", "true", 1, "material-icons", "expand-more", 3, "click"], ["id", "proj-gallery", 1, "page", 3, "scroll"], ["class", "image", 3, "background-color", 4, "ngFor", "ngForOf"], [1, "controls"], ["role", "button", "data-slide", "next", "aria-hidden", "true", 1, "material-icons", "left-chevron", 3, "click"], [1, "filler"], ["role", "button", "data-slide", "next", "aria-hidden", "true", 1, "material-icons", "right-chevron", 3, "click"], ["id", "detail-image"], ["draggable", "false", 3, "src", "contextmenu"], ["id", "detailVid"], ["width", "100%", "controls", "", 4, "ngIf"], ["width", "100%", "src", "https://www.youtube.com/embed/7RtT98Rmbaw", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 4, "ngIf"], ["width", "100%", "controls", ""], ["src", "/../assets/images/projects/RiskFtReem.mp4", "type", "video/mp4"], ["width", "100%", "src", "https://www.youtube.com/embed/7RtT98Rmbaw", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], [1, "image"], ["class", "image", 4, "ngFor", "ngForOf"], [1, "reg-controls"], ["role", "button", "data-slide", "next", "aria-hidden", "true", 1, "material-icons", "expand-less", 3, "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function GalleryComponent_Template_div_scroll_0_listener() { return ctx.checkArrows(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryComponent_div_1_Template, 34, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryComponent_ng_template_2_Template, 6, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isProj)("ngIfElse", _r5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@media only screen and (max-width: 600px) {\n  .image[_ngcontent-%COMP%]{\n    width: 100% !important;\n    \n  }\n\n  .details[_ngcontent-%COMP%]{\n    flex-direction: column !important;\n  }\n\n  #detail-image[_ngcontent-%COMP%]{\n    display: none !important;\n  } \n\n  #detailVid[_ngcontent-%COMP%]{\n    width: 100% !important;\n    height: 40% !important;\n  }\n\n  #detail-text[_ngcontent-%COMP%] {\n    top: 0% !important;\n    height: 48% !important;\n    width: 100% !important;\n  }\n}\n\n.page[_ngcontent-%COMP%]{\n  position: absolute;\n  scroll-behavior: smooth;\n  height: 90%;\n  overflow-y: scroll;\n}\n\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin:auto;\n  max-height: 75%;\n  max-width: 95%;\n  box-shadow: 0 2vh 2vh 0 rgba(0, 0, 0, 0.481); \n}\n\n.image[_ngcontent-%COMP%] {\n  display: inline-grid;\n  vertical-align: middle;\n  width: 50%;\n  height: 100%;\n  \n  \n  \n  \n}\n\n#proj-gallery[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  width:100%;\n  height: 100%;\n  scroll-behavior: smooth;\n}\n\n#proj-gallery[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{\n  width: auto;\n}\n\n#proj-gallery[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  max-height: 99%;\n  max-width: 99%;\n}\n\n.details[_ngcontent-%COMP%]{\n  height: 100%;\n  width: 100vw;\n  display: inline-flex;\n  overflow-x: scroll;\n}\n\n#detail-image[_ngcontent-%COMP%] {\n  \n  \n\n  \n  max-width:50%;\n  height: 100%;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  \n  \n\n}\n\n#detailVid[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  display: flex;\n}\n\n#detail-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height:100%;\n  width: auto;\n  flex-grow: 1;\n  \n}\n\n#detail-text[_ngcontent-%COMP%]{\n  position:relative; \n  top:10%; \n  width: 50%; \n  height:90%; \n  flex-grow: 1; \n  background-color:rgba(12, 4, 4, .8);\n}\n\n#text[_ngcontent-%COMP%] {\n  margin: auto;\n  height: 83%;\n  width: 90%;\n  \n}\n\np[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.link[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.down[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 12.3%;\n}\n\n.reg-controls[_ngcontent-%COMP%]{\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin:auto;\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  bottom: 90%;\n  \n  height: 100%;\n  width: 0%;\n}\n\n.expand-more[_ngcontent-%COMP%]:hover, .expand-less[_ngcontent-%COMP%]:hover, .right-chevron[_ngcontent-%COMP%]:hover, .left-chevron[_ngcontent-%COMP%]:hover{\n  opacity: 1;\n  cursor: pointer;\n}\n\n.expand-more[_ngcontent-%COMP%], .expand-less[_ngcontent-%COMP%] {\n  font-size: 10vh;\n  opacity: .5;\n}\n\n.right-chevron[_ngcontent-%COMP%], .left-chevron[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  font-size: 10vw;\n  opacity: .5;\n}\n\n.right-chevron[_ngcontent-%COMP%]{\n  left: 90vw;\n}\n\n.filler[_ngcontent-%COMP%] {\n  width: 80vw;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QjtzQ0FDa0M7RUFDcEM7O0VBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixzQkFBc0I7RUFDeEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzRUFBc0U7O0VBRXRFLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCOzJCQUN5Qjs7QUFFM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixPQUFPO0VBQ1AsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osbUNBQW1DO0FBQ3JDOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaW1hZ2V7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAvKiBoZWlnaHQ6IDgwdmggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTB2aCAhaW1wb3J0YW50OyAqL1xuICB9XG5cbiAgLmRldGFpbHN7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2RldGFpbC1pbWFnZXtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH0gXG5cbiAgI2RldGFpbFZpZHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjZGV0YWlsLXRleHQge1xuICAgIHRvcDogMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDQ4JSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnBhZ2V7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIGhlaWdodDogOTAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uaW1hZ2UgaW1nIHtcbiAgbWFyZ2luOmF1dG87XG4gIG1heC1oZWlnaHQ6IDc1JTtcbiAgbWF4LXdpZHRoOiA5NSU7XG4gIGJveC1zaGFkb3c6IDAgMnZoIDJ2aCAwIHJnYmEoMCwgMCwgMCwgMC40ODEpOyBcbn1cblxuLmltYWdlIHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAvKiBwYWRkaW5nOiAzcHg7ICovXG4gIC8qIG1hcmdpbjogYXV0bzsgKi9cbiAgLyogYm9yZGVyOiAzcHggc29saWQgIzhkNWUyMTsgKi9cbn1cblxuI3Byb2otZ2FsbGVyeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbiNwcm9qLWdhbGxlcnkgLmltYWdle1xuICB3aWR0aDogYXV0bztcbn1cblxuI3Byb2otZ2FsbGVyeSAuaW1hZ2UgaW1ne1xuICBtYXgtaGVpZ2h0OiA5OSU7XG4gIG1heC13aWR0aDogOTklO1xufVxuXG4uZGV0YWlsc3tcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG59XG4jZGV0YWlsLWltYWdlIHtcbiAgLyogVGhlIGltYWdlIHVzZWQqL1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy8uLi9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL3Jpc2s4MzIuanBnJyk7ICAqL1xuXG4gIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xuICBtYXgtd2lkdGg6NTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAvKiB3aWR0aDogMzAlOyAqL1xuICAvKiBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xuXG59XG5cbiNkZXRhaWxWaWQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNkZXRhaWwtaW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OjEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBmbGV4LWdyb3c6IDE7XG4gIC8qIHdpZHRoOiAzMCU7ICovXG59XG4jZGV0YWlsLXRleHR7XG4gIHBvc2l0aW9uOnJlbGF0aXZlOyBcbiAgdG9wOjEwJTsgXG4gIHdpZHRoOiA1MCU7IFxuICBoZWlnaHQ6OTAlOyBcbiAgZmxleC1ncm93OiAxOyBcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEyLCA0LCA0LCAuOCk7XG59XG4jdGV4dCB7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiA4MyU7XG4gIHdpZHRoOiA5MCU7XG4gIC8qYm9yZGVyOiAxcHggc29saWQgYmxhY2s7Ki9cbn1cblxucCxoMiB7XG4gIG1hcmdpbjogMDtcbn1cbmgyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmxpbms6aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTIuMyU7XG59XG5cbi5yZWctY29udHJvbHN7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOmF1dG87XG59XG5cblxuLmNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDkwJTtcbiAgLyogbWFyZ2luLXRvcDogLTkwdmg7ICovXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDAlO1xufVxuLmV4cGFuZC1tb3JlOmhvdmVyLCAuZXhwYW5kLWxlc3M6aG92ZXIsIC5yaWdodC1jaGV2cm9uOmhvdmVyLCAubGVmdC1jaGV2cm9uOmhvdmVye1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5leHBhbmQtbW9yZSwgLmV4cGFuZC1sZXNzIHtcbiAgZm9udC1zaXplOiAxMHZoO1xuICBvcGFjaXR5OiAuNTtcbn1cblxuLnJpZ2h0LWNoZXZyb24sIC5sZWZ0LWNoZXZyb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHZ3O1xuICBvcGFjaXR5OiAuNTtcbn1cblxuLnJpZ2h0LWNoZXZyb257XG4gIGxlZnQ6IDkwdnc7XG59XG5cbi5maWxsZXIge1xuICB3aWR0aDogODB2dztcbiAgei1pbmRleDogLTE7XG59XG5cblxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.css']
            }]
    }], function () { return [{ type: _images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['name']
        }], regGall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['regularGallery', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/images.service.ts":
/*!***********************************!*\
  !*** ./src/app/images.service.ts ***!
  \***********************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _photo_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-info */ "./src/app/photo-info.ts");



class ImagesService {
    constructor() { }
    getPhotos(id) {
        //potential take in text file with info (folder path/pics) and parse 
        console.log(id);
        let pgroup = _photo_info__WEBPACK_IMPORTED_MODULE_1__["PHOTOGROUPS"].find(group => group.id === id);
        return pgroup;
    }
    getWorkPanels() {
        return _photo_info__WEBPACK_IMPORTED_MODULE_1__["WORKPANELS"];
    }
    getProjectPanels() {
        return _photo_info__WEBPACK_IMPORTED_MODULE_1__["PROJECTPANELS"];
    }
    getProjectDetails(id) {
        let found = _photo_info__WEBPACK_IMPORTED_MODULE_1__["PROJECTPANELS"][0].members.find(member => member.id === id);
        return found === undefined ? null : found.cover;
    }
}
ImagesService.ɵfac = function ImagesService_Factory(t) { return new (t || ImagesService)(); };
ImagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImagesService, factory: ImagesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
    rightClick() {
        return false;
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["landing"]], decls: 15, vars: 0, consts: [[1, "intro"], [1, "intro-nav"], ["routerLink", "work", 1, "work"], ["routerLink", "portfolio", 1, "port"], ["routerLink", "projects", 1, "proj"], ["routerLink", "about", 1, "intro-img"], ["src", "../assets/logo/favicon.png", 3, "contextmenu"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "WORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "GALLERY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function LandingComponent_Template_img_contextmenu_12_listener() { return ctx.rightClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "BOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["@media only screen and (max-width: 800px) and (orientation: portrait) {\n  .intro[_ngcontent-%COMP%] {\n    \n  }\n\n  .intro-nav[_ngcontent-%COMP%]{\n    flex-direction: column !important;\n    height: 75% !important;\n  }\n\n  .intro-img[_ngcontent-%COMP%]{\n    height: 25% !important;\n    opacity: 1 !important;\n    justify-content: initial !important;\n  }\n\n  .work[_ngcontent-%COMP%], .proj[_ngcontent-%COMP%], .port[_ngcontent-%COMP%] {\n    height: 33.333% !important;\n    width: 100% !important;\n    justify-content: initial !important;\n    left: 0% !important;\n    opacity: 1 !important;\n    background-image: none;\n  }\n\n  .work[_ngcontent-%COMP%]{\n    background-image: url(\"/../assets/images/work/other/iao-bday/iao3.jpg\") !important;\n  }\n\n  .port[_ngcontent-%COMP%]{\n    background-image: url(\"/../assets/images/projects/risk.png\") !important;\n  }\n\n  .proj[_ngcontent-%COMP%]{\n    background-image: url(\"/../assets/images/projects/4wall1.jpg\") !important;\n  }\n \n  span[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\n    position: relative;\n    left: 10%;\n  }\n\n}\n\n.intro[_ngcontent-%COMP%]{\n  \n  width: 100%;\n  height: 100%;\n  font-size: 5vh;\n  line-height: 5.5vh;\n  font-weight: 300;\n  \n  \n  \n  \n  \n  background-size: cover;\n}\n\n.intro-nav[_ngcontent-%COMP%] {\n  display: flex;\n  \n  margin: auto;\n  width: 100%;\n  height: 70%;\n  \n}\n\n.intro-img[_ngcontent-%COMP%]{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 30%;\n  opacity: .8;\n}\n\n.intro-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20%;\n  \n}\n\n.work[_ngcontent-%COMP%]:hover, .proj[_ngcontent-%COMP%]:hover, .port[_ngcontent-%COMP%]:hover, .intro-img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  opacity: 1;\n  font-weight: bold; \n  box-shadow: 0 1vh 1vh 0 rgba(0,0,0,.2);  \n}\n\n.work[_ngcontent-%COMP%], .proj[_ngcontent-%COMP%], .port[_ngcontent-%COMP%] {\n  position: relative;\n  width: 32%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-size: cover;\n  background-position: center;\n  opacity: .8;\n}\n\n.work[_ngcontent-%COMP%] {\n  background-image: url(\"/../assets/images/work/events/afrik.jpg\");\n  left: 1%;\n}\n\n.port[_ngcontent-%COMP%] {\n  background-image: url(\"/../assets/images/gallery/MG_1.jpg\");\n  left: 2%;\n}\n\n.proj[_ngcontent-%COMP%] {\n  background-image: url(\"/../assets/images/projects/proj-breakwall4/4walldm6.jpg\");\n  left: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLCtFQUErRTtFQUNqRjs7RUFFQTtJQUNFLGlDQUFpQztJQUNqQyxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0ZBQWtGO0VBQ3BGOztFQUVBO0lBQ0UsdUVBQXVFO0VBQ3pFOztFQUVBO0lBQ0UseUVBQXlFO0VBQzNFOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWDs7QUFFRjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiwyREFBMkQ7RUFDM0QsaURBQWlEO0VBQ2pELGtEQUFrRDtFQUNsRCxvRkFBb0Y7RUFDcEYsc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnRUFBZ0U7RUFDaEUsUUFBUTtBQUNWOztBQUVBO0VBQ0UsMkRBQTJEO0VBQzNELFFBQVE7QUFDVjs7QUFFQTtFQUNFLGdGQUFnRjtFQUNoRixRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5pbnRybyB7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyeS9NR19kZWoxLmpwZ1wiKSAhaW1wb3J0YW50OyAqL1xuICB9XG5cbiAgLmludHJvLW5hdntcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA3NSUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbnRyby1pbWd7XG4gICAgaGVpZ2h0OiAyNSUgIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIH1cblxuICAud29yaywgLnByb2osIC5wb3J0IHtcbiAgICBoZWlnaHQ6IDMzLjMzMyUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDAlICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIH1cblxuICAud29ya3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vYXNzZXRzL2ltYWdlcy93b3JrL290aGVyL2lhby1iZGF5L2lhbzMuanBnXCIpICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucG9ydHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9yaXNrLnBuZ1wiKSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByb2p7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLy4uL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvNHdhbGwxLmpwZ1wiKSAhaW1wb3J0YW50O1xuICB9XG4gXG4gIHNwYW4sIGltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDEwJTtcbiAgfVxuXG59XG5cbi5pbnRyb3tcbiAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiA1dmg7XG4gIGxpbmUtaGVpZ2h0OiA1LjV2aDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLyogY29sb3I6ICAjZmZmYzk5OyAqL1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWFnZXMvbW92ZW1lbnQvX01HXzA3ODIuanBnXCIpOyAqL1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWFnZXMvT09ONDQ5OC5qcGdcIik7ICovXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltYWdlcy9fT09ONDUxNy5qcGdcIik7ICovXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8uLi9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL3Byb2otYnJlYWt3YWxsNC80d2FsbDIuanBnXCIpOyAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5cbi5pbnRyby1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MCU7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDsgKi9cbn1cblxuLmludHJvLWltZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMzAlO1xuICBvcGFjaXR5OiAuODtcbn1cbi5pbnRyby1pbWcgaW1nIHtcbiAgaGVpZ2h0OiAyMCU7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cbn1cblxuLndvcms6aG92ZXIsIC5wcm9qOmhvdmVyLCAucG9ydDpob3ZlciwgLmludHJvLWltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICBib3gtc2hhZG93OiAwIDF2aCAxdmggMCByZ2JhKDAsMCwwLC4yKTsgIFxufVxuXG4ud29yaywgLnByb2osIC5wb3J0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBvcGFjaXR5OiAuODtcbn1cblxuLndvcmsge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vYXNzZXRzL2ltYWdlcy93b3JrL2V2ZW50cy9hZnJpay5qcGdcIik7XG4gIGxlZnQ6IDElO1xufVxuXG4ucG9ydCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcnkvTUdfMS5qcGdcIik7XG4gIGxlZnQ6IDIlO1xufVxuXG4ucHJvaiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8uLi9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL3Byb2otYnJlYWt3YWxsNC80d2FsbGRtNi5qcGdcIik7XG4gIGxlZnQ6IDMlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function () { return ["/panel", "work-grad"]; };
const _c1 = function () { return { exact: true }; };
const _c2 = function () { return ["/panel", "work-events"]; };
const _c3 = function () { return ["/panel", "work-hs"]; };
const _c4 = function () { return ["/gallery", "proj-breakwall4"]; };
const _c5 = function () { return ["/gallery", "proj-risk"]; };
const _c6 = function () { return ["/gallery", "proj-uncanny"]; };
const _c7 = function () { return ["/gallery", "proj-albums"]; };
const _c8 = function () { return ["/gallery", "proj-chi"]; };
function NavComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function NavComponent_div_0_Template_img_contextmenu_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.rightClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_0_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.toggleNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " menu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "GALLERY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "WORK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Graduations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Headshots");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "See All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " PROJECTS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Breaking the 4th Wall");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 15, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Risk");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 15, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Uncanny Vibrations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 15, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "One Love");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 15, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Chioma");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 18, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "See All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "ABOUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c8));
} }
class NavComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                let nav = document.querySelector("nav.nav");
                let menu = document.querySelector(".menu i");
                this.regNav(nav, menu);
                document.documentElement.scrollTo(0, 0);
            }
        });
    }
    onLanding() {
        console.log(this.router.url);
        return this.router.url === '/';
    }
    regNav(nav, menu) {
        if (nav !== null) {
            nav.className = "nav";
        }
        if (menu !== null) {
            menu.id = "menu";
            menu.textContent = "menu";
        }
    }
    toggleNav() {
        let x = document.querySelector("nav.nav");
        let menu = document.querySelector(".menu i");
        if (x.className === "nav") {
            x.className += " responsive";
            menu.id = "close";
            menu.textContent = "close";
        }
        else {
            //regNav(x, menu);
            x.className = "nav";
            menu.id = "menu";
            menu.textContent = "menu";
        }
    }
    rightClick() {
        return false;
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "nav", "navtop"], [1, "icons"], [1, "logo"], ["src", "../assets/logo/trans-notext.png", "routerLink", "", "draggable", "false", 3, "contextmenu"], [1, "menu"], ["id", "menu", 1, "material-icons", 3, "click"], [1, "nav-tabs"], ["routerLink", "portfolio", "routerLinkActive", "active", 1, "tab"], [1, "dropdown"], ["routerLink", "work", "routerLinkActive", "active", 1, "tab"], [1, "dropdown-content"], ["routerLinkActive", "active", 1, "tab", 3, "routerLink", "routerLinkActiveOptions"], ["droptabs", ""], ["routerLinkActive", "active", 1, "tab", 3, "routerLink"], ["routerLink", "/work", "routerLinkActive", "active", 1, "tab"], ["routerLink", "projects", "routerLinkActive", "active", 1, "tab"], ["routerLink", "/projects", "routerLinkActive", "active", 1, "tab"], ["routerLink", "about", "routerLinkActive", "active", 1, "tab"], [1, "socials"], ["href", "https://instagram.com/abeikuyanful", "target", "_blank"], [1, "fa", "fa-instagram"], ["href", "https://www.github.com/ryanful", "target", "_blank"], [1, "fa", "fa-github"], ["href", "https://www.linkedin.com/in/ryanful/", "target", "_blank"], [1, "fa", "fa-linkedin-square"], ["href", "../assets/RaheelsResume.pdf", "target", "_blank"], [1, "fa", "fa-file-text"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavComponent_div_0_Template, 61, 18, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.onLanding());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["@media only screen and (max-width: 600px) {\n  .nav-tabs[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .socials[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    position: -webkit-sticky !important;\n    position: sticky !important;\n    left: 2vw !important;\n  }\n\n  .menu[_ngcontent-%COMP%] {\n    position: -webkit-sticky !important;\n    position: sticky !important;\n    left: 87vw !important;\n    display: flex !important;\n    height: 10vh !important;\n    width: 8vw !important;\n  }\n\n  #menu[_ngcontent-%COMP%], #close[_ngcontent-%COMP%] {\n    margin: auto 0 !important;\n    font-size: 8vw !important;\n  }\n\n  #menu[_ngcontent-%COMP%]:hover, #close[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n  }\n\n  .nav[_ngcontent-%COMP%] {display: block !important;}\n  .nav.responsive[_ngcontent-%COMP%] {\n    display: block !important;\n    background-color: rgba(20, 3, 3, 1) !important;\n    height: 100% !important; \n  }\n  .nav.responsive[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]{height: 10% !important;}\n\n  .nav.responsive[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 100vw !important;\n  }\n\n  .nav.responsive[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n    display: flex !important;\n    width: 100vw !important;\n    align-items: center;\n    justify-content: center;\n    font-size: 3vh;\n  }\n\n  .nav.responsive[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  .nav.responsive[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%] {\n    display: block !important;\n    position: relative !important;\n  }\n\n  .nav.responsive[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{\n    font-size: 2vh !important;\n  }\n\n  .nav.responsive[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%] {\n    display: flex !important;\n    justify-content: center;\n    width: 100vw !important;\n    right: 0 !important;\n    top: 10%;\n    position: relative !important;\n  }\n  \n}\n\n.nav[_ngcontent-%COMP%]{\n  position: fixed;\n  display: flex;\n  z-index: 1;\n  width: 100%;\n  height: 10%;\n  background-color: rgba(20, 3, 3, 0.5);\n  \n  border: 1px solid black;\n}\n\n.icons[_ngcontent-%COMP%] {\n  display: flex; \n  height: 100%;\n}\n\n.menu[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  height: 100%;\n  width: auto;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\n  cursor: pointer;\n}\n\n.nav-tabs[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n\n.tab[_ngcontent-%COMP%] {\n  padding: 1vh 1vw;\n  text-decoration: none;\n  color: #e6c498;\n  font-weight: 300;\n}\n\n.tab[_ngcontent-%COMP%]:hover, .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  font-weight: bold;\n}\n\n.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  min-width: 160px;\n  padding-top: 1vh;\n  z-index: 1;\n  background-color:rgba(20, 3, 3, 0.5);\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {display: block;}\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {font-weight: bold;}\n\n.socials[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2%;\n}\n\n.socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #e6c498;\n  padding: 0 1vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsbUNBQTJCO0lBQTNCLDJCQUEyQjtJQUMzQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxtQ0FBMkI7SUFBM0IsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBLE1BQU0seUJBQXlCLENBQUM7RUFDaEM7SUFDRSx5QkFBeUI7SUFDekIsOENBQThDO0lBQzlDLHVCQUF1QjtFQUN6QjtFQUNBLHVCQUF1QixzQkFBc0IsQ0FBQzs7RUFFOUM7SUFDRSx5QkFBeUI7SUFDekIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUiw2QkFBNkI7RUFDL0I7O0FBRUY7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBR0Esa0VBQWtFOztBQUNsRTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUEseUNBQXlDOztBQUN6QztFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDOztBQUVBLDhCQUE4Qjs7QUFDOUI7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLDRDQUE0Qzs7QUFDNUMsZ0VBQWdFOztBQUVoRSxvQ0FBb0M7O0FBQ3BDLG1DQUFtQyxjQUFjLENBQUM7O0FBRWxELDBGQUEwRjs7QUFDMUYsMEJBQTBCLGlCQUFpQixDQUFDOztBQUc1QztFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm5hdi10YWJzIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc29jaWFscyB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgICBsZWZ0OiAydncgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tZW51IHtcbiAgICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogODd2dyAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwdmggIWltcG9ydGFudDtcbiAgICB3aWR0aDogOHZ3ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjbWVudSwgI2Nsb3NlIHtcbiAgICBtYXJnaW46IGF1dG8gMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogOHZ3ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjbWVudTpob3ZlciwgI2Nsb3NlOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5uYXYge2Rpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7fVxuICAubmF2LnJlc3BvbnNpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMywgMywgMSkgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDsgXG4gIH1cbiAgLm5hdi5yZXNwb25zaXZlIC5pY29uc3toZWlnaHQ6IDEwJSAhaW1wb3J0YW50O31cblxuICAubmF2LnJlc3BvbnNpdmUgLm5hdi10YWJzIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hdi5yZXNwb25zaXZlIC5uYXYtdGFicyAudGFiIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDN2aDtcbiAgfVxuXG4gIC5uYXYucmVzcG9uc2l2ZSAubmF2LXRhYnMgLmRyb3Bkb3duIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hdi5yZXNwb25zaXZlIC5uYXYtdGFicyAuZHJvcGRvd24tY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYXYucmVzcG9uc2l2ZSAubmF2LXRhYnMgLmRyb3Bkb3duLWNvbnRlbnQgLnRhYntcbiAgICBmb250LXNpemU6IDJ2aCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hdi5yZXNwb25zaXZlIC5zb2NpYWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB0b3A6IDEwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgfVxuICBcbn1cblxuLm5hdntcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDMsIDMsIDAuNSk7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmljb25zIHtcbiAgZGlzcGxheTogZmxleDsgXG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvZ28gaW1ne1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ubG9nbyBpbWc6aG92ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi10YWJzIHtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG5cbi50YWIge1xuICBwYWRkaW5nOiAxdmggMXZ3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZTZjNDk4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4udGFiOmhvdmVyLCAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cblxuLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMCwgMywgMywgMC41KTtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cbi8qIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6cmdiKDEyLCA0LCA0KTt9ICovXG5cbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxuXG4vKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGRyb3Bkb3duIGJ1dHRvbiB3aGVuIHRoZSBkcm9wZG93biBjb250ZW50IGlzIHNob3duICovXG4uZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge2ZvbnQtd2VpZ2h0OiBib2xkO31cblxuXG4uc29jaWFscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIlO1xufVxuLnNvY2lhbHMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNlNmM0OTg7XG4gIHBhZGRpbmc6IDAgMXZ3O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/panel/panel.component.ts":
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images.service */ "./src/app/images.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["image"];
const _c1 = function (a1) { return ["/gallery", a1]; };
function PanelComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function PanelComponent_div_9_Template_img_contextmenu_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.rightClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "See more!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r35 = ctx.$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, member_r35.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r34.panel.path + member_r35.cover.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", member_r35.cover.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r35.cover.date, "");
} }
class PanelComponent {
    constructor(imagesService, route) {
        this.imagesService = imagesService;
        this.route = route;
        this.title = "Graduation"; //add to photo-info.ts
        this.index = 0;
        this.showLeft = false;
        this.showRight = true;
    }
    ngOnInit() {
        /*console.log("panelid" + this.id);
        let photos = this.imagesService.getPhotos(this.id);
        this.title = photos.title;
        this.path = photos.path;
        console.log("path" + this.path);
        this.images = photos.images;*/
        this.route.paramMap
            .subscribe(params => {
            let id = params.get("id");
            if (id !== null) {
                // console.log("PANEEL SWITCH");
                this.panel = this.imagesService.getWorkPanels().find(d => d.id === id);
            }
        });
    }
    scroll(dir) {
        let panel = document.querySelector("div#" + this.panel.id + " div.panel-images");
        let viewWidth = panel.clientWidth;
        let moveAmt = .5 * viewWidth;
        if (dir === 'l') {
            panel.scrollLeft -= panel.scrollLeft % moveAmt + moveAmt;
        }
        else if (dir === 'r') {
            panel.scrollLeft += moveAmt - panel.scrollLeft % moveAmt;
        }
    }
    checkArrows() {
        let panel = document.querySelector("div#" + this.panel.id + " div.panel-images");
        let panelEnd = panel.scrollWidth - panel.clientWidth;
        this.showLeft = !(panel.scrollLeft === 0);
        this.showRight = !(panel.scrollLeft >= panelEnd);
        console.log("id", this.panel.id, "left", panel.scrollLeft, "scrollend", panelEnd);
    }
    elementVisible(chev) {
        this.checkArrows();
        if (chev === 'r') {
            return this.showRight ? 'visible' : 'hidden';
        }
        else if (chev === 'l') {
            return this.showLeft ? 'visible' : 'hidden';
        }
    }
    rightClick() {
        return false;
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelComponent, selectors: [["panel"]], viewQuery: function PanelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elements = _t);
    } }, inputs: { panel: "panel" }, decls: 13, vars: 7, consts: [[2, "height", "100%"], [1, "panel", "page", 3, "id"], [1, "prev"], ["id", "left-chevron", "role", "button", "data-slide", "prev", "aria-hidden", "true", 1, "material-icons", 3, "click"], [1, "panel-images", 3, "scroll"], ["class", "image", 4, "ngFor", "ngForOf"], [1, "next"], ["id", "right-chevron", "role", "button", "data-slide", "next", "aria-hidden", "true", 1, "material-icons", 3, "click"], [1, "image"], [3, "routerLink"], ["image", ""], ["draggable", "false", 3, "src", "contextmenu"], [1, "panel-text"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_Template_i_click_3_listener() { return ctx.scroll("l"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function PanelComponent_Template_div_scroll_8_listener() { return ctx.checkArrows(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PanelComponent_div_9_Template, 12, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_Template_i_click_11_listener() { return ctx.scroll("r"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " chevron_right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.panel.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.elementVisible("l"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.panel.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panel.members);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.elementVisible("r"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".panel[_ngcontent-%COMP%] {\n  display: inline-flex;\n  height: 90%;\n}\n.panel-images[_ngcontent-%COMP%]{\n  display: flex;\n  position: relative;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  \n  height: 88%;\n  width: 90vw;\n  scroll-behavior: smooth;\n}\n.panel-images[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e6c498;\n  text-decoration: none;\n  display: inline-flex;\n  flex-direction: column;\n  height: 100%;\n}\n.panel-text[_ngcontent-%COMP%] {\n  height: 15%;\n}\n@media only screen and (max-width: 600px) {\n  .image[_ngcontent-%COMP%]{\n    opacity: 1 !important;\n  }\n}\nh1[_ngcontent-%COMP%]{\n  margin: 2.5vh 0;\n  font-size: 4vh;\n  line-height: 3.5vh;\n}\nh3[_ngcontent-%COMP%]{\n  margin-bottom: .5vh;\n}\np[_ngcontent-%COMP%]{\n  margin-top: .5vh;\n  opacity: .8;\n}\n.image[_ngcontent-%COMP%] {\n  \n  \n  height: 95%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-right: 1vw;\n  opacity: .5;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 85%;\n  \n  width: auto;\n  \n  margin: 0;\n  \n}\n.image[_ngcontent-%COMP%]:hover{\n  opacity: 1;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1vh 1vh 0 rgba(0,0,0,.2);  \n  \n}\n.next[_ngcontent-%COMP%], .prev[_ngcontent-%COMP%] {\n  \n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 5%;\n}\n#left-chevron[_ngcontent-%COMP%]:hover, #right-chevron[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n.left[_ngcontent-%COMP%] {\n  left:0;\n}\n.right[_ngcontent-%COMP%] {\n  right:0;\n}\n#left-chevron[_ngcontent-%COMP%], #right-chevron[_ngcontent-%COMP%] {\n  font-size: 8vw;\n  opacity: .5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0Y7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFFQTtFQUNFOzJCQUN5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLHNDQUFzQzs7QUFFeEM7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixNQUFNO0VBQ04sU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDtBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFFQTtFQUNFLE1BQU07QUFDUjtBQUVBO0VBQ0UsT0FBTztBQUNUO0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFuZWwvcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBoZWlnaHQ6IDkwJTtcbn1cbi5wYW5lbC1pbWFnZXN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xuICBoZWlnaHQ6IDg4JTtcbiAgd2lkdGg6IDkwdnc7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuLnBhbmVsLWltYWdlcyBhIHtcbiAgY29sb3I6ICNlNmM0OTg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBhbmVsLXRleHQge1xuICBoZWlnaHQ6IDE1JTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmltYWdle1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgfVxufVxuaDF7XG4gIG1hcmdpbjogMi41dmggMDtcbiAgZm9udC1zaXplOiA0dmg7XG4gIGxpbmUtaGVpZ2h0OiAzLjV2aDtcbn1cbmgze1xuICBtYXJnaW4tYm90dG9tOiAuNXZoO1xufVxuXG5we1xuICBtYXJnaW4tdG9wOiAuNXZoO1xuICBvcGFjaXR5OiAuODtcbn1cblxuLmltYWdlIHtcbiAgLyogZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXG4gIC8qIGNvbG9yOiB3aGl0ZTsgKi9cbiAgaGVpZ2h0OiA5NSU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLXJpZ2h0OiAxdnc7XG4gIG9wYWNpdHk6IC41O1xufVxuLmltYWdlIGltZyB7XG4gIGhlaWdodDogODUlO1xuICAvKiBtYXgtaGVpZ2h0OiA2Ny4zMnZoOyAqL1xuICB3aWR0aDogYXV0bztcbiAgLyogbWF4LWhlaWdodDogNzJ2aDsgKi9cbiAgbWFyZ2luOiAwO1xuICAvKiBvcGFjaXR5OiAuNTsgKi9cbn1cblxuLmltYWdlOmhvdmVye1xuICBvcGFjaXR5OiAxO1xufVxuLmltYWdlIGltZzpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMXZoIDF2aCAwIHJnYmEoMCwwLDAsLjIpOyAgXG4gIFxufVxuXG4ubmV4dCwgLnByZXYge1xuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDUlO1xufVxuXG4jbGVmdC1jaGV2cm9uOmhvdmVyLCAjcmlnaHQtY2hldnJvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxlZnQge1xuICBsZWZ0OjA7XG59XG5cbi5yaWdodCB7XG4gIHJpZ2h0OjA7XG59XG5cbiNsZWZ0LWNoZXZyb24sICNyaWdodC1jaGV2cm9uIHtcbiAgZm9udC1zaXplOiA4dnc7XG4gIG9wYWNpdHk6IC41O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'panel',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.css']
            }]
    }], function () { return [{ type: _images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['panel']
        }], elements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['image']
        }] }); })();


/***/ }),

/***/ "./src/app/photo-info.ts":
/*!*******************************!*\
  !*** ./src/app/photo-info.ts ***!
  \*******************************/
/*! exports provided: PHOTOGROUPS, PanelMember, Members, Panel, WORKPANELS, PROJECTPANELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHOTOGROUPS", function() { return PHOTOGROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelMember", function() { return PanelMember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Members", function() { return Members; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKPANELS", function() { return WORKPANELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTPANELS", function() { return PROJECTPANELS; });
//for galleries
const PHOTOGROUPS = [
    {
        id: "portfolio",
        title: "Gallery",
        path: "../assets/images/gallery/MG_",
        images: [
            { name: "dej1.jpg", date: "", title: "", desc: "", models: [] },
            { name: "josh1.jpg", date: "", title: "", desc: "", models: [] },
            { name: "2.jpg", date: "", title: "", desc: "", models: [] },
            { name: "3.jpg", date: "", title: "", desc: "", models: [] },
            { name: "rel753.jpg", date: "", title: "", desc: "", models: [] },
            { name: "rel737.jpg", date: "", title: "", desc: "", models: [] },
            { name: "rel607.jpg", date: "", title: "", desc: "", models: [] },
            // { name: "rel619.jpg", date: "", title: "", desc: "", models: [] },
            { name: "rel624.jpg", date: "", title: "", desc: "", models: [] },
            { name: "5.jpg", date: "", title: "", desc: "", models: [] },
            { name: "9.jpg", date: "", title: "", desc: "", models: [] },
            { name: "57.jpg", date: "", title: "", desc: "", models: [] },
            { name: "19-2.jpg", date: "", title: "", desc: "", models: [] },
            { name: "291.jpg", date: "", title: "", desc: "", models: [] },
            { name: "285.jpg", date: "", title: "", desc: "", models: [] },
            { name: "93.jpg", date: "", title: "", desc: "", models: [] },
            { name: "97.jpg", date: "", title: "", desc: "", models: [] },
            { name: "53.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4.jpg", date: "", title: "", desc: "", models: [] },
            { name: "1.jpg", date: "", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "grad-aus",
        title: "Austen + Friend's Graduation",
        path: "../assets/images/work/grad/aus/",
        images: [
            { name: "../aus1.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "aus2.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "aus3.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "aus4.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "aus5.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "aus6.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "aus7.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "aus8.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "aus9.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "aus10.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "aus11.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "aus12.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "aus13.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "aus14.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "aus15.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "aus16.jpg", date: "May 2019", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "grad-ab",
        title: "Abraham's Graduation",
        path: "../assets/images/work/grad/",
        images: [
            { name: "ab141.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ab/ab987.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ab/ab142.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ab/ab99.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ab/ab110.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ab/ab805.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ab/ab922.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ab/ab866.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ab/ab916.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ab/ab881.jpg", date: "May 2019", title: "", desc: "", models: [] }
            // { name: "ab/ab909.jpg", date: "May 2019", title: "", desc: "", models: [] },
        ]
    },
    {
        id: "grad-sof",
        title: "Sofya's Graduation",
        path: "../assets/images/work/grad/",
        images: [
            { name: "sof588.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "sof/sof537.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "sof/sof612.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "sof/sof696.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "sof/sof583.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "sof/sof594.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "sof/sof741.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "sof/sof763.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "sof/sof604.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "sof/sof614.jpg", date: "May 2019", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "grad-ric",
        title: "Ricardo's Graduation",
        path: "../assets/images/work/grad/",
        images: [
            { name: "ric982.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ric/ric111-2.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ric/ric26.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ric/ric960.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ric/ric112.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ric/ric963.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ric/ric101.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ric/ric61.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ric/ric106.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "ric/ric120.jpg", date: "May 2019", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "grad-alex",
        title: "Sofya's Graduation",
        path: "../assets/images/work/grad/alex/",
        images: [
            { name: "../alex295.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "alex6.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "alex3.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "alex4.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "alex2.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "alex7.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "alex8.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "alex9.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "alex10.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "alex1.jpg", date: "May 2019", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "grad-lyd",
        title: "Sofya's Graduation",
        path: "../assets/images/work/grad/",
        images: [
            { name: "lyd/lyd162.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "lyd/lyd194.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "lyd/lyd200.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "lyd/lyd232.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "lyd/lyd236.jpg", date: "May 2019", title: "", desc: "", models: [] },
            { name: "lyd/lyd282.jpg", date: "May 2019", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "event-vap",
        title: "Events",
        path: "../assets/images/work/events/vap/",
        images: [
            { name: "vap915.jpg", date: "", title: "", desc: "", models: [] },
            { name: "vap930.jpg", date: "", title: "", desc: "", models: [] },
            { name: "vap921.jpg", date: "", title: "", desc: "", models: [] },
            { name: "vap988.jpg", date: "", title: "", desc: "", models: [] },
            { name: "vap35.jpg", date: "", title: "", desc: "", models: [] },
            { name: "vap958.jpg", date: "", title: "", desc: "", models: [] },
            { name: "vap967.jpg", date: "", title: "", desc: "", models: [] },
            { name: "vap997.jpg", date: "", title: "", desc: "", models: [] },
            { name: "vap971.jpg", date: "", title: "", desc: "", models: [] },
            { name: "vap989.jpg", date: "", title: "", desc: "", models: [] },
            { name: "vap60.jpg", date: "", title: "", desc: "", models: [] },
            { name: "vap67.jpg", date: "", title: "", desc: "", models: [] },
            { name: "vap71.jpg", date: "", title: "", desc: "", models: [] },
            { name: "vap44.jpg", date: "", title: "", desc: "", models: [] },
            { name: "vap48.jpg", date: "Oct 2019", title: "Voices and Perspectives", desc: "", models: [] },
            { name: "vap973.jpg", date: "", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "event-ae19",
        title: "Events",
        path: "../assets/images/work/events/AE19/",
        images: [
            { name: "ae19-8.jpg", date: "", title: "", desc: "", models: [] },
            { name: "ae19-11.jpg", date: "", title: "", desc: "", models: [] },
            { name: "ae19-1.jpg", date: "", title: "", desc: "", models: [] },
            { name: "ae19-3.jpg", date: "", title: "", desc: "", models: [] },
            { name: "ae19-4.jpg", date: "", title: "", desc: "", models: [] },
            { name: "ae19-5.jpg", date: "", title: "", desc: "", models: [] },
            { name: "ae19-6.jpg", date: "", title: "", desc: "", models: [] },
            { name: "ae19-7.jpg", date: "", title: "", desc: "", models: [] },
            { name: "ae19-9.jpg", date: "", title: "", desc: "", models: [] },
            { name: "ae19-10.jpg", date: "", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "event-urmcbbq",
        title: "Events",
        path: "../assets/images/work/events/urmcbbq/",
        images: [
            { name: "urmcbbq2.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq22.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq4.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq5.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq6.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq16.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq8.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq9.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq10.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq11.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq12.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq13.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq14.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq15.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq7.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq3.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq18.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq19.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq20.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq21.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq17.jpg", date: "", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "event-bloth19",
        title: "Events",
        path: "../assets/images/work/events/bloth/",
        images: [
            { name: "bloth19-2.jpg", date: "", title: "", desc: "", models: [] },
            { name: "bloth19-3.jpg", date: "", title: "", desc: "", models: [] },
            { name: "bloth19-4.jpg", date: "", title: "", desc: "", models: [] },
            { name: "bloth19-5.jpg", date: "", title: "", desc: "", models: [] },
            { name: "bloth19-6.jpg", date: "", title: "", desc: "", models: [] },
            { name: "bloth19-15.jpg", date: "", title: "", desc: "", models: [] },
            { name: "bloth19-7.jpg", date: "", title: "", desc: "", models: [] },
            { name: "bloth19-8.jpg", date: "", title: "", desc: "", models: [] },
            { name: "bloth19-9.jpg", date: "", title: "", desc: "", models: [] },
            { name: "bloth19-10.jpg", date: "", title: "", desc: "", models: [] },
            { name: "bloth19-12.jpg", date: "", title: "", desc: "", models: [] },
            { name: "bloth19-13.jpg", date: "", title: "", desc: "", models: [] },
            { name: "bloth19-14.jpg", date: "", title: "", desc: "", models: [] },
            { name: "bloth19-16.jpg", date: "", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "event-pep",
        title: "Events",
        path: "../assets/images/work/events/pepnc/",
        images: [
            { name: "pepnc994.jpg", date: "", title: "", desc: "", models: [] },
            { name: "pepnc424.jpg", date: "", title: "", desc: "", models: [] },
            //{ name: "pepnc448.jpg", date: "", title: "", desc: "", models: [] },
            { name: "pepnc157.jpg", date: "", title: "", desc: "", models: [] },
            { name: "pepnc214.jpg", date: "", title: "", desc: "", models: [] },
            { name: "pepnc457.jpg", date: "", title: "", desc: "", models: [] },
            { name: "pepnc445.jpg", date: "", title: "", desc: "", models: [] },
            { name: "pepnc347.jpg", date: "", title: "", desc: "", models: [] },
            { name: "pepnc288.jpg", date: "", title: "", desc: "", models: [] },
            { name: "pepnc486.jpg", date: "", title: "", desc: "", models: [] },
            { name: "pepnc532.jpg", date: "", title: "", desc: "", models: [] },
            { name: "pepnc131.jpg", date: "", title: "", desc: "", models: [] },
            { name: "pepnc242.jpg", date: "", title: "", desc: "", models: [] },
            { name: "pepnc52.jpg", date: "", title: "", desc: "", models: [] },
            { name: "pepnc81.jpg", date: "", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "event-afrik18",
        title: "Events - Afrik! 2018",
        path: "../assets/images/work/events/afrik18/",
        images: [
            { name: "../afrik.jpg", date: "", title: "", desc: "", models: [] },
            { name: "afrik1.jpg", date: "", title: "", desc: "", models: [] },
            { name: "afrik2.jpg", date: "", title: "", desc: "", models: [] },
            { name: "afrik3.jpg", date: "", title: "", desc: "", models: [] },
            { name: "afrik4.jpg", date: "", title: "", desc: "", models: [] },
            { name: "afrik5.jpg", date: "", title: "", desc: "", models: [] },
            { name: "afrik6.jpg", date: "", title: "", desc: "", models: [] },
            { name: "afrik7.jpg", date: "", title: "", desc: "", models: [] },
            { name: "afrik8.jpg", date: "", title: "", desc: "", models: [] },
            { name: "afrik9.jpg", date: "", title: "", desc: "", models: [] },
            { name: "afrik10.jpg", date: "", title: "", desc: "", models: [] },
            { name: "afrik11.jpg", date: "", title: "", desc: "", models: [] },
            { name: "afrik12.jpg", date: "", title: "", desc: "", models: [] },
            { name: "afrik13.jpg", date: "", title: "", desc: "", models: [] },
            { name: "afrik16.jpg", date: "", title: "", desc: "", models: [] },
            { name: "afrik17.jpg", date: "", title: "", desc: "", models: [] },
            { name: "afrik14.jpg", date: "", title: "", desc: "", models: [] },
            { name: "afrik15.jpg", date: "", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "hs-urmc",
        title: "URMC Headshots",
        path: "../assets/images/work/headshots/urmc/",
        images: [
            { name: "../urmc-mar.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmc-hanan3.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmc-gio.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmc-albina.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmc-ian.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmc-esu.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmc-mo.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmc-chike.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmc-alexei4.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmc-danyeh.jpg", date: "", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "hs-raas",
        title: "RAAS Headshots",
        path: "../assets/images/work/headshots/raas/",
        images: [
            { name: "raas2.jpg", date: "", title: "", desc: "", models: [] },
            { name: "raas3.jpg", date: "", title: "", desc: "", models: [] },
            { name: "raas4.jpg", date: "", title: "", desc: "", models: [] },
            { name: "raas5.jpg", date: "", title: "", desc: "", models: [] },
            { name: "raas6.jpg", date: "", title: "", desc: "", models: [] },
            { name: "../raas1.jpg", date: "", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "hs-anj",
        title: "Anjali Headshots",
        path: "../assets/images/work/headshots/anjali/",
        images: [
            { name: "anj2.jpg", date: "", title: "", desc: "", models: [] },
            { name: "anj3.jpg", date: "", title: "", desc: "", models: [] },
            { name: "anj4.jpg", date: "", title: "", desc: "", models: [] },
            { name: "anj5.jpg", date: "", title: "", desc: "", models: [] },
            { name: "anj6.jpg", date: "", title: "", desc: "", models: [] },
            { name: "anj7.jpg", date: "", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "iao-bday",
        title: "Iyaniwura's 21st Bday",
        path: "../assets/images/work/other/iao-bday/",
        images: [
            { name: "iao479.jpg", date: "", title: "", desc: "", models: [] },
            { name: "iao530.jpg", date: "", title: "", desc: "", models: [] },
            { name: "iao1.jpg", date: "", title: "", desc: "", models: [] },
            { name: "iao2.jpg", date: "", title: "", desc: "", models: [] },
            { name: "iao3.jpg", date: "", title: "", desc: "", models: [] },
            { name: "iao4.jpg", date: "", title: "", desc: "", models: [] },
            { name: "iao5.jpg", date: "", title: "", desc: "", models: [] },
            { name: "iao6.jpg", date: "", title: "", desc: "", models: [] },
            { name: "iao7.jpg", date: "", title: "", desc: "", models: [] },
            { name: "iao8.jpg", date: "", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "alenabday",
        title: "Alena's 19th Bday",
        path: "../assets/images/work/other/alenabday/",
        images: [
            { name: "../alena1.jpg", date: "", title: "", desc: "", models: [] },
            { name: "alena2.jpg", date: "", title: "", desc: "", models: [] },
            { name: "alena3.jpg", date: "", title: "", desc: "", models: [] },
            { name: "alena4.jpg", date: "", title: "", desc: "", models: [] },
            { name: "alena5.jpg", date: "", title: "", desc: "", models: [] },
            { name: "alena6.jpg", date: "", title: "", desc: "", models: [] },
        ]
    },
    {
        id: "proj-risk",
        title: "Photoseries - Risk",
        path: "../assets/images/projects/proj-risk/",
        images: [
            { name: "../risk.png", date: "Jun 2019", title: "", desc: "", models: [] },
            { name: "risk842.jpg", date: "Jun 2019", title: "", desc: "", models: [] },
            { name: "risk841.jpg", date: "Jun 2019", title: "", desc: "", models: [] },
            { name: "risk825.jpg", date: "", title: "", desc: "", models: [] },
            { name: "risk2.jpg", date: "", title: "", desc: "", models: [] },
            { name: "risk3.jpg", date: "Jun 2019", title: "", desc: "", models: [] },
            { name: "risk4.jpg", date: "Jun 2019", title: "", desc: "", models: [] },
            { name: "risk5.jpg", date: "", title: "", desc: "", models: [] },
            { name: "risk6.jpg", date: "", title: "", desc: "", models: [] },
            // { name: "risk7.jpg", date: "", title: "", desc: "", models: [] },
            { name: "../risk832.jpg", date: "", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "proj-breakwall4",
        title: "Photoseries - Wall 4",
        path: "../assets/images/projects/proj-breakwall4/",
        images: [
            { name: "../4wall1.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4wall2.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4wall3.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4wall4.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4wall5.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4wall6.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4wall7.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4walldm7.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4walldm1.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4walldm2.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4walldm3.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4walldm4.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4walldm5.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4walldm6.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4wall8.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4wall9.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4walld1.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4walld2.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4walld3.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4walld4.jpg", date: "", title: "", desc: "", models: [] },
            { name: "4wall0.jpg", date: "", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "proj-syd",
        title: "Photoseries - Sydney",
        path: "../assets/images/projects/proj-syd/",
        images: [
            { name: "syd24.jpg", date: "", title: "", desc: "", models: [] },
            { name: "syd16.jpg", date: "", title: "", desc: "", models: [] },
            { name: "syd29.jpg", date: "", title: "", desc: "", models: [] },
            { name: "syd30.jpg", date: "", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "proj-chi",
        title: "Photoseries - Chioma",
        path: "../assets/images/projects/proj-chi/",
        images: [
            { name: "../THEONE.jpg", date: "", title: "", desc: "", models: [] },
            { name: "chi862.jpg", date: "", title: "", desc: "", models: [] },
            { name: "chi849.jpg", date: "", title: "", desc: "", models: [] },
            { name: "chi860.jpg", date: "", title: "", desc: "", models: [] },
            { name: "chi856.jpg", date: "", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "proj-albums",
        title: "Photoseries - Albums Rahmastered",
        path: "../assets/images/projects/proj-albums/",
        images: [
            { name: "onelove.png", date: "", title: "", desc: "", models: [] },
            { name: "sol3.png", date: "", title: "", desc: "", models: [] },
            { name: "blond.png", date: "", title: "", desc: "", models: [] },
            { name: "4eva.png", date: "", title: "", desc: "", models: [] },
            { name: "szer.png", date: "", title: "", desc: "", models: [] },
            { name: "sonder1.png", date: "", title: "", desc: "", models: [] },
            { name: "blkswn.png", date: "", title: "", desc: "", models: [] },
            { name: "CHIEF.png", date: "", title: "", desc: "", models: [] },
            { name: "angeloh.png", date: "", title: "", desc: "", models: [] },
            { name: "sonderinto1.png", date: "", title: "", desc: "", models: [] },
            { name: "MOONSHOES.png", date: "", title: "", desc: "", models: [] },
            { name: "bloodorange.png", date: "", title: "", desc: "", models: [] },
            { name: "../bak.png", date: "", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "proj-uncanny",
        title: "Photoseries - Uncanny",
        path: "../assets/images/projects/proj-uncanny/",
        images: [
            { name: "uncanny753-2.jpg", date: "", title: "", desc: "", models: [] },
            { name: "uncanny750-2.jpg", date: "", title: "", desc: "", models: [] },
            { name: "uncanny758.jpg", date: "", title: "", desc: "", models: [] },
            { name: "uncanny762.jpg", date: "", title: "", desc: "", models: [] },
            { name: "uncanny777.jpg", date: "", title: "", desc: "", models: [] },
            { name: "uncanny650.jpg", date: "", title: "", desc: "", models: [] },
            { name: "uncanny763.jpg", date: "", title: "", desc: "", models: [] },
            { name: "uncanny768.jpg", date: "", title: "", desc: "", models: [] },
            { name: "uncanny775.jpg", date: "", title: "", desc: "", models: [] },
            { name: "uncanny766.jpg", date: "", title: "", desc: "", models: [] }
        ]
    }
];
class PanelMember {
}
class Members {
}
class Panel {
}
//panels to be shown on work page
//string corresponds to id of a PHOTOGROUP
const WORKPANELS = [
    {
        id: "work-grad",
        title: "Graduations",
        path: "../assets/images/work/grad/",
        members: [
            {
                cover: { name: "aus1.jpg", date: "May 2019", title: "Austen + Friends", desc: "", models: [] },
                id: "grad-aus"
            },
            {
                cover: { name: "ab141.jpg", date: "May 2019", title: "Abraham", desc: "", models: [] },
                id: "grad-ab"
            },
            {
                cover: { name: "sof588.jpg", date: "May 2019", title: "Sofya", desc: "", models: [] },
                id: "grad-sof"
            },
            {
                cover: { name: "ric982.jpg", date: "May 2019", title: "Ricardo", desc: "", models: [] },
                id: "grad-ric"
            },
            {
                cover: { name: "alex295.jpg", date: "May 2019", title: "Alexandria", desc: "", models: [] },
                id: "grad-alex"
            },
            {
                cover: { name: "lyd169.jpg", date: "May 2018", title: "Lydia", desc: "", models: [] },
                id: "grad-lyd"
            }
        ]
    },
    {
        id: "work-events",
        title: "Events",
        path: "../assets/images/work/events/",
        members: [
            {
                cover: { name: "vap913.jpg", date: "Oct 2019", title: "Voices and Perspectives", desc: "", models: [] },
                id: "event-vap"
            },
            {
                cover: { name: "ae19-2.jpg", date: "Oct 2019", title: "Autumn Evening", desc: "", models: [] },
                id: "event-ae19"
            },
            {
                cover: { name: "urmcbbq1.jpg", date: "Aug 2019", title: "URMC x NSBE x SHPE BBQ", desc: "", models: [] },
                id: "event-urmcbbq"
            },
            {
                cover: { name: "bloth19-1.jpg", date: "Aug 2019", title: "Black Life on The Hill", desc: "", models: [] },
                id: "event-bloth19"
            },
            {
                cover: { name: "pepnc992.jpg", date: "May 2018", title: "Peprah Naming Ceremony", desc: "", models: [] },
                id: "event-pep"
            },
            {
                cover: { name: "afrik.jpg", date: "March 2018", title: "Afrik!", desc: "", models: [] },
                id: "event-afrik18"
            }
        ]
    },
    {
        id: "work-hs",
        title: "Headshots + Portraits",
        path: "../assets/images/work/headshots/",
        members: [
            {
                cover: { name: "urmc-mar.jpg", date: "Feb 2020", title: "URMC Cornell Headshots", desc: "", models: [] },
                id: "hs-urmc"
            },
            {
                cover: { name: "raas1.jpg", date: "Oct 2019", title: "Cornell RAAS Headshots", desc: "", models: [] },
                id: "hs-raas"
            },
            {
                cover: { name: "anj1.jpg", date: "Oct 2019", title: "Cornell Anjali Headshots", desc: "", models: [] },
                id: "hs-anj"
            }
        ]
    },
    {
        id: "work-other",
        title: "Other",
        path: "../assets/images/work/other/",
        members: [
            {
                cover: { name: "alena1.jpg", date: "Nov 2019", title: "Alena's 19th Bday", desc: "", models: [] },
                id: "alenabday"
            },
            {
                cover: { name: "iao521.jpg", date: "Jun 2019", title: "Iyaniwura's 21st Bday", desc: "", models: [] },
                id: "iao-bday"
            }
        ]
    }
    //, "work-orgs", "work-brands", "work-mags"
];
//panels to be shown on project page
//string corresponds to id of a PHOTOGROUP
const PROJECTPANELS = [
    {
        id: "projects",
        title: "Photoseries",
        path: "../assets/images/projects/",
        members: [
            {
                cover: {
                    name: "flick.png", date: "Feb 2020", title: "Uncanny Vibrations",
                    desc: "Coming Soon!", models: ["Rainer Sainvil", "Hameedah Khadar", "Emily Romero"]
                },
                id: "proj-uncanny"
            },
            {
                cover: {
                    name: "4wall1.jpg", date: "Jan 2020", title: "Breaking The 4th Wall",
                    desc: "Coming Soon!", models: ["Destiny Nwafor", "Maxine Nzegwu", "Rainer Sainvil"]
                },
                id: "proj-breakwall4"
            },
            {
                cover: {
                    name: "syd629.jpg", date: "Jan 2020", title: "Sydney",
                    desc: "Coming Soon!", models: ["Sydney Gates"]
                },
                id: "proj-syd"
            },
            {
                cover: {
                    name: "THEONE.jpg", date: "Nov 2019", title: "Chioma",
                    desc: "Coming Soon!", models: ["Chioma Iloebunam"]
                },
                id: "proj-chi"
            },
            {
                cover: {
                    name: "risk832.jpg", date: "Jun 2019", title: "Risk",
                    desc: `This is inspired by the song playing in the video: 'Risk' ` +
                        `by Fkj x Bas. The calm, soothing nature of the production matched ` +
                        `the image perfectly. It's full circle -- Reem and I first bonded over ` +
                        `our mutual love for Bas at that time (he's still one of my favorite ` +
                        `artists today)!`, models: ["Reem Abdalla"]
                },
                id: "proj-risk"
            },
            {
                cover: {
                    name: "bak.png", date: "Jun 2019", title: "One Love (Albums Rahmastered)",
                    desc: "Coming Soon!", models: ["Reem Abdalla", "Chiemezue Ijomanta",
                        "Iyaniwura Olarewaju", "William Nnuro", "Chuka Anyene", "Abby Agyapong"]
                },
                id: "proj-albums"
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images.service */ "./src/app/images.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../panel/panel.component */ "./src/app/panel/panel.component.ts");





function ProjectsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const panel_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panel", panel_r3);
} }
class ProjectsComponent {
    constructor(imagesService) {
        this.imagesService = imagesService;
    }
    ngOnInit() {
        this.panels = this.imagesService.getProjectPanels();
        console.log("HEY", this.panels[0].id);
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["projects"]], decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "panel"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"]], styles: ["div[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css']
            }]
    }], function () { return [{ type: _images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images.service */ "./src/app/images.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../panel/panel.component */ "./src/app/panel/panel.component.ts");





function WorkComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panel", panel_r1);
} }
class WorkComponent {
    constructor(imagesService) {
        this.imagesService = imagesService;
    }
    ngOnInit() {
        this.panels = this.imagesService.getWorkPanels();
        console.log("HEY", this.panels[0].id);
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"])); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["work-page"]], decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "panel"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"]], styles: ["div[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC93b3JrL3dvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'work-page',
                templateUrl: './work.component.html',
                styleUrls: ['./work.component.css']
            }]
    }], function () { return [{ type: _images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raheel/Desktop/lifestylesite/ryanful.github.io/src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map