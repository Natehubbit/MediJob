"use strict";
exports.__esModule = true;
var react_1 = require("react");
var constants_1 = require("../../common/constants");
var link_1 = require("next/link");
var Button_1 = require("../Button");
var index_1 = require("../Avatar/index");
var Navbar = function () {
    return (react_1["default"].createElement("div", { className: "bg-white p-4 flex justify-between items-center" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("p", { className: "text-lg font-size text-blue-500 font-medium" }, "HEALTH EXPLORE")),
        react_1["default"].createElement("div", { className: "text-sm flex" }, Object.keys(constants_1.NAV_MENU).map(function (k) {
            var key = k;
            return (react_1["default"].createElement(link_1["default"], { key: k, href: constants_1.NAV_MENU[key] },
                react_1["default"].createElement("a", { className: "mx-3 font-bold" }, key.toUpperCase())));
        })),
        react_1["default"].createElement("div", { className: "space-x-5 flex items-center" },
            react_1["default"].createElement(Button_1["default"], null, "Create Job"),
            react_1["default"].createElement(index_1["default"], null),
            react_1["default"].createElement(Button_1["default"], { mode: "text" }, "Logout"))));
};
exports["default"] = Navbar;
