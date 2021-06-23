"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button = function (_a) {
    var children = _a.children, mode = _a.mode, upperCase = _a.upperCase;
    var label = upperCase || upperCase == undefined
        ? children.toUpperCase()
        : children;
    var getStyle = function () {
        if (!mode || mode === "outline") {
            return "border border-blue-500 px-5 py-2 text-blue-500";
        }
        else if (mode === "solid") {
            return "bg-blue-500 px-5 py-2 text-white";
        }
        else {
            return "hover:text-blue-500";
        }
    };
    return (react_1["default"].createElement("button", { className: "bg-transparent text-sm rounded-lg font-bold hover:opacity-70 focus:outline-none " + getStyle() }, label));
};
exports["default"] = Button;
