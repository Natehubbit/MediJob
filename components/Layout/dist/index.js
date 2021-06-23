"use strict";
exports.__esModule = true;
var react_1 = require("react");
var index_1 = require("../Navbar/index");
var Layout = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(index_1["default"], null),
        children));
};
exports["default"] = Layout;
