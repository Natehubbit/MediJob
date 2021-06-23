"use strict";
exports.__esModule = true;
var react_1 = require("react");
var nanoid_1 = require("nanoid");
var Card = function (_a) {
    var title = _a.title, items = _a.items;
    return (react_1["default"].createElement("div", { className: "py-5 px-2 bg-white" },
        react_1["default"].createElement("header", { className: "font-bold text-md mb-3" }, title.toUpperCase()),
        react_1["default"].createElement("ul", { className: "mb-4" }, items.map(function (itm) {
            return (react_1["default"].createElement("li", { key: nanoid_1.nanoid() },
                react_1["default"].createElement("p", { className: "text-xs" },
                    itm.item,
                    " ",
                    react_1["default"].createElement("span", { className: "text-gray-500" }, Number(itm.count).toLocaleString()))));
        }))));
};
exports["default"] = Card;
