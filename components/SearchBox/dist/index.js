"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var SearchBox = function () {
    var ref = react_1.useRef();
    var onClick = function () {
        ref.current && ref.current.focus();
    };
    return (react_1["default"].createElement("div", { onClick: onClick, className: "w-full pl-4 flex space-x-4 h-12 cursor-pointer bg-white" },
        react_1["default"].createElement("div", { className: "flex items-center opacity-50 justify-center" },
            react_1["default"].createElement(react_feather_1.Search, null)),
        react_1["default"].createElement("input", { ref: ref, className: "h-full w-full cursor-text focus:outline-none focus:ring-2", placeholder: "Search for any job, title, keywords or company" })));
};
exports["default"] = SearchBox;
