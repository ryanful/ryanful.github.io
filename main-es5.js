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

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Raheel\'s Portfolio';
      }

      _createClass(AppComponent, [{
        key: "scrollTop",
        value: function scrollTop(event) {
          document.body.scrollTop = 0;
          document.body.scrollLeft = 0;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [[3, "activate"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "router-outlet", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_1_listener($event) {
            return ctx.scrollTop($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
      decls: 1,
      vars: 0,
      consts: [["name", "portfolio"]],
      template: function GalleryPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gallery", 0);
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

    function GalleryComponent_div_1_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var model_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+ ", model_r9, " +");
      }
    }

    function GalleryComponent_div_1_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pic_r10 = ctx.$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r8.setBackground(false));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r8.path + pic_r10.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function GalleryComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Models:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GalleryComponent_div_1_p_10_Template, 2, 1, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Story:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_1_Template_a_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.scroll("d");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Click on me to see the full series!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_1_Template_a_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.scroll("d");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " expand_more ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function GalleryComponent_div_1_Template_div_scroll_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.checkArrows();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, GalleryComponent_div_1_div_26_Template, 2, 3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_1_Template_i_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.scroll("l");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " chevron_left ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_1_Template_i_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.scroll("r");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " chevron_right ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/../assets/images/projects/", ctx_r4.details.name, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

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
      }
    }

    function GalleryComponent_ng_template_2_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pic_r19 = ctx.$implicit;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r18.path + pic_r19.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function GalleryComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleryComponent_ng_template_2_div_0_Template, 2, 1, "div", 20);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.images);
      }
    }

    var GalleryComponent = /*#__PURE__*/function () {
      function GalleryComponent(imagesService, route) {
        _classCallCheck(this, GalleryComponent);

        this.imagesService = imagesService;
        this.route = route; //images controls

        this.showLeft = false;
        this.showRight = true;
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

            _this.details = _this.imagesService.getProjectDetails(id);
            _this.path = photos.path;
            _this.images = photos.images;
            _this.isProj = id.substr(0, 4) === 'proj';
          }); // document.body.scrollTop = 0;
          //let photos = this.imagesService.getPhotos(this.id);
          //this.path = photos.path;
          //this.images = photos.images;
        }
      }, {
        key: "setBackground",
        value: function setBackground(isOdd) {
          // console.log("we tried");
          // document.querySelector("div.image").setAttribute("background-color", "#e8d8c3");
          return isOdd ? "#e8d8c3" : "none";
        }
      }, {
        key: "scroll",
        value: function scroll(dir) {
          var gallery = document.querySelector("div#proj-gallery");
          var bodyWidth = document.documentElement.clientWidth;
          var moveAmt = .5 * bodyWidth;

          if (dir === 'd') {
            gallery.scrollIntoView({
              behavior: 'smooth'
            });
          } else if (dir === 'l') {
            //accounts for resizing off window with mod offset
            gallery.scrollLeft -= gallery.scrollLeft % moveAmt + moveAmt;
          } else if (dir === 'r') {
            gallery.scrollLeft += moveAmt - gallery.scrollLeft % moveAmt;
          }
        }
      }, {
        key: "checkArrows",
        value: function checkArrows() {
          var gallery = document.querySelector("div#proj-gallery");
          var galleryEnd = (this.images.length - 2) * .5 * gallery.clientWidth;
          this.showLeft = !(gallery.scrollLeft === 0);
          this.showRight = !(gallery.scrollLeft >= galleryEnd);
        }
      }, {
        key: "elementVisible",
        value: function elementVisible(isVis) {
          return isVis ? 'visible' : 'hidden';
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
      decls: 4,
      vars: 2,
      consts: [[1, "page"], [4, "ngIf", "ngIfElse"], ["regularGallery", ""], [1, "details"], ["id", "detail-image"], [3, "src"], [2, "width", "50%", "flex-grow", "1", "background-color", "rgba(12, 4, 4, .8)"], ["id", "detail-text"], [4, "ngFor", "ngForOf"], [1, "link"], [3, "click"], [1, "down"], ["role", "button", "data-slide", "next", "aria-hidden", "true", 1, "material-icons", "expand-more", 3, "click"], ["id", "proj-gallery", 1, "page", 3, "scroll"], ["class", "image", 3, "background-color", 4, "ngFor", "ngForOf"], [1, "controls"], ["role", "button", "data-slide", "next", "aria-hidden", "true", 1, "material-icons", "left-chevron", 3, "click"], [1, "filler"], ["role", "button", "data-slide", "next", "aria-hidden", "true", 1, "material-icons", "right-chevron", 3, "click"], [1, "image"], ["class", "image", 4, "ngFor", "ngForOf"]],
      template: function GalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryComponent_div_1_Template, 33, 9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isProj)("ngIfElse", _r5);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin:auto;\n  max-height: 75%;\n  max-width: 95%;\n}\n\n.image[_ngcontent-%COMP%] {\n  display: inline-grid;\n  vertical-align: middle;\n  width: 50%;\n  height: 90vh;\n  \n  \n  \n  \n}\n\n#proj-gallery[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  width:100%;\n  height: 90vh;\n  scroll-behavior: smooth;\n}\n\n.details[_ngcontent-%COMP%]{\n  height: 90vh;\n  width: 100vw;\n  display: inline-flex;\n  overflow-x: scroll;\n}\n\n#detail-image[_ngcontent-%COMP%] {\n  \n  \n\n  \n  max-width:50%;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  \n  \n\n}\n\n#detail-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height:100%;\n  flex-grow: 1;\n  \n}\n\n#detail-text[_ngcontent-%COMP%] {\n  \n  \n  min-height: 70vh;\n  width: 90%;\n  \n  padding-top: 10vh; \n  padding-left: 10%;\n}\n\np[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.link[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.down[_ngcontent-%COMP%] {\n  \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 10vh;\n  margin:auto;\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: -90vh;\n  height: 90vh;\n  width: 100%;\n}\n\n.expand-more[_ngcontent-%COMP%]:hover, .right-chevron[_ngcontent-%COMP%]:hover, .left-chevron[_ngcontent-%COMP%]:hover{\n  opacity: 1;\n  cursor: pointer;\n}\n\n.expand-more[_ngcontent-%COMP%] {\n  font-size: 10vh;\n  opacity: .5;\n}\n\n.right-chevron[_ngcontent-%COMP%], .left-chevron[_ngcontent-%COMP%] {\n  font-size: 8vw;\n  opacity: .5;\n}\n\n.right-chevron[_ngcontent-%COMP%]{\n  position: -webkit-sticky;\n  position: sticky;\n  margin: auto 0vw;\n  left: 1vw;\n}\n\n.left-chevron[_ngcontent-%COMP%]{\n  position: -webkit-sticky;\n  position: sticky;\n  margin: auto 0vw;\n}\n\n.filler[_ngcontent-%COMP%] {\n  width: 84vw;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNFQUFzRTs7RUFFdEUsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQjsyQkFDeUI7O0FBRTNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZSBpbWcge1xuICBtYXJnaW46YXV0bztcbiAgbWF4LWhlaWdodDogNzUlO1xuICBtYXgtd2lkdGg6IDk1JTtcbn1cblxuLmltYWdlIHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogOTB2aDtcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAvKiBwYWRkaW5nOiAzcHg7ICovXG4gIC8qIG1hcmdpbjogYXV0bzsgKi9cbiAgLyogYm9yZGVyOiAzcHggc29saWQgIzhkNWUyMTsgKi9cbn1cblxuI3Byb2otZ2FsbGVyeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDogOTB2aDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi5kZXRhaWxze1xuICBoZWlnaHQ6IDkwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cbiNkZXRhaWwtaW1hZ2Uge1xuICAvKiBUaGUgaW1hZ2UgdXNlZCovXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLy4uL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvcmlzazgzMi5qcGcnKTsgICovXG5cbiAgLyogU2V0IGEgc3BlY2lmaWMgaGVpZ2h0ICovXG4gIG1heC13aWR0aDo1MCU7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAvKiB3aWR0aDogMzAlOyAqL1xuICAvKiBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xuXG59XG5cbiNkZXRhaWwtaW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OjEwMCU7XG4gIGZsZXgtZ3JvdzogMTtcbiAgLyogd2lkdGg6IDMwJTsgKi9cbn1cblxuI2RldGFpbC10ZXh0IHtcbiAgLyogVGhlIGltYWdlIHVzZWQqL1xuICAvKiBTZXQgYSBzcGVjaWZpYyBoZWlnaHQgKi9cbiAgbWluLWhlaWdodDogNzB2aDtcbiAgd2lkdGg6IDkwJTtcbiAgLypib3JkZXI6IDFweCBzb2xpZCBibGFjazsqL1xuICBwYWRkaW5nLXRvcDogMTB2aDsgXG4gIHBhZGRpbmctbGVmdDogMTAlO1xufVxuXG5wLGgyIHtcbiAgbWFyZ2luOiAwO1xufVxuaDIge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubGluazpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kb3duIHtcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTB2aDtcbiAgbWFyZ2luOmF1dG87XG59XG5cbi5jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IC05MHZoO1xuICBoZWlnaHQ6IDkwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmV4cGFuZC1tb3JlOmhvdmVyLCAucmlnaHQtY2hldnJvbjpob3ZlciwgLmxlZnQtY2hldnJvbjpob3ZlcntcbiAgb3BhY2l0eTogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXhwYW5kLW1vcmUge1xuICBmb250LXNpemU6IDEwdmg7XG4gIG9wYWNpdHk6IC41O1xufVxuXG4ucmlnaHQtY2hldnJvbiwgLmxlZnQtY2hldnJvbiB7XG4gIGZvbnQtc2l6ZTogOHZ3O1xuICBvcGFjaXR5OiAuNTtcbn1cblxuLnJpZ2h0LWNoZXZyb257XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIG1hcmdpbjogYXV0byAwdnc7XG4gIGxlZnQ6IDF2dztcbn1cblxuLmxlZnQtY2hldnJvbntcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbWFyZ2luOiBhdXRvIDB2dztcbn1cblxuLmZpbGxlciB7XG4gIHdpZHRoOiA4NHZ3O1xuICB6LWluZGV4OiAtMTtcbn1cblxuXG5cblxuIl19 */"]
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
      }, {
        key: "getProjectDetails",
        value: function getProjectDetails(id) {
          var found = _photo_info__WEBPACK_IMPORTED_MODULE_1__["PROJECTPANELS"][0].members.find(function (member) {
            return member.id === id;
          });

          return found === undefined ? null : found.cover;
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
      decls: 14,
      vars: 0,
      consts: [[1, "intro"], [1, "intro-nav"], ["src", "../assets/logo/trans-notext.png"], [2, "height", "100%", "margin", "auto"], ["routerLink", "work"], ["routerLink", "portfolio"], ["routerLink", "projects"], [1, "intro-img"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "PROJECTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);

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
      return ["/gallery", "proj-albums"];
    };

    var _c5 = function _c5() {
      return ["/gallery", "proj-uncanny"];
    };

    var _c6 = function _c6() {
      return ["/gallery", "proj-chi"];
    };

    var _c7 = function _c7() {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "One Love");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Uncanny Vibrations");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Chioma");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sydney");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "about");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c6));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c7));
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
      consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "nav", "navtop"], [1, "logo"], ["src", "../assets/logo/trans-notext.png", "routerLink", ""], [1, "nav-tabs"], ["routerLink", "portfolio", "routerLinkActive", "active", 1, "tab"], [1, "dropdown"], ["routerLink", "work", "routerLinkActive", "active", 1, "tab"], [1, "dropdown-content"], [3, "routerLink"], ["routerLink", "/work"], ["routerLink", "projects", "routerLinkActive", "active", 1, "tab"], ["routerLink", "about", "routerLinkActive", "active", 1, "tab"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavComponent_div_0_Template, 35, 16, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.onLanding());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".nav[_ngcontent-%COMP%]{\n  position: fixed;\n  display: flex;\n  z-index: 1;\n  width: 100%;\n  height: 10vh;\n  background-color: rgba(20, 3, 3, 0.5);\n  \n  border: 1px solid black;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  height: 10vh;\n}\n\n.nav-tabs[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n\n.tab[_ngcontent-%COMP%], .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1vh 1vw;\n  text-decoration: none;\n  \n  color: #e8d8c3;\n  font-weight: 300;\n}\n\n.tab[_ngcontent-%COMP%]:hover, .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  font-weight: bold;\n}\n\n.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  min-width: 160px;\n  padding-top: 1vh;\n  z-index: 1;\n  background-color:rgba(20, 3, 3, 0.5);\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {display: block;}\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {font-weight: bold;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7O0VBRXJCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUdBLGtFQUFrRTs7QUFDbEU7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBLHlDQUF5Qzs7QUFDekM7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG9DQUFvQztBQUN0Qzs7QUFFQSw4QkFBOEI7O0FBQzlCO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSw0Q0FBNEM7O0FBQzVDLGdFQUFnRTs7QUFFaEUsb0NBQW9DOztBQUNwQyxtQ0FBbUMsY0FBYyxDQUFDOztBQUVsRCwwRkFBMEY7O0FBQzFGLDBCQUEwQixpQkFBaUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ubmF2e1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDMsIDMsIDAuNSk7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmxvZ28gaW1ne1xuICBoZWlnaHQ6IDEwdmg7XG59XG5cbi5uYXYtdGFicyB7XG4gIG1hcmdpbjogYXV0byAwO1xufVxuXG4udGFiLCAuZHJvcGRvd24tY29udGVudCBhIHtcbiAgcGFkZGluZzogMXZoIDF2dztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBcbiAgY29sb3I6ICNlOGQ4YzM7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi50YWI6aG92ZXIsIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuXG4vKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgcGFkZGluZy10b3A6IDF2aDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIwLCAzLCAzLCAwLjUpO1xufVxuXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xuLyogLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjpyZ2IoMTIsIDQsIDQpO30gKi9cblxuLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtkaXNwbGF5OiBibG9jazt9XG5cbi8qIENoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZHJvcGRvd24gYnV0dG9uIHdoZW4gdGhlIGRyb3Bkb3duIGNvbnRlbnQgaXMgc2hvd24gKi9cbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7Zm9udC13ZWlnaHQ6IGJvbGQ7fSJdfQ== */"]
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

    var _c0 = ["image"];

    var _c1 = function _c1(a1) {
      return ["/gallery", a1];
    };

    function PanelComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var member_r21 = ctx.$implicit;

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, member_r21.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r20.panel.path + member_r21.cover.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", member_r21.cover.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r21.cover.date, "");
      }
    }

    var PanelComponent = /*#__PURE__*/function () {
      function PanelComponent(imagesService, route) {
        _classCallCheck(this, PanelComponent);

        this.imagesService = imagesService;
        this.route = route;
        this.title = "Graduation"; //add to photo-info.ts

        this.index = 0;
        this.showLeft = false;
        this.showRight = true;
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
            var id = params.get("id");

            if (id !== null) {
              // console.log("PANEEL SWITCH");
              _this2.panel = _this2.imagesService.getWorkPanels().find(function (d) {
                return d.id === id;
              });
            }
          });
        }
      }, {
        key: "scroll",
        value: function scroll(dir) {
          var panel = document.querySelector("div#" + this.panel.id + " div.panel-images");
          var viewWidth = panel.clientWidth;
          var moveAmt = .5 * viewWidth;

          if (dir === 'l') {
            panel.scrollLeft -= panel.scrollLeft % moveAmt + moveAmt;
          } else if (dir === 'r') {
            panel.scrollLeft += moveAmt - panel.scrollLeft % moveAmt;
          }
        }
      }, {
        key: "checkArrows",
        value: function checkArrows() {
          var panel = document.querySelector("div#" + this.panel.id + " div.panel-images");
          var panelEnd = panel.scrollWidth - panel.clientWidth;
          this.showLeft = !(panel.scrollLeft === 0);
          this.showRight = !(panel.scrollLeft >= panelEnd);
          console.log("id", this.panel.id, "left", panel.scrollLeft, "scrollend", panelEnd);
        }
      }, {
        key: "elementVisible",
        value: function elementVisible(chev) {
          this.checkArrows();

          if (chev === 'r') {
            return this.showRight ? 'visible' : 'hidden';
          } else if (chev === 'l') {
            return this.showLeft ? 'visible' : 'hidden';
          }
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
      viewQuery: function PanelComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elements = _t);
        }
      },
      inputs: {
        panel: "panel"
      },
      decls: 12,
      vars: 7,
      consts: [[1, "panel", "page", 3, "id"], [1, "prev"], ["id", "left-chevron", "role", "button", "data-slide", "prev", "aria-hidden", "true", 1, "material-icons", 3, "click"], [1, "panel-images", 3, "scroll"], ["class", "image", 4, "ngFor", "ngForOf"], [1, "next"], ["id", "right-chevron", "role", "button", "data-slide", "next", "aria-hidden", "true", 1, "material-icons", 3, "click"], [1, "image"], [3, "routerLink"], ["image", ""], [3, "src"], [1, "panel-text"]],
      template: function PanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_Template_i_click_2_listener() {
            return ctx.scroll("l");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "chevron_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function PanelComponent_Template_div_scroll_7_listener() {
            return ctx.checkArrows();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PanelComponent_div_8_Template, 9, 6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_Template_i_click_10_listener() {
            return ctx.scroll("r");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " chevron_right ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.panel.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.elementVisible("l"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.panel.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panel.members);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.elementVisible("r"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".panel[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  padding: 1vh 0%;\n}\n.panel-images[_ngcontent-%COMP%]{\n  position: relative;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  \n  min-height: 80vh;\n  width: 90vw;\n  scroll-behavior: smooth;\n}\n.panel-images[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e8d8c3;\n  text-decoration: none;\n}\n.panel-text[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10%;\n}\n.image[_ngcontent-%COMP%] {\n  display: inline-block;\n  \n  height: 100%;\n  margin-right: 1vw;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 90%;\n  max-height: 72vh;\n  margin: 0;\n}\n.next[_ngcontent-%COMP%], .prev[_ngcontent-%COMP%] {\n  \n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 5%;\n}\n#left-chevron[_ngcontent-%COMP%]:hover, #right-chevron[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n.left[_ngcontent-%COMP%] {\n  left:0;\n}\n.right[_ngcontent-%COMP%] {\n  right:0;\n}\n#left-chevron[_ngcontent-%COMP%], #right-chevron[_ngcontent-%COMP%] {\n  font-size: 8vw;\n  opacity: .5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDtBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLE1BQU07RUFDTixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsTUFBTTtBQUNSO0FBRUE7RUFDRSxPQUFPO0FBQ1Q7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYW5lbC9wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMXZoIDAlO1xufVxuLnBhbmVsLWltYWdlc3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG4gIHdpZHRoOiA5MHZ3O1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbi5wYW5lbC1pbWFnZXMgYSB7XG4gIGNvbG9yOiAjZThkOGMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wYW5lbC10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAlO1xufVxuLmltYWdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvKiBjb2xvcjogd2hpdGU7ICovXG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxdnc7XG59XG4uaW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIG1heC1oZWlnaHQ6IDcydmg7XG4gIG1hcmdpbjogMDtcbn1cblxuLm5leHQsIC5wcmV2IHtcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA1JTtcbn1cblxuI2xlZnQtY2hldnJvbjpob3ZlciwgI3JpZ2h0LWNoZXZyb246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sZWZ0IHtcbiAgbGVmdDowO1xufVxuXG4ucmlnaHQge1xuICByaWdodDowO1xufVxuXG4jbGVmdC1jaGV2cm9uLCAjcmlnaHQtY2hldnJvbiB7XG4gIGZvbnQtc2l6ZTogOHZ3O1xuICBvcGFjaXR5OiAuNTtcbn1cbiJdfQ== */"]
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
        }],
        elements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ['image']
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
        desc: "",
        models: []
      }, {
        name: "rel737.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, // { name: "rel607.jpg", date: "", title: "", desc: "", models: [] },
      {
        name: "rel619.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "rel624.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "5.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "9.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "57.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "19-2.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "291.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "285.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "93.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "97.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "53.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "1.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "grad-ab",
      title: "Abraham's Graduation",
      path: "../assets/images/work/grad/",
      images: [{
        name: "ab141.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ab/ab987.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ab/ab142.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ab/ab99.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ab/ab110.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ab/ab805.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ab/ab922.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ab/ab866.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ab/ab916.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ab/ab881.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      } // { name: "ab/ab909.jpg", date: "May 2019", title: "", desc: "", models: [] },
      ]
    }, {
      id: "grad-sof",
      title: "Sofya's Graduation",
      path: "../assets/images/work/grad/",
      images: [{
        name: "sof588.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "sof/sof537.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "sof/sof612.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "sof/sof696.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "sof/sof583.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "sof/sof594.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "sof/sof741.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "sof/sof763.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "sof/sof604.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "sof/sof614.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "grad-ric",
      title: "Ricardo's Graduation",
      path: "../assets/images/work/grad/",
      images: [{
        name: "ric982.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ric/ric111-2.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ric/ric26.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ric/ric960.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ric/ric112.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ric/ric963.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ric/ric101.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ric/ric61.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ric/ric106.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ric/ric120.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "grad-alex",
      title: "Sofya's Graduation",
      path: "../assets/images/work/grad/alex/",
      images: [{
        name: "../alex295.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "alex6.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "alex3.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "alex4.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "alex2.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "alex7.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "alex8.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "alex9.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "alex10.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "alex1.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "grad-lyd",
      title: "Sofya's Graduation",
      path: "../assets/images/work/grad/",
      images: [{
        name: "lyd/lyd162.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "lyd/lyd194.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "lyd/lyd200.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "lyd/lyd232.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "lyd/lyd236.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "lyd/lyd282.jpg",
        date: "May 2019",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "event-vap",
      title: "Events",
      path: "../assets/images/work/events/vap/",
      images: [{
        name: "vap915.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "vap930.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "vap921.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "vap988.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "vap35.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "vap958.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "vap967.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "vap997.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "vap971.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "vap989.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "vap60.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "vap67.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "vap71.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "vap44.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "vap48.jpg",
        date: "Oct 2019",
        title: "Voices and Perspectives",
        desc: "",
        models: []
      }, {
        name: "vap973.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "event-ae19",
      title: "Events",
      path: "../assets/images/work/events/AE19/",
      images: [{
        name: "ae19-8.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ae19-1.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ae19-3.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ae19-4.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ae19-5.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ae19-6.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "ae19-7.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "event-urmcbbq",
      title: "Events",
      path: "../assets/images/work/events/urmcbbq/",
      images: [{
        name: "urmcbbq2.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "urmcbbq3.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "urmcbbq4.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "urmcbbq5.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "urmcbbq6.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "urmcbbq7.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "urmcbbq8.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "urmcbbq9.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "urmcbbq10.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "event-bloth19",
      title: "Events",
      path: "../assets/images/work/events/bloth/",
      images: [{
        name: "bloth19-2.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "bloth19-3.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "bloth19-4.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "bloth19-5.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "bloth19-6.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "bloth19-7.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "bloth19-8.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "bloth19-9.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "bloth19-10.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "event-pep",
      title: "Events",
      path: "../assets/images/work/events/pepnc/",
      images: [{
        name: "pepnc994.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "pepnc424.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, //{ name: "pepnc448.jpg", date: "", title: "", desc: "", models: [] },
      {
        name: "pepnc157.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "pepnc214.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "pepnc457.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "pepnc445.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "pepnc347.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "pepnc288.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "pepnc486.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "pepnc532.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "pepnc131.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "pepnc242.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "pepnc52.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "pepnc81.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "hs-urmc",
      title: "URMC Headshots",
      path: "../assets/images/work/headshots/urmc/",
      images: [{
        name: "../urmc-mar.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "urmc-hanan3.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "urmc-gio.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "urmc-albina.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "urmc-ian.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "urmc-esu.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "urmc-mo.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "urmc-chike.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "urmc-alexei4.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "urmc-danyeh.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "hs-raas",
      title: "RAAS Headshots",
      path: "../assets/images/work/headshots/raas/",
      images: [{
        name: "raas2.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "raas3.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "raas4.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "raas5.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "raas6.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "../raas1.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "hs-anj",
      title: "Anjali Headshots",
      path: "../assets/images/work/headshots/anjali/",
      images: [{
        name: "anj2.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "anj3.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "anj4.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "anj5.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "anj6.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "anj7.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "iao-bday",
      title: "Iyaniwura's 21st Bday",
      path: "../assets/images/work/other/iao-bday/",
      images: [{
        name: "iao479.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "iao530.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "iao1.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "iao2.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "iao3.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "iao4.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "iao5.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "iao6.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "iao7.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "iao8.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "proj-risk",
      title: "Photoseries",
      path: "../assets/images/projects/proj-risk/",
      images: [{
        name: "risk842.jpg",
        date: "Jun 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "risk841.jpg",
        date: "Jun 2019",
        title: "",
        desc: "",
        models: []
      }, {
        name: "../risk832.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "risk825.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "proj-syd",
      title: "Photoseries - Sydney",
      path: "../assets/images/projects/proj-syd/",
      images: [{
        name: "syd24.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "syd16.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "syd29.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "syd30.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "proj-chi",
      title: "Photoseries - Chioma",
      path: "../assets/images/projects/proj-chi/",
      images: [{
        name: "../THEONE.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "chi862.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "chi849.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "chi860.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "chi856.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "proj-albums",
      title: "Photoseries - Albums Rahmaster",
      path: "../assets/images/projects/proj-albums/",
      images: [{
        name: "onelove.png",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "sol3.png",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "blond.png",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "4eva.png",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "szer.png",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "sonder1.png",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "blkswn.png",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "CHIEF.png",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "angeloh.png",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "sonderinto1.png",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "MOONSHOES.png",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "bloodorange.png",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "../bak.png",
        date: "",
        title: "",
        desc: "",
        models: []
      }]
    }, {
      id: "proj-uncanny",
      title: "Photoseries - Uncanny",
      path: "../assets/images/projects/proj-uncanny/",
      images: [{
        name: "uncanny753-2.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "uncanny750-2.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "uncanny758.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "uncanny762.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "uncanny777.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "uncanny650.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "uncanny763.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "uncanny768.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "uncanny775.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
      }, {
        name: "uncanny766.jpg",
        date: "",
        title: "",
        desc: "",
        models: []
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
          desc: "",
          models: []
        },
        id: "grad-ab"
      }, {
        cover: {
          name: "sof588.jpg",
          date: "May 2019",
          title: "Sofya",
          desc: "",
          models: []
        },
        id: "grad-sof"
      }, {
        cover: {
          name: "ric982.jpg",
          date: "May 2019",
          title: "Ricardo",
          desc: "",
          models: []
        },
        id: "grad-ric"
      }, {
        cover: {
          name: "alex295.jpg",
          date: "May 2019",
          title: "Alexandria",
          desc: "",
          models: []
        },
        id: "grad-alex"
      }, {
        cover: {
          name: "lyd169.jpg",
          date: "May 2018",
          title: "Lydia",
          desc: "",
          models: []
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
          desc: "",
          models: []
        },
        id: "event-vap"
      }, {
        cover: {
          name: "ae19-2.jpg",
          date: "Oct 2019",
          title: "Autumn Evening",
          desc: "",
          models: []
        },
        id: "event-ae19"
      }, {
        cover: {
          name: "urmcbbq1.jpg",
          date: "Aug 2019",
          title: "URMC x NSBE x SHPE BBQ",
          desc: "",
          models: []
        },
        id: "event-urmcbbq"
      }, {
        cover: {
          name: "bloth19-1.jpg",
          date: "Aug 2019",
          title: "Black Life on The Hill",
          desc: "",
          models: []
        },
        id: "event-bloth19"
      }, {
        cover: {
          name: "pepnc992.jpg",
          date: "May 2018",
          title: "Peprah Naming Ceremony",
          desc: "",
          models: []
        },
        id: "event-pep"
      }]
    }, {
      id: "work-hs",
      title: "Headshots + Portraits",
      path: "../assets/images/work/headshots/",
      members: [{
        cover: {
          name: "urmc-mar.jpg",
          date: "Feb 2020",
          title: "URMC Cornell Headshots",
          desc: "",
          models: []
        },
        id: "hs-urmc"
      }, {
        cover: {
          name: "raas1.jpg",
          date: "Oct 2019",
          title: "Cornell RAAS Headshots",
          desc: "",
          models: []
        },
        id: "hs-raas"
      }, {
        cover: {
          name: "anj1.jpg",
          date: "Oct 2019",
          title: "Cornell Anjali Headshots",
          desc: "",
          models: []
        },
        id: "hs-anj"
      }]
    }, {
      id: "work-other",
      title: "Other",
      path: "../assets/images/work/other/",
      members: [{
        cover: {
          name: "iao521.jpg",
          date: "Jun 2019",
          title: "Iyaniwura's 21st Bday",
          desc: "",
          models: []
        },
        id: "iao-bday"
      }]
    } //, "work-orgs", "work-brands", "work-mags"
    ]; //panels to be shown on project page
    //string corresponds to id of a PHOTOGROUP

    var PROJECTPANELS = [{
      id: "projects",
      title: "Photoseries",
      path: "../assets/images/projects/",
      members: [{
        cover: {
          name: "flick.png",
          date: "Feb 2020",
          title: "Uncanny Vibrations",
          desc: "Coming Soon!",
          models: ["Rainer Sainvil", "Hameedah Khadar", "Emily Romero"]
        },
        id: "proj-uncanny"
      }, {
        cover: {
          name: "syd629.jpg",
          date: "Jan 2020",
          title: "Sydney",
          desc: "Coming Soon!",
          models: ["Sydney Gates"]
        },
        id: "proj-syd"
      }, {
        cover: {
          name: "THEONE.jpg",
          date: "Nov 2019",
          title: "Chioma",
          desc: "Coming Soon!",
          models: ["Chioma Iloebunam"]
        },
        id: "proj-chi"
      }, {
        cover: {
          name: "risk832.jpg",
          date: "Jun 2019",
          title: "Reem",
          desc: "Coming Soon!",
          models: ["Reem Abdalla"]
        },
        id: "proj-risk"
      }, {
        cover: {
          name: "bak.png",
          date: "Jun 2019",
          title: "One Love (Albums Rahmastered)",
          desc: "Coming Soon!",
          models: ["Reem Abdalla", "Chiemezue Ijomanta", "Iyaniwura Olarewaju", "William Nnuro", "Chuka Anyene", "Abby Agyapong"]
        },
        id: "proj-albums"
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "panel", 1);

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
      consts: [[4, "ngFor", "ngForOf"], [3, "panel"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_1_Template, 2, 1, "div", 0);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "panel", 1);

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
      consts: [[4, "ngFor", "ngForOf"], [3, "panel"]],
      template: function WorkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkComponent_div_1_Template, 2, 1, "div", 0);

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