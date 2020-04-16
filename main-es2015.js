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
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["about"]], decls: 38, vars: 0, consts: [[1, "about", "page"], ["id", "about-pic"], [1, "down"], ["role", "button", "data-slide", "next", "aria-hidden", "true", 1, "material-icons", "expand-more", 3, "click"], [1, "content"], ["id", "about-fav"], ["src", "../assets/images/self/self1.jpg", "draggable", "false", 2, "border-radius", "5%", 3, "contextmenu"], ["id", "about-text"], ["href", "https://instagram.com/abeikuyanful", "target", "_blank"], ["href", "https://www.github.com/ryanful", "target", "_blank"], ["href", "../assets/RaheelYanful-Resume.pdf", "target", "_blank"], ["href", "https://www.linkedin.com/in/ryanful/", "target", "_blank"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "photographer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "programmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Hi! My name is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Raheel Abeiku Yanful");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ". I am currently a junior at Cornell University pursing a Computer Science degee. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " I've been heavily involved with the art of photography for 4+ years now. Some of my best work comes unplanned and unexpected, after long periods of feeling uninspired. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " IG: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "@abeikuyanful");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "rah.captures@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "My Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Link with me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media only screen and (max-width: 600px) {\n  #about-pic[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .content[_ngcontent-%COMP%]{\n    top: 0 !important;\n    padding-bottom: 5vh;\n  }\n\n  #about-text[_ngcontent-%COMP%] {\n    width: 80% !important;\n  }\n\n  #about-fav[_ngcontent-%COMP%] {\n    max-width: 80vw !important;\n  }\n}\n\n.page[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 90%;\n}\n\n#about-pic[_ngcontent-%COMP%] {\n  \n  \n  background-image: url('/../assets/images/self/self2.jpg'); \n\n  \n  height: 100%;\n  width: 100%;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n}\n\n.down[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  top: 90%;\n}\n\n.expand-more[_ngcontent-%COMP%]:hover{\n  opacity: 1;\n  cursor: pointer;\n}\n\n.expand-more[_ngcontent-%COMP%] {\n  font-size: 10vh;\n  opacity: .5;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: 11%;\n  height: 100%;\n  width: 100vw;\n}\n\n#about-text[_ngcontent-%COMP%] {\n  \n  \n  width: 80%;\n  max-width: 600px;\n  max-height: 60%;\n  \n  \n}\n\n#about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n#about-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#about-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  margin-bottom: .5vh;\n}\n\n#about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n  margin-top: .5vh;\n}\n\n#about-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e6c498;\n}\n\n#about-fav[_ngcontent-%COMP%] {\n  \n  \n  max-height: 40%;\n  max-width: 80vw;\n  \n}\n\n#about-fav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  max-height: 100%;\n  max-width: 80vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0RBQWtEO0VBQ2xELHlEQUF5RDs7RUFFekQsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCOztBQUV4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsUUFBUTtBQUNWOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlOztFQUVmLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixlQUFlO0VBQ2YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICNhYm91dC1waWMge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb250ZW50e1xuICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiA1dmg7XG4gIH1cblxuICAjYWJvdXQtdGV4dCB7XG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2Fib3V0LWZhdiB7XG4gICAgbWF4LXdpZHRoOiA4MHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnBhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogOTAlO1xufVxuXG4jYWJvdXQtcGljIHtcbiAgLyogVGhlIGltYWdlIHVzZWQqL1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWFnZXMvSU1HXzE4NTIuanBnXCIpOyAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy8uLi9hc3NldHMvaW1hZ2VzL3NlbGYvc2VsZjIuanBnJyk7IFxuXG4gIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbn1cblxuLmRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA5MCU7XG59XG5cbi5leHBhbmQtbW9yZTpob3ZlcntcbiAgb3BhY2l0eTogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXhwYW5kLW1vcmUge1xuICBmb250LXNpemU6IDEwdmg7XG4gIG9wYWNpdHk6IC41O1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTElO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuI2Fib3V0LXRleHQge1xuICAvKiBUaGUgaW1hZ2UgdXNlZCovXG4gIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXgtaGVpZ2h0OiA2MCU7XG4gIFxuICAvKmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyovXG59XG5cbiNhYm91dC10ZXh0IHAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4jYWJvdXQtdGV4dCBoMSwgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNhYm91dC10ZXh0IGgxe1xuICBtYXJnaW4tYm90dG9tOiAuNXZoO1xufVxuI2Fib3V0LXRleHQgaDJ7XG4gIG1hcmdpbi10b3A6IC41dmg7XG59XG5cbiNhYm91dC10ZXh0IGEge1xuICBjb2xvcjogI2U2YzQ5ODtcbn1cblxuI2Fib3V0LWZhdiB7XG4gIC8qIFRoZSBpbWFnZSB1c2VkKi9cbiAgLyogU2V0IGEgc3BlY2lmaWMgaGVpZ2h0ICovXG4gIG1heC1oZWlnaHQ6IDQwJTtcbiAgbWF4LXdpZHRoOiA4MHZ3O1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyovXG59XG5cbiNhYm91dC1mYXYgaW1ne1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwdnc7XG59XG4iXX0= */"] });
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
        const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "router-outlet", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onActivate($event, _r37); });
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
function GalleryComponent_div_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Your browser does not support HTML5 video. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GalleryComponent_div_1_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+ ", model_r14, " +");
} }
function GalleryComponent_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function GalleryComponent_div_1_div_27_Template_img_contextmenu_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.rightClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pic_r15 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r11.setBackground(false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r11.path + pic_r15.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GalleryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryComponent_div_1_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GalleryComponent_div_1_ng_template_3_Template, 4, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_1_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.scroll("d"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Click on me to see the full series!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_1_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.scroll("d"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function GalleryComponent_div_1_Template_div_scroll_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.checkArrows(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, GalleryComponent_div_1_div_27_Template, 2, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_1_Template_i_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.scroll("l"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " chevron_left ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_1_Template_i_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.scroll("r"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " chevron_right ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.id !== "proj-risk")("ngIfElse", _r8);
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
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function GalleryComponent_ng_template_2_div_0_Template_img_contextmenu_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.rightClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pic_r26 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r25.path + pic_r26.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GalleryComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleryComponent_ng_template_2_div_0_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_ng_template_2_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.scroll("u"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " expand_less ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_ng_template_2_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.scroll("rd"); });
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
        this.imageSub = this.route.paramMap
            .subscribe(params => {
            if (this.id !== 'portfolio') {
                this.id = params.get("id");
            }
            console.log("gallery id check:", this.id);
            let photos = this.imagesService.getPhotos(this.id);
            this.details = this.imagesService.getProjectDetails(this.id);
            this.path = photos.path;
            this.images = photos.images;
            this.isProj = this.id.substr(0, 4) === 'proj';
        });
        // document.body.scrollTop = 0;
        //let photos = this.imagesService.getPhotos(this.id);
        //this.path = photos.path;
        //this.images = photos.images;
    }
    ngOnDestroy() {
        this.imageSub.unsubscribe();
    }
    setBackground(isOdd) {
        // console.log("we tried");
        // document.querySelector("div.image").setAttribute("background-color", "#e8d8c3");
        return isOdd ? "#e8d8c3" : "none";
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
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["gallery"]], viewQuery: function GalleryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.regGall = _t.first);
    } }, inputs: { id: ["name", "id"] }, decls: 4, vars: 2, consts: [[1, "gallery", "page", 3, "scroll"], ["style", "height:100%;", 4, "ngIf", "ngIfElse"], ["regularGallery", ""], [2, "height", "100%"], [1, "details"], ["id", "detail-image", 4, "ngIf", "ngIfElse"], ["detailVid", ""], ["id", "detail-text"], ["id", "text"], [4, "ngFor", "ngForOf"], [1, "link"], [3, "click"], [1, "down"], ["role", "button", "data-slide", "next", "aria-hidden", "true", 1, "material-icons", "expand-more", 3, "click"], ["id", "proj-gallery", 1, "page", 3, "scroll"], ["class", "image", 3, "background-color", 4, "ngFor", "ngForOf"], [1, "controls"], ["role", "button", "data-slide", "next", "aria-hidden", "true", 1, "material-icons", "left-chevron", 3, "click"], [1, "filler"], ["role", "button", "data-slide", "next", "aria-hidden", "true", 1, "material-icons", "right-chevron", 3, "click"], ["id", "detail-image"], ["draggable", "false", 3, "src", "contextmenu"], ["id", "detailVid"], ["width", "100%", "controls", ""], ["src", "/../assets/images/projects/RiskFtReem.mp4", "type", "video/mp4"], [1, "image"], ["class", "image", 4, "ngFor", "ngForOf"], [1, "reg-controls"], ["role", "button", "data-slide", "next", "aria-hidden", "true", 1, "material-icons", "expand-less", 3, "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function GalleryComponent_Template_div_scroll_0_listener() { return ctx.checkArrows(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryComponent_div_1_Template, 34, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryComponent_ng_template_2_Template, 6, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isProj)("ngIfElse", _r5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@media only screen and (max-width: 600px) {\n  .image[_ngcontent-%COMP%]{\n    width: 100% !important;\n    \n  }\n\n  .details[_ngcontent-%COMP%]{\n    flex-direction: column !important;\n  }\n\n  #detail-image[_ngcontent-%COMP%]{\n    display: none !important;\n  } \n\n  #detailVid[_ngcontent-%COMP%]{\n    max-width: 100% !important;\n    height: 40% !important;\n  }\n\n  #detail-text[_ngcontent-%COMP%] {\n    top: 0% !important;\n    height: 48% !important;\n    width: 100% !important;\n  }\n}\n\n.page[_ngcontent-%COMP%]{\n  position: absolute;\n  scroll-behavior: smooth;\n  height: 90%;\n  overflow-y: scroll;\n}\n\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin:auto;\n  max-height: 75%;\n  max-width: 95%;\n  box-shadow: 0 2vh 2vh 0 rgba(0, 0, 0, 0.481); \n}\n\n.image[_ngcontent-%COMP%] {\n  display: inline-grid;\n  vertical-align: middle;\n  width: 50%;\n  height: 100%;\n  \n  \n  \n  \n}\n\n#proj-gallery[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  width:100%;\n  height: 100%;\n  scroll-behavior: smooth;\n}\n\n.details[_ngcontent-%COMP%]{\n  height: 100%;\n  width: 100vw;\n  display: inline-flex;\n  overflow-x: scroll;\n}\n\n#detail-image[_ngcontent-%COMP%] {\n  \n  \n\n  \n  max-width:50%;\n  height: 100%;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  \n  \n\n}\n\n#detailVid[_ngcontent-%COMP%] {\n  max-width: 50%;\n  height: 100%;\n  display: flex;\n}\n\n#detail-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height:100%;\n  width: auto;\n  flex-grow: 1;\n  \n}\n\n#detail-text[_ngcontent-%COMP%]{\n  position:relative; \n  top:10%; \n  width: 50%; \n  height:90%; \n  flex-grow: 1; \n  background-color:rgba(12, 4, 4, .8);\n}\n\n#text[_ngcontent-%COMP%] {\n  margin: auto;\n  height: 83%;\n  width: 90%;\n  \n}\n\np[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.link[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.down[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 12.3%;\n}\n\n.reg-controls[_ngcontent-%COMP%]{\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin:auto;\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  bottom: 90%;\n  \n  height: 100%;\n  width: 0%;\n}\n\n.expand-more[_ngcontent-%COMP%]:hover, .expand-less[_ngcontent-%COMP%]:hover, .right-chevron[_ngcontent-%COMP%]:hover, .left-chevron[_ngcontent-%COMP%]:hover{\n  opacity: 1;\n  cursor: pointer;\n}\n\n.expand-more[_ngcontent-%COMP%], .expand-less[_ngcontent-%COMP%] {\n  font-size: 10vh;\n  opacity: .5;\n}\n\n.right-chevron[_ngcontent-%COMP%], .left-chevron[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  font-size: 10vw;\n  opacity: .5;\n}\n\n.right-chevron[_ngcontent-%COMP%]{\n  left: 90vw;\n}\n\n.filler[_ngcontent-%COMP%] {\n  width: 80vw;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QjtzQ0FDa0M7RUFDcEM7O0VBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixzQkFBc0I7RUFDeEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0VBQXNFOztFQUV0RSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQjsyQkFDeUI7O0FBRTNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsT0FBTztFQUNQLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUdBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmltYWdle1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgLyogaGVpZ2h0OiA4MHZoICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEwdmggIWltcG9ydGFudDsgKi9cbiAgfVxuXG4gIC5kZXRhaWxze1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgfVxuXG4gICNkZXRhaWwtaW1hZ2V7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9IFxuXG4gICNkZXRhaWxWaWR7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0MCUgIWltcG9ydGFudDtcbiAgfVxuXG4gICNkZXRhaWwtdGV4dCB7XG4gICAgdG9wOiAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDglICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ucGFnZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgaGVpZ2h0OiA5MCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5pbWFnZSBpbWcge1xuICBtYXJnaW46YXV0bztcbiAgbWF4LWhlaWdodDogNzUlO1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgYm94LXNoYWRvdzogMCAydmggMnZoIDAgcmdiYSgwLCAwLCAwLCAwLjQ4MSk7IFxufVxuXG4uaW1hZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gIC8qIHBhZGRpbmc6IDNweDsgKi9cbiAgLyogbWFyZ2luOiBhdXRvOyAqL1xuICAvKiBib3JkZXI6IDNweCBzb2xpZCAjOGQ1ZTIxOyAqL1xufVxuXG4jcHJvai1nYWxsZXJ5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLmRldGFpbHN7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuI2RldGFpbC1pbWFnZSB7XG4gIC8qIFRoZSBpbWFnZSB1c2VkKi9cbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvLi4vYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9yaXNrODMyLmpwZycpOyAgKi9cblxuICAvKiBTZXQgYSBzcGVjaWZpYyBoZWlnaHQgKi9cbiAgbWF4LXdpZHRoOjUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgLyogd2lkdGg6IDMwJTsgKi9cbiAgLyogYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cblxufVxuXG4jZGV0YWlsVmlkIHtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI2RldGFpbC1pbWFnZSBpbWcge1xuICBoZWlnaHQ6MTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIGZsZXgtZ3JvdzogMTtcbiAgLyogd2lkdGg6IDMwJTsgKi9cbn1cbiNkZXRhaWwtdGV4dHtcbiAgcG9zaXRpb246cmVsYXRpdmU7IFxuICB0b3A6MTAlOyBcbiAgd2lkdGg6IDUwJTsgXG4gIGhlaWdodDo5MCU7IFxuICBmbGV4LWdyb3c6IDE7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTIsIDQsIDQsIC44KTtcbn1cbiN0ZXh0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDgzJTtcbiAgd2lkdGg6IDkwJTtcbiAgLypib3JkZXI6IDFweCBzb2xpZCBibGFjazsqL1xufVxuXG5wLGgyIHtcbiAgbWFyZ2luOiAwO1xufVxuaDIge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubGluazpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMi4zJTtcbn1cblxuLnJlZy1jb250cm9sc3tcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46YXV0bztcbn1cblxuXG4uY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogOTAlO1xuICAvKiBtYXJnaW4tdG9wOiAtOTB2aDsgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMCU7XG59XG4uZXhwYW5kLW1vcmU6aG92ZXIsIC5leHBhbmQtbGVzczpob3ZlciwgLnJpZ2h0LWNoZXZyb246aG92ZXIsIC5sZWZ0LWNoZXZyb246aG92ZXJ7XG4gIG9wYWNpdHk6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmV4cGFuZC1tb3JlLCAuZXhwYW5kLWxlc3Mge1xuICBmb250LXNpemU6IDEwdmg7XG4gIG9wYWNpdHk6IC41O1xufVxuXG4ucmlnaHQtY2hldnJvbiwgLmxlZnQtY2hldnJvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDEwdnc7XG4gIG9wYWNpdHk6IC41O1xufVxuXG4ucmlnaHQtY2hldnJvbntcbiAgbGVmdDogOTB2dztcbn1cblxuLmZpbGxlciB7XG4gIHdpZHRoOiA4MHZ3O1xuICB6LWluZGV4OiAtMTtcbn1cblxuXG5cblxuIl19 */"] });
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
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["landing"]], decls: 14, vars: 0, consts: [[1, "intro"], [1, "intro-nav"], ["src", "../assets/logo/trans-notext.png", 3, "contextmenu"], [2, "height", "100%", "margin", "auto"], ["routerLink", "work"], ["routerLink", "portfolio"], ["routerLink", "projects"], [1, "intro-img"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function LandingComponent_Template_img_contextmenu_2_listener() { return ctx.rightClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "MY WORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "GALLERY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@media only screen and (max-width: 600px) {\n  .intro[_ngcontent-%COMP%] {\n    background-image: url(\"/../assets/images/gallery/MG_dej1.jpg\") !important;\n  }\n\n}\n\n.intro[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n  height: 100%;\n  font-size: 5vh;\n  line-height: 5.5vh;\n  font-weight: 300;\n  \n  \n  \n  \n  background-image: url(\"/../assets/images/projects/proj-breakwall4/4wall2.jpg\");\n  background-size: cover;\n}\n\n.intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{ \n  \n  \n  color: #e6c498;\n  text-decoration: none;\n}\n\n.intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{ \n  \n  font-weight: bold;\n}\n\n.intro-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20vh;\n  \n}\n\n.intro-nav[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto 0%;\n  \n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHlFQUF5RTtFQUMzRTs7QUFFRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiwyREFBMkQ7RUFDM0QsaURBQWlEO0VBQ2pELGtEQUFrRDtFQUNsRCw4RUFBOEU7RUFDOUUsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlDQUFpQzs7QUFFbkMiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmludHJvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJ5L01HX2RlajEuanBnXCIpICFpbXBvcnRhbnQ7XG4gIH1cblxufVxuXG4uaW50cm97XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogNXZoO1xuICBsaW5lLWhlaWdodDogNS41dmg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC8qIGNvbG9yOiAgI2ZmZmM5OTsgKi9cbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1hZ2VzL21vdmVtZW50L19NR18wNzgyLmpwZ1wiKTsgKi9cbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1hZ2VzL09PTjQ0OTguanBnXCIpOyAqL1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWFnZXMvX09PTjQ1MTcuanBnXCIpOyAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9wcm9qLWJyZWFrd2FsbDQvNHdhbGwyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmludHJvIGF7IFxuICAvKiBjb2xvcjogICNmN2Y2ZDg7ICovXG4gIC8qIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7ICovXG4gIGNvbG9yOiAjZTZjNDk4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5pbnRybyBhOmhvdmVyeyBcbiAgLyogY29sb3I6ICB3aGl0ZTsgKi9cbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnRyby1uYXYgaW1nIHtcbiAgaGVpZ2h0OiAyMHZoO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG59XG4uaW50cm8tbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvIDAlO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7ICovXG4gIFxufSJdfQ== */"] });
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
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function NavComponent_div_0_Template_img_contextmenu_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.rightClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_0_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.toggleNav(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Reem");
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
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "nav", "navtop"], [1, "icons"], [1, "logo"], ["src", "../assets/logo/trans-notext.png", "routerLink", "", "draggable", "false", 3, "contextmenu"], [1, "menu"], ["id", "menu", 1, "material-icons", 3, "click"], [1, "nav-tabs"], ["routerLink", "portfolio", "routerLinkActive", "active", 1, "tab"], [1, "dropdown"], ["routerLink", "work", "routerLinkActive", "active", 1, "tab"], [1, "dropdown-content"], ["routerLinkActive", "active", 1, "tab", 3, "routerLink", "routerLinkActiveOptions"], ["droptabs", ""], ["routerLinkActive", "active", 1, "tab", 3, "routerLink"], ["routerLink", "/work", "routerLinkActive", "active", 1, "tab"], ["routerLink", "projects", "routerLinkActive", "active", 1, "tab"], ["routerLink", "/projects", "routerLinkActive", "active", 1, "tab"], ["routerLink", "about", "routerLinkActive", "active", 1, "tab"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavComponent_div_0_Template, 51, 18, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.onLanding());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["@media only screen and (max-width: 600px) {\n  .nav-tabs[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    position: -webkit-sticky !important;\n    position: sticky !important;\n    left: 2vw !important;\n  }\n\n  .menu[_ngcontent-%COMP%] {\n    position: -webkit-sticky !important;\n    position: sticky !important;\n    left: 87vw !important;\n    display: flex !important;\n    height: 10vh !important;\n    width: 8vw !important;\n  }\n\n  #menu[_ngcontent-%COMP%], #close[_ngcontent-%COMP%] {\n    margin: auto 0 !important;\n    font-size: 8vw !important;\n  }\n\n  #menu[_ngcontent-%COMP%]:hover, #close[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n  }\n\n  .nav[_ngcontent-%COMP%] {display: block !important;}\n  .nav.responsive[_ngcontent-%COMP%] {\n    display: block !important;\n    background-color: rgba(20, 3, 3, 1) !important;\n    height: 100% !important; \n  }\n  .nav.responsive[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]{height: 10% !important;}\n\n  .nav.responsive[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 100vw !important;\n  }\n\n  .nav.responsive[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n    display: flex !important;\n    width: 100vw !important;\n    align-items: center;\n    justify-content: center;\n    font-size: 3vh;\n  }\n\n  .nav.responsive[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  .nav.responsive[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%] {\n    display: block !important;\n    position: relative !important;\n  }\n\n  .nav.responsive[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{\n    font-size: 2vh !important;\n  }\n  \n}\n\n.nav[_ngcontent-%COMP%]{\n  position: fixed;\n  display: flex;\n  z-index: 1;\n  width: 100%;\n  height: 10%;\n  background-color: rgba(20, 3, 3, 0.5);\n  \n  border: 1px solid black;\n}\n\n.icons[_ngcontent-%COMP%] {\n  display: flex; \n  height: 100%;\n}\n\n.menu[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  height: 100%;\n  width: auto;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\n  cursor: pointer;\n}\n\n.nav-tabs[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n\n.tab[_ngcontent-%COMP%] {\n  padding: 1vh 1vw;\n  text-decoration: none;\n  color: #e6c498;\n  font-weight: 300;\n}\n\n.tab[_ngcontent-%COMP%]:hover, .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  font-weight: bold;\n}\n\n.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  min-width: 160px;\n  padding-top: 1vh;\n  z-index: 1;\n  background-color:rgba(20, 3, 3, 0.5);\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {display: block;}\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {font-weight: bold;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsbUNBQTJCO0lBQTNCLDJCQUEyQjtJQUMzQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxtQ0FBMkI7SUFBM0IsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBLE1BQU0seUJBQXlCLENBQUM7RUFDaEM7SUFDRSx5QkFBeUI7SUFDekIsOENBQThDO0lBQzlDLHVCQUF1QjtFQUN6QjtFQUNBLHVCQUF1QixzQkFBc0IsQ0FBQzs7RUFFOUM7SUFDRSx5QkFBeUI7SUFDekIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUdBLGtFQUFrRTs7QUFDbEU7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBLHlDQUF5Qzs7QUFDekM7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG9DQUFvQztBQUN0Qzs7QUFFQSw4QkFBOEI7O0FBQzlCO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSw0Q0FBNEM7O0FBQzVDLGdFQUFnRTs7QUFFaEUsb0NBQW9DOztBQUNwQyxtQ0FBbUMsY0FBYyxDQUFDOztBQUVsRCwwRkFBMEY7O0FBQzFGLDBCQUEwQixpQkFBaUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubmF2LXRhYnMge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMnZ3ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWVudSB7XG4gICAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDg3dncgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMHZoICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDh2dyAhaW1wb3J0YW50O1xuICB9XG5cbiAgI21lbnUsICNjbG9zZSB7XG4gICAgbWFyZ2luOiBhdXRvIDAgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDh2dyAhaW1wb3J0YW50O1xuICB9XG5cbiAgI21lbnU6aG92ZXIsICNjbG9zZTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAubmF2IHtkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O31cbiAgLm5hdi5yZXNwb25zaXZlIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDMsIDMsIDEpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7IFxuICB9XG4gIC5uYXYucmVzcG9uc2l2ZSAuaWNvbnN7aGVpZ2h0OiAxMCUgIWltcG9ydGFudDt9XG5cbiAgLm5hdi5yZXNwb25zaXZlIC5uYXYtdGFicyB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYXYucmVzcG9uc2l2ZSAubmF2LXRhYnMgLnRhYiB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzdmg7XG4gIH1cblxuICAubmF2LnJlc3BvbnNpdmUgLm5hdi10YWJzIC5kcm9wZG93biB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYXYucmVzcG9uc2l2ZSAubmF2LXRhYnMgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmF2LnJlc3BvbnNpdmUgLm5hdi10YWJzIC5kcm9wZG93bi1jb250ZW50IC50YWJ7XG4gICAgZm9udC1zaXplOiAydmggIWltcG9ydGFudDtcbiAgfVxuICBcbn1cblxuLm5hdntcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDMsIDMsIDAuNSk7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmljb25zIHtcbiAgZGlzcGxheTogZmxleDsgXG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvZ28gaW1ne1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ubG9nbyBpbWc6aG92ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi10YWJzIHtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG5cbi50YWIge1xuICBwYWRkaW5nOiAxdmggMXZ3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZTZjNDk4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4udGFiOmhvdmVyLCAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cblxuLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMCwgMywgMywgMC41KTtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cbi8qIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6cmdiKDEyLCA0LCA0KTt9ICovXG5cbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxuXG4vKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGRyb3Bkb3duIGJ1dHRvbiB3aGVuIHRoZSBkcm9wZG93biBjb250ZW50IGlzIHNob3duICovXG4uZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge2ZvbnQtd2VpZ2h0OiBib2xkO30iXX0= */"] });
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
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function PanelComponent_div_9_Template_img_contextmenu_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.rightClick(); });
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
    const member_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, member_r33.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r32.panel.path + member_r33.cover.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", member_r33.cover.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r33.cover.date, "");
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
            { name: "1.jpg", date: "", title: "", desc: "", models: [] }
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
            { name: "ae19-1.jpg", date: "", title: "", desc: "", models: [] },
            { name: "ae19-3.jpg", date: "", title: "", desc: "", models: [] },
            { name: "ae19-4.jpg", date: "", title: "", desc: "", models: [] },
            { name: "ae19-5.jpg", date: "", title: "", desc: "", models: [] },
            { name: "ae19-6.jpg", date: "", title: "", desc: "", models: [] },
            { name: "ae19-7.jpg", date: "", title: "", desc: "", models: [] }
        ]
    },
    {
        id: "event-urmcbbq",
        title: "Events",
        path: "../assets/images/work/events/urmcbbq/",
        images: [
            { name: "urmcbbq2.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq3.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq4.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq5.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq6.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq7.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq8.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq9.jpg", date: "", title: "", desc: "", models: [] },
            { name: "urmcbbq10.jpg", date: "", title: "", desc: "", models: [] }
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
            { name: "bloth19-7.jpg", date: "", title: "", desc: "", models: [] },
            { name: "bloth19-8.jpg", date: "", title: "", desc: "", models: [] },
            { name: "bloth19-9.jpg", date: "", title: "", desc: "", models: [] },
            { name: "bloth19-10.jpg", date: "", title: "", desc: "", models: [] }
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