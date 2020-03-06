exports.id = "server";
exports.modules = {

/***/ "./src/database/index.ts":
/*!*******************************!*\
  !*** ./src/database/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// tslint:disable no-console\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst config_1 = __webpack_require__(/*! ../config */ \"./src/config/index.ts\");\nconst routes_1 = __webpack_require__(/*! ../routes */ \"./src/routes.ts\");\nexports.default = mongoose.connect(config_1.MONGO, { useNewUrlParser: true, useUnifiedTopology: true }, error => {\n    if (error) {\n        console.log(\"Error: \", error);\n        process.exit(1);\n    }\n    else {\n        console.log(`🥳 Connected to database!🥳`);\n    }\n    routes_1.default.listen(config_1.PORT, () => {\n        console.log(`⚡ Running on port ${config_1.PORT}⚡️`);\n    });\n});\n\n\n//# sourceURL=webpack:///./src/database/index.ts?");

/***/ }),

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