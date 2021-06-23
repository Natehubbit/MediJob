"use strict";
exports.__esModule = true;
var react_1 = require("react");
var constants_1 = require("../../common/constants");
var index_1 = require("../JobPosting/index");
var Panel = function (_a) {
    var count = _a.count;
    var _b = react_1.useState(), filter = _b[0], setFilter = _b[1];
    react_1.useEffect(function () {
        // TODO: MAKE CALL TO API
    }, [filter]);
    var onSelectFilter = function (val) {
        setFilter(val);
    };
    var getFilterStyle = function (val) {
        if (val === filter) {
            return "text-blue-400 font-bold";
        }
    };
    return (react_1["default"].createElement("div", { className: "py-10 px-3" },
        react_1["default"].createElement("div", { className: "flex justify-between items-end text-sm mb-10" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("header", null,
                    react_1["default"].createElement("b", null, count.toLocaleString()),
                    " job postings")),
            react_1["default"].createElement("ul", { className: "flex space-x-4" },
                react_1["default"].createElement("li", { className: "text-gray-400" }, "Sort by"),
                constants_1.SORT_KEYS.map(function (k) {
                    return (react_1["default"].createElement("li", { onClick: function () { return onSelectFilter(k); }, className: "cursor-pointer " + getFilterStyle(k), key: k }, k));
                }))),
        react_1["default"].createElement("div", { className: "px-2" },
            react_1["default"].createElement(index_1["default"], null),
            react_1["default"].createElement(index_1["default"], null))));
};
exports["default"] = Panel;
