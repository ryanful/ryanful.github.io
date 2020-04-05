function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["about"]],
      decls: 34,
      vars: 0,
      consts: [[1, "about", "page"], ["id", "about-pic"], ["id", "about-text"], ["href", "https://instagram.com/abeikuyanful", "target", "_blank"], ["href", "https://www.github.com/ryanful", "target", "_blank"], ["href", "../assets/RaheelYanful-Resume.pdf", "target", "_blank"], ["href", "https://www.linkedin.com/in/ryanful/", "target", "_blank"], ["id", "about-fav"], ["src", "../assets/images/self/OON2293.jpg", 2, "border-radius", "5%"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Raheel Abeiku Yanful");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "photographer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "programmer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Hi! My name is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Raheel Abeiku Yanful");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ". I am currently a junior at Cornell University pursing a Computer Science degee. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " I've been heavily involved with the art of photography for 4+ years now. Some of my best work comes unplanned and unexpected, after long periods feeling uninspired. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " IG: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "@abeikuyanful");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "rah.captures@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "My Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Link with me!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".about[_ngcontent-%COMP%]{\n  height: 100%;\n}\n#about-pic[_ngcontent-%COMP%] {\n  \n  \n  background-image: url('/../assets/images/self/OON2282.jpg'); \n\n  \n  height:100%;\n  width: 100%;\n  float: left;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 100%;\n\n}\n#about-text[_ngcontent-%COMP%] {\n  \n  \n  min-height:80%;\n  width: 49%;\n  float: left;\n  \n  padding-left: 5%;\n  padding-top: 10%;\n  background-size: 100%;\n}\n#about-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e8d8c3;\n}\n#about-fav[_ngcontent-%COMP%] {\n  \n  \n  max-height:60%;\n  width: 35%;\n  float: left;\n  \n  padding-left: 5%;\n  padding-top: 10%;\n  background-size: 100%;\n}\n#about-fav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\nwidth: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrREFBa0Q7RUFDbEQsMkRBQTJEOztFQUUzRCwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIscUJBQXFCOztBQUV2QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBRUE7QUFDQSxVQUFVO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYWJvdXR7XG4gIGhlaWdodDogMTAwJTtcbn1cbiNhYm91dC1waWMge1xuICAvKiBUaGUgaW1hZ2UgdXNlZCovXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltYWdlcy9JTUdfMTg1Mi5qcGdcIik7ICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLy4uL2Fzc2V0cy9pbWFnZXMvc2VsZi9PT04yMjgyLmpwZycpOyBcblxuICAvKiBTZXQgYSBzcGVjaWZpYyBoZWlnaHQgKi9cbiAgaGVpZ2h0OjEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG5cbn1cblxuI2Fib3V0LXRleHQge1xuICAvKiBUaGUgaW1hZ2UgdXNlZCovXG4gIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xuICBtaW4taGVpZ2h0OjgwJTtcbiAgd2lkdGg6IDQ5JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIC8qYm9yZGVyOiAxcHggc29saWQgYmxhY2s7Ki9cbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4jYWJvdXQtdGV4dCBhIHtcbiAgY29sb3I6ICNlOGQ4YzM7XG59XG5cbiNhYm91dC1mYXYge1xuICAvKiBUaGUgaW1hZ2UgdXNlZCovXG4gIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xuICBtYXgtaGVpZ2h0OjYwJTtcbiAgd2lkdGg6IDM1JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIC8qYm9yZGVyOiAxcHggc29saWQgYmxhY2s7Ki9cbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4jYWJvdXQtZmF2IGltZ3tcbndpZHRoOiA5MCU7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var _work_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./work/work.component */
    "./src/app/work/work.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./gallery-page/gallery-page.component */
    "./src/app/gallery-page/gallery-page.component.ts");
    /* harmony import */


    var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./gallery/gallery.component */
    "./src/app/gallery/gallery.component.ts");
    /* harmony import */


    var _panel_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./panel/panel.component */
    "./src/app/panel/panel.component.ts");

    var routes = [{
      path: '',
      component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]
    }, {
      path: 'work',
      component: _work_work_component__WEBPACK_IMPORTED_MODULE_3__["WorkComponent"]
    }, {
      path: 'projects',
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
    }, {
      path: 'portfolio',
      component: _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_6__["GalleryPageComponent"]
    }, {
      path: 'gallery/:id',
      component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"]
    }, {
      path: 'panel/:id',
      component: _panel_panel_component__WEBPACK_IMPORTED_MODULE_8__["PanelComponent"]
    }, {
      path: 'resume',
      redirectTo: '../assets/RaheelYanful-Resume.pdf'
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Raheel\'s Portfolio';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var _work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./work/work.component */
    "./src/app/work/work.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./gallery-page/gallery-page.component */
    "./src/app/gallery-page/gallery-page.component.ts");
    /* harmony import */


    var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./gallery/gallery.component */
    "./src/app/gallery/gallery.component.ts");
    /* harmony import */


    var _images_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./images.service */
    "./src/app/images.service.ts");
    /* harmony import */


    var _panel_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./panel/panel.component */
    "./src/app/panel/panel.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_images_service__WEBPACK_IMPORTED_MODULE_11__["ImagesService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_9__["GalleryPageComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["GalleryComponent"], _panel_panel_component__WEBPACK_IMPORTED_MODULE_12__["PanelComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_9__["GalleryPageComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["GalleryComponent"], _panel_panel_component__WEBPACK_IMPORTED_MODULE_12__["PanelComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [_images_service__WEBPACK_IMPORTED_MODULE_11__["ImagesService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/gallery-page/gallery-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/gallery-page/gallery-page.component.ts ***!
    \********************************************************/

  /*! exports provided: GalleryPageComponent */

  /***/
  function srcAppGalleryPageGalleryPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryPageComponent", function () {
      return GalleryPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../gallery/gallery.component */
    "./src/app/gallery/gallery.component.ts");

    var GalleryPageComponent = /*#__PURE__*/function () {
      function GalleryPageComponent() {
        _classCallCheck(this, GalleryPageComponent);
      }

      _createClass(GalleryPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GalleryPageComponent;
    }();

    GalleryPageComponent.ɵfac = function GalleryPageComponent_Factory(t) {
      return new (t || GalleryPageComponent)();
    };

    GalleryPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleryPageComponent,
      selectors: [["gallery-page"]],
      decls: 2,
      vars: 0,
      consts: [[1, "page"], ["name", "portfolio"]],
      template: function GalleryPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "gallery", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnktcGFnZS9nYWxsZXJ5LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'gallery-page',
          templateUrl: './gallery-page.component.html',
          styleUrls: ['./gallery-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/gallery/gallery.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/gallery/gallery.component.ts ***!
    \**********************************************/

  /*! exports provided: GalleryComponent */

  /***/
  function srcAppGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../images.service */
    "./src/app/images.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GalleryComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pic_r5 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.path + pic_r5.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var GalleryComponent = /*#__PURE__*/function () {
      function GalleryComponent(imagesService, route) {
        _classCallCheck(this, GalleryComponent);

        this.imagesService = imagesService;
        this.route = route;
      }

      _createClass(GalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.subscribe(function (params) {
            var id;

            if (_this.id === undefined) {
              id = params.get("id");
            } else {
              id = _this.id;
            }

            console.log("gallery id check:", id, _this.id);

            var photos = _this.imagesService.getPhotos(id);

            _this.path = photos.path;
            _this.images = photos.images;
          }); //let photos = this.imagesService.getPhotos(this.id);
          //this.path = photos.path;
          //this.images = photos.images;
        }
      }]);

      return GalleryComponent;
    }();

    GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
      return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleryComponent,
      selectors: [["gallery"]],
      inputs: {
        id: ["name", "id"]
      },
      decls: 2,
      vars: 1,
      consts: [[1, "gallery-row"], ["class", "image", 4, "ngFor", "ngForOf"], [1, "image"], [3, "src"]],
      template: function GalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".gallery-row[_ngcontent-%COMP%] {\n  \n}\n\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 49%;\n  margin-top: -1vh;\n}\n\n.image[_ngcontent-%COMP%] {\n  padding: 3px;\n  margin: 0;\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeS1yb3cge1xuICBcbn1cblxuLmltYWdlIGltZyB7XG4gIHdpZHRoOiA0OSU7XG4gIG1hcmdpbi10b3A6IC0xdmg7XG59XG5cbi5pbWFnZSB7XG4gIHBhZGRpbmc6IDNweDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'gallery',
          templateUrl: './gallery.component.html',
          styleUrls: ['./gallery.component.css']
        }]
      }], function () {
        return [{
          type: _images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['name']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/images.service.ts":
  /*!***********************************!*\
    !*** ./src/app/images.service.ts ***!
    \***********************************/

  /*! exports provided: ImagesService */

  /***/
  function srcAppImagesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesService", function () {
      return ImagesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _photo_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./photo-info */
    "./src/app/photo-info.ts");

    var ImagesService = /*#__PURE__*/function () {
      function ImagesService() {
        _classCallCheck(this, ImagesService);
      }

      _createClass(ImagesService, [{
        key: "getPhotos",
        value: function getPhotos(id) {
          //potential take in text file with info (folder path/pics) and parse 
          console.log(id);

          var pgroup = _photo_info__WEBPACK_IMPORTED_MODULE_1__["PHOTOGROUPS"].find(function (group) {
            return group.id === id;
          });

          return pgroup;
        }
      }, {
        key: "getWorkPanels",
        value: function getWorkPanels() {
          return _photo_info__WEBPACK_IMPORTED_MODULE_1__["WORKPANELS"];
        }
      }, {
        key: "getProjectPanels",
        value: function getProjectPanels() {
          return _photo_info__WEBPACK_IMPORTED_MODULE_1__["PROJECTPANELS"];
        }
      }]);

      return ImagesService;
    }();

    ImagesService.ɵfac = function ImagesService_Factory(t) {
      return new (t || ImagesService)();
    };

    ImagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ImagesService,
      factory: ImagesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing/landing.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/landing/landing.component.ts ***!
    \**********************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LandingComponent = /*#__PURE__*/function () {
      function LandingComponent() {
        _classCallCheck(this, LandingComponent);
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingComponent;
    }();

    LandingComponent.ɵfac = function LandingComponent_Factory(t) {
      return new (t || LandingComponent)();
    };

    LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["landing"]],
      decls: 11,
      vars: 0,
      consts: [[1, "intro"], [1, "intro-nav"], ["src", "../assets/logo/trans.png"], [2, "height", "100%", "margin", "auto"], ["routerLink", "work"], ["routerLink", "portfolio"], [1, "intro-img"]],
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".intro[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n  height: 100%;\n  font-size: 5vh;\n  line-height: 5.5vh;\n  font-weight: 300;\n  \n  \n  \n  \n  background-image: url(\"/../assets/images/OON4510.jpg\");\n  background-size: cover;\n}\n\n.intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{ \n  \n  \n  color: #e8d8c3;\n  text-decoration: none;\n}\n\n.intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{ \n  \n  font-weight: bold;\n}\n\n.intro-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20vh;\n  \n}\n\n.intro-nav[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto 0%;\n  \n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsMkRBQTJEO0VBQzNELGlEQUFpRDtFQUNqRCxrREFBa0Q7RUFDbEQsc0RBQXNEO0VBQ3RELHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixpQ0FBaUM7O0FBRW5DIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm97XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogNXZoO1xuICBsaW5lLWhlaWdodDogNS41dmg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC8qIGNvbG9yOiAgI2ZmZmM5OTsgKi9cbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1hZ2VzL21vdmVtZW50L19NR18wNzgyLmpwZ1wiKTsgKi9cbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1hZ2VzL09PTjQ0OTguanBnXCIpOyAqL1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWFnZXMvX09PTjQ1MTcuanBnXCIpOyAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vYXNzZXRzL2ltYWdlcy9PT040NTEwLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmludHJvIGF7IFxuICAvKiBjb2xvcjogICNmN2Y2ZDg7ICovXG4gIC8qIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7ICovXG4gIGNvbG9yOiAjZThkOGMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5pbnRybyBhOmhvdmVyeyBcbiAgLyogY29sb3I6ICB3aGl0ZTsgKi9cbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnRyby1uYXYgaW1nIHtcbiAgaGVpZ2h0OiAyMHZoO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG59XG4uaW50cm8tbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvIDAlO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7ICovXG4gIFxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'landing',
          templateUrl: './landing.component.html',
          styleUrls: ['./landing.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/panel", "work-grad"];
    };

    var _c1 = function _c1() {
      return ["/panel", "work-events"];
    };

    var _c2 = function _c2() {
      return ["/panel", "work-hs"];
    };

    var _c3 = function _c3() {
      return ["/gallery", "proj-risk"];
    };

    var _c4 = function _c4() {
      return ["/gallery", "proj-chi"];
    };

    var _c5 = function _c5() {
      return ["/gallery", "proj-syd"];
    };

    function NavComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "gallery");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "work");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Graduations");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Events");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Headshots");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "all");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " projects ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Reem");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Chioma");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sydney");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "about");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
      }
    }

    var NavComponent = /*#__PURE__*/function () {
      function NavComponent(router) {
        _classCallCheck(this, NavComponent);

        this.router = router;
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLanding",
        value: function onLanding() {
          console.log(this.router.url);
          return this.router.url === '/';
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "nav", "navtop"], [1, "logo"], ["src", "../assets/logo/trans.png", "routerLink", ""], [1, "nav-tabs"], ["routerLink", "portfolio", "routerLinkActive", "active", 1, "tab"], [1, "dropdown"], ["routerLink", "work", "routerLinkActive", "active", 1, "tab"], [1, "dropdown-content"], [3, "routerLink"], ["routerLink", "/work"], ["routerLink", "projects", "routerLinkActive", "active", 1, "tab"], ["routerLink", "about", "routerLinkActive", "active", 1, "tab"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavComponent_div_0_Template, 31, 12, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.onLanding());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".nav[_ngcontent-%COMP%]{\n  position: fixed;\n  display: flex;\n  width: 100%;\n  height: 10vh;\n  background-color: rgba(20, 3, 3, 0.5);\n  \n  border: 1px solid black;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  height: 10vh;\n}\n\n.nav-tabs[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n\n.tab[_ngcontent-%COMP%], .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1vh 1vw;\n  text-decoration: none;\n  \n  color: #e8d8c3;\n  font-weight: 300;\n}\n\n.tab[_ngcontent-%COMP%]:hover, .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  font-weight: bold;\n}\n\n.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  min-width: 160px;\n  z-index: 1;\n  background-color:rgba(20, 3, 3, 0.5);\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {display: block;}\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {font-weight: bold;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjs7RUFFckIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBR0Esa0VBQWtFOztBQUNsRTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUEseUNBQXlDOztBQUN6QztFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixvQ0FBb0M7QUFDdEM7O0FBRUEsOEJBQThCOztBQUM5QjtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsNENBQTRDOztBQUM1QyxnRUFBZ0U7O0FBRWhFLG9DQUFvQzs7QUFDcEMsbUNBQW1DLGNBQWMsQ0FBQzs7QUFFbEQsMEZBQTBGOztBQUMxRiwwQkFBMEIsaUJBQWlCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLm5hdntcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAzLCAzLCAwLjUpO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5sb2dvIGltZ3tcbiAgaGVpZ2h0OiAxMHZoO1xufVxuXG4ubmF2LXRhYnMge1xuICBtYXJnaW46IGF1dG8gMDtcbn1cblxuLnRhYiwgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIHBhZGRpbmc6IDF2aCAxdnc7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgXG4gIGNvbG9yOiAjZThkOGMzO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4udGFiOmhvdmVyLCAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cblxuLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMCwgMywgMywgMC41KTtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cbi8qIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6cmdiKDEyLCA0LCA0KTt9ICovXG5cbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxuXG4vKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGRyb3Bkb3duIGJ1dHRvbiB3aGVuIHRoZSBkcm9wZG93biBjb250ZW50IGlzIHNob3duICovXG4uZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge2ZvbnQtd2VpZ2h0OiBib2xkO30iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/panel/panel.component.ts":
  /*!******************************************!*\
    !*** ./src/app/panel/panel.component.ts ***!
    \******************************************/

  /*! exports provided: PanelComponent */

  /***/
  function srcAppPanelPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelComponent", function () {
      return PanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../images.service */
    "./src/app/images.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1) {
      return ["/gallery", a1];
    };

    function PanelComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var member_r7 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, member_r7.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r6.panel.path + member_r7.cover.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", member_r7.cover.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r7.cover.date, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r7.cover.desc);
      }
    }

    var PanelComponent = /*#__PURE__*/function () {
      function PanelComponent(imagesService, route) {
        _classCallCheck(this, PanelComponent);

        this.imagesService = imagesService;
        this.route = route;
        this.title = "Graduation"; //add to photo-info.ts
      }

      _createClass(PanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          /*console.log("panelid" + this.id);
          let photos = this.imagesService.getPhotos(this.id);
          this.title = photos.title;
          this.path = photos.path;
          console.log("path" + this.path);
          this.images = photos.images;*/
          this.route.paramMap.subscribe(function (params) {
            if (_this2.panel === undefined) {
              var id = params.get("id");
              _this2.panel = _this2.imagesService.getWorkPanels().find(function (d) {
                return d.id === id;
              });
            }
          });
        }
      }]);

      return PanelComponent;
    }();

    PanelComponent.ɵfac = function PanelComponent_Factory(t) {
      return new (t || PanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PanelComponent,
      selectors: [["panel"]],
      inputs: {
        panel: "panel"
      },
      decls: 5,
      vars: 2,
      consts: [[1, "panel"], [1, "panel-images"], ["class", "image", 4, "ngFor", "ngForOf"], [1, "image"], [3, "routerLink"], [3, "src"], [1, "panel-text"]],
      template: function PanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PanelComponent_div_4_Template, 10, 7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.panel.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panel.members);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".panel[_ngcontent-%COMP%] {\n  padding: 1vh 5%;\n}\n.panel-images[_ngcontent-%COMP%]{\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  \n  min-height: 80vh;\n}\n.panel-images[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e8d8c3;\n  text-decoration: none;\n}\n.panel-text[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10%;\n}\n.image[_ngcontent-%COMP%] {\n  display: inline-block;\n  \n  height: 100%;\n  margin-right: 1vw;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 90%;\n  max-height: 72vh;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9wYW5lbC9wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsIHtcbiAgcGFkZGluZzogMXZoIDUlO1xufVxuLnBhbmVsLWltYWdlc3tcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xuICBtaW4taGVpZ2h0OiA4MHZoO1xufVxuLnBhbmVsLWltYWdlcyBhIHtcbiAgY29sb3I6ICNlOGQ4YzM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnBhbmVsLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMCU7XG59XG4uaW1hZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8qIGNvbG9yOiB3aGl0ZTsgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDF2dztcbn1cbi5pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDkwJTtcbiAgbWF4LWhlaWdodDogNzJ2aDtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'panel',
          templateUrl: './panel.component.html',
          styleUrls: ['./panel.component.css']
        }]
      }], function () {
        return [{
          type: _images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, {
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['panel']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/photo-info.ts":
  /*!*******************************!*\
    !*** ./src/app/photo-info.ts ***!
    \*******************************/

  /*! exports provided: PHOTOGROUPS, PanelMember, Members, Panel, WORKPANELS, PROJECTPANELS */

  /***/
  function srcAppPhotoInfoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PHOTOGROUPS", function () {
      return PHOTOGROUPS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelMember", function () {
      return PanelMember;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Members", function () {
      return Members;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Panel", function () {
      return Panel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WORKPANELS", function () {
      return WORKPANELS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PROJECTPANELS", function () {
      return PROJECTPANELS;
    }); //for galleries


    var PHOTOGROUPS = [{
      id: "portfolio",
      title: "Gallery",
      path: "../assets/images/gallery/MG_",
      images: [{
        name: "rel753.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "rel737.jpg",
        date: "",
        title: "",
        desc: ""
      }, // { name: "rel607.jpg", date: "", title: "", desc: "" },
      {
        name: "rel619.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "rel624.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "5.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "9.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "57.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "19-2.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "291.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "285.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "93.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "97.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "53.jpg",
        date: "",
        title: "",
        desc: ""
      }]
    }, {
      id: "grad-ab",
      title: "Abraham's Graduation",
      path: "../assets/images/work/grad/",
      images: [{
        name: "ab141.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ab/ab987.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ab/ab142.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ab/ab99.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ab/ab110.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ab/ab805.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ab/ab922.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ab/ab866.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ab/ab916.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ab/ab881.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      } // { name: "ab/ab909.jpg", date: "May 2019", title: "", desc: "" },
      ]
    }, {
      id: "grad-sof",
      title: "Sofya's Graduation",
      path: "../assets/images/work/grad/",
      images: [{
        name: "sof588.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "sof/sof537.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "sof/sof612.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "sof/sof696.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "sof/sof583.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "sof/sof594.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "sof/sof741.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "sof/sof763.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "sof/sof604.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "sof/sof614.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }]
    }, {
      id: "grad-ric",
      title: "Ricardo's Graduation",
      path: "../assets/images/work/grad/",
      images: [{
        name: "ric982.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ric/ric111-2.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ric/ric26.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ric/ric960.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ric/ric112.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ric/ric963.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ric/ric101.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ric/ric61.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ric/ric106.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "ric/ric120.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }]
    }, {
      id: "grad-alex",
      title: "Sofya's Graduation",
      path: "../assets/images/work/grad/alex/",
      images: [{
        name: "../alex295.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }]
    }, {
      id: "grad-lyd",
      title: "Sofya's Graduation",
      path: "../assets/images/work/grad/",
      images: [{
        name: "lyd/lyd162.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "lyd/lyd194.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "lyd/lyd200.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "lyd/lyd232.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "lyd/lyd236.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }, {
        name: "lyd/lyd282.jpg",
        date: "May 2019",
        title: "",
        desc: ""
      }]
    }, {
      id: "event-vap",
      title: "Events",
      path: "../assets/images/work/events/vap/",
      images: [{
        name: "vap915.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "vap930.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "vap921.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "vap988.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "vap35.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "vap958.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "vap967.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "vap997.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "vap971.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "vap989.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "vap60.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "vap67.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "vap71.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "vap44.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "vap48.jpg",
        date: "Oct 2019",
        title: "Voices and Perspectives",
        desc: ""
      }, {
        name: "vap973.jpg",
        date: "",
        title: "",
        desc: ""
      }]
    }, {
      id: "event-pep",
      title: "Events",
      path: "../assets/images/work/events/pepnc/",
      images: [{
        name: "pepnc994.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "pepnc424.jpg",
        date: "",
        title: "",
        desc: ""
      }, //{ name: "pepnc448.jpg", date: "", title: "", desc: "" },
      {
        name: "pepnc157.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "pepnc214.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "pepnc457.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "pepnc445.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "pepnc347.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "pepnc288.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "pepnc486.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "pepnc532.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "pepnc131.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "pepnc242.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "pepnc52.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "pepnc81.jpg",
        date: "",
        title: "",
        desc: ""
      }]
    }, {
      id: "work-hs",
      title: "Headshots",
      path: "../assets/images/work/headshots/",
      images: [{
        name: "vap913.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "pepnc992.jpg",
        date: "",
        title: "",
        desc: ""
      }]
    }, {
      id: "proj-risk",
      title: "Photoseries",
      path: "../assets/images/projects/proj-risk/",
      images: [{
        name: "risk842.jpg",
        date: "Jun 2019",
        title: "",
        desc: ""
      }, {
        name: "risk841.jpg",
        date: "Jun 2019",
        title: "",
        desc: ""
      }, {
        name: "risk825.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "risk823.jpg",
        date: "",
        title: "",
        desc: ""
      }]
    }, {
      id: "proj-syd",
      title: "Photoseries - Sydney",
      path: "../assets/images/projects/proj-syd/",
      images: [{
        name: "syd24.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "syd16.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "syd29.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "syd30.jpg",
        date: "",
        title: "",
        desc: ""
      }]
    }, {
      id: "proj-chi",
      title: "Photoseries - Chioma",
      path: "../assets/images/projects/proj-chi/",
      images: [{
        name: "../THEONE.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "chi862.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "chi849.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "chi860.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "chi856.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "syd29.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "syd30.jpg",
        date: "",
        title: "",
        desc: ""
      }]
    }, {
      id: "proj-albums",
      title: "Photoseries - Albums Rahmaster",
      path: "../assets/images/projects/proj-albums/",
      images: [{
        name: "onelove.png",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "sol3.png",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "blond.png",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "4eva.png",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "szer.png",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "sonder1.png",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "blkswn.png",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "CHIEF.png",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "angeloh.png",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "sonderinto1.png",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "MOONSHOES.png",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "bloodorange.png",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "../bak.png",
        date: "",
        title: "",
        desc: ""
      }]
    }, {
      id: "proj-uncanny",
      title: "Photoseries - Uncanny",
      path: "../assets/images/projects/proj-uncanny/",
      images: [{
        name: "uncanny753-2.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "uncanny753-2.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "uncanny750-2.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "uncanny750-2.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "uncanny758.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "uncanny762.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "uncanny777.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "uncanny650.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "uncanny763.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "uncanny768.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "uncanny775.jpg",
        date: "",
        title: "",
        desc: ""
      }, {
        name: "uncanny766.jpg",
        date: "",
        title: "",
        desc: ""
      }]
    }];

    var PanelMember = function PanelMember() {
      _classCallCheck(this, PanelMember);
    };

    var Members = function Members() {
      _classCallCheck(this, Members);
    };

    var Panel = function Panel() {
      _classCallCheck(this, Panel);
    }; //panels to be shown on work page
    //string corresponds to id of a PHOTOGROUP


    var WORKPANELS = [{
      id: "work-grad",
      title: "Graduations",
      path: "../assets/images/work/grad/",
      members: [{
        cover: {
          name: "ab141.jpg",
          date: "May 2019",
          title: "Abraham",
          desc: ""
        },
        id: "grad-ab"
      }, {
        cover: {
          name: "sof588.jpg",
          date: "May 2019",
          title: "Sofya",
          desc: ""
        },
        id: "grad-sof"
      }, {
        cover: {
          name: "ric982.jpg",
          date: "May 2019",
          title: "Ricardo",
          desc: ""
        },
        id: "grad-ric"
      }, {
        cover: {
          name: "alex295.jpg",
          date: "May 2019",
          title: "Alexandria",
          desc: ""
        },
        id: "grad-alex"
      }, {
        cover: {
          name: "lyd169.jpg",
          date: "May 2018",
          title: "Lydia",
          desc: ""
        },
        id: "grad-lyd"
      }]
    }, {
      id: "work-events",
      title: "Events",
      path: "../assets/images/work/events/",
      members: [{
        cover: {
          name: "vap913.jpg",
          date: "Oct 2019",
          title: "Voices and Perspectives",
          desc: ""
        },
        id: "event-vap"
      }, {
        cover: {
          name: "pepnc992.jpg",
          date: "May 2018",
          title: "Peprah Naming Ceremony",
          desc: ""
        },
        id: "event-pep"
      }]
    } // "work-events", 
    // "work-hs"
    //, "work-orgs", "work-brands", "work-mags"
    ]; //panels to be shown on project page
    //string corresponds to id of a PHOTOGROUP

    var PROJECTPANELS = [{
      id: "projects",
      title: "Photoseries",
      path: "../assets/images/projects/",
      members: [{
        cover: {
          name: "risk832.jpg",
          date: "Jun 2019",
          title: "",
          desc: ""
        },
        id: "proj-risk"
      }, {
        cover: {
          name: "bak.png",
          date: "Jun 2019",
          title: "",
          desc: ""
        },
        id: "proj-albums"
      }, {
        cover: {
          name: "flick.png",
          date: "Feb 2020",
          title: "",
          desc: ""
        },
        id: "proj-uncanny"
      }, {
        cover: {
          name: "THEONE.jpg",
          date: "Nov 2019",
          title: "",
          desc: ""
        },
        id: "proj-chi"
      }, {
        cover: {
          name: "syd629.jpg",
          date: "Jan 2020",
          title: "",
          desc: ""
        },
        id: "proj-syd"
      }]
    }];
    /***/
  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../images.service */
    "./src/app/images.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../panel/panel.component */
    "./src/app/panel/panel.component.ts");

    function ProjectsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "panel", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var panel_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panel", panel_r3);
      }
    }

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent(imagesService) {
        _classCallCheck(this, ProjectsComponent);

        this.imagesService = imagesService;
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.panels = this.imagesService.getProjectPanels();
          console.log("HEY", this.panels[0].id);
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"]));
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["projects"]],
      decls: 2,
      vars: 1,
      consts: [[1, "page"], [4, "ngFor", "ngForOf"], [3, "panel"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.css']
        }]
      }], function () {
        return [{
          type: _images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/work/work.component.ts":
  /*!****************************************!*\
    !*** ./src/app/work/work.component.ts ***!
    \****************************************/

  /*! exports provided: WorkComponent */

  /***/
  function srcAppWorkWorkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkComponent", function () {
      return WorkComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../images.service */
    "./src/app/images.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../panel/panel.component */
    "./src/app/panel/panel.component.ts");

    function WorkComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "panel", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var panel_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panel", panel_r1);
      }
    }

    var WorkComponent = /*#__PURE__*/function () {
      function WorkComponent(imagesService) {
        _classCallCheck(this, WorkComponent);

        this.imagesService = imagesService;
      }

      _createClass(WorkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.panels = this.imagesService.getWorkPanels();
          console.log("HEY", this.panels[0].id);
        }
      }]);

      return WorkComponent;
    }();

    WorkComponent.ɵfac = function WorkComponent_Factory(t) {
      return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"]));
    };

    WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkComponent,
      selectors: [["work-page"]],
      decls: 2,
      vars: 1,
      consts: [[1, "page"], [4, "ngFor", "ngForOf"], [3, "panel"]],
      template: function WorkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'work-page',
          templateUrl: './work.component.html',
          styleUrls: ['./work.component.css']
        }]
      }], function () {
        return [{
          type: _images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/raheel/Desktop/lifestylesite/ryanful.github.io/src/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map