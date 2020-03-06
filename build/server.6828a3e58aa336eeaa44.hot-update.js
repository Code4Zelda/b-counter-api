exports.id = "server";
exports.modules = {

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express = __webpack_require__(/*! express */ \"express\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst app = express();\napp.use(cors());\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({ extended: false }));\nexports.default = app;\n\n\n//# sourceURL=webpack:///./src/routes.ts?");

/***/ })

};