/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__findMax__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getSum__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeMul__ = __webpack_require__(3);






const express = eval(`require("express")`);
const app = express();
const port = 5000;
app.listen(port);
console.log("Server on port: " + port);

app.get("/api/sum", function(request, response) {
    const a = request.query.a + "";
    const b = request.query.b + "";
    const result = Object(__WEBPACK_IMPORTED_MODULE_1__getSum__["a" /* default */])(a, b);
    response.end(JSON.stringify({
        result: result,
    }));
});

app.get("/api/max", function(request, response) {
    const a = request.query.a + "";
    const b = request.query.b + "";
    const c = request.query.c + "";
    const result = Object(__WEBPACK_IMPORTED_MODULE_0__findMax__["a" /* default */])(a, b, c);
    response.end(JSON.stringify({
        result: result,
    }));
});

app.get("/api/mul", function(request, response) {
    const a = request.query.a + "";
    const b = request.query.b + "";
    Object(__WEBPACK_IMPORTED_MODULE_2__timeMul__["a" /* default */])(a, b, (result) => {
        response.end(JSON.stringify({
            result: result,
        }));
    });
});



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findMax;


function findMax(a, b, c) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    if(a >= c && a >= b) {
        return a;
    }

    if(b >= a && b >= c) {
        return b;
    }
    
    if(c >= a && c >= b) {
        return c;
    }

    return undefined;
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getSum;


function getSum(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    let summa = a + b;
    if(!summa) summa = 0;
    return summa;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timeMulModule;


function timeMulModule(a, b, callback) {
    setTimeout(function() {
        setTimeout(function() {
            a = parseInt(a);
            b = parseInt(b);
            let value = a * b;
            value = parseInt(value);
            if(value < 0) {
                value = value * (-1);
            }
            value = parseInt(value);
            if(!value) {
                value = 0;
            }
            callback(value);
        }, 2000);
    }, 2000);
}


/***/ })
/******/ ]);