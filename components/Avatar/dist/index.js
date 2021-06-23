"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Avatar = function () {
    return (react_1["default"].createElement("div", { className: "rounded-full bg-blue-500 h-9 w-9 flex items-center justify-center relative cursor-pointer hover:opacity-70" },
        react_1["default"].createElement("p", { className: "text-white" }, "JO"),
        react_1["default"].createElement("div", { className: "absolute -top-2 border-2 -right-2 bg-red-500 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white font-bold" }, "2")));
};
exports["default"] = Avatar;
