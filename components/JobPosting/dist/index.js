"use strict";
exports.__esModule = true;
var react_1 = require("react");
var index_1 = require("../Button/index");
var JobPosting = function () {
    var _a = react_1.useState(false), showJobs = _a[0], setShowJobs = _a[1];
    var _b = react_1.useState(false), showJob = _b[0], setShowJob = _b[1];
    var onClickPosting = function () {
        setShowJobs(!showJobs);
    };
    var onClickJob = function () {
        setShowJob(!showJob);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { onClick: onClickPosting, className: "flex items-center text-sm py-2 px-2 cursor-pointer" },
            react_1["default"].createElement("div", { className: "rounded-lg h-8 w-8 bg-gray-400 text-white justify-center items-center flex mr-4" }, "JA"),
            react_1["default"].createElement("div", null,
                8,
                " jobs for ",
                "Mammoth Hospital")),
        showJobs && (react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { onClick: onClickJob, className: "border-t-2 py-4 px-2 flex text-sm justify-between items-center cursor-pointer" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("header", { className: "font-bold" }, "RN Outpatient Surgery"),
                        react_1["default"].createElement("p", { className: "text-xs" }, "Full-time")),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("p", null, "3 weeks ago"))),
                showJob && (react_1["default"].createElement("div", { className: "px-2 text-sm my-2" },
                    react_1["default"].createElement("div", { className: "md:flex md:space-x-4 mb-4" },
                        react_1["default"].createElement("header", { className: "w-1/3 font-bold" }, "Department"),
                        react_1["default"].createElement("div", { className: "w-1/3" }, "hello"),
                        react_1["default"].createElement("div", { className: "w-1/3" })),
                    react_1["default"].createElement("div", { className: "flex space-x-4 mb-4" },
                        react_1["default"].createElement("header", { className: "w-1/3 font-bold" }, "Hours/shifts"),
                        react_1["default"].createElement("div", { className: "w-1/3" }, "hello"),
                        react_1["default"].createElement("div", { className: "w-1/3" })),
                    react_1["default"].createElement("div", { className: "flex space-x-4 mb-4" },
                        react_1["default"].createElement("header", { className: "w-1/3 font-bold" }, "Summary"),
                        react_1["default"].createElement("div", { className: "w-1/3" }, "hello"),
                        react_1["default"].createElement("div", { className: "w-1/3 flex items-end flex-col" },
                            react_1["default"].createElement("div", { className: "mb-2" },
                                react_1["default"].createElement(index_1["default"], { mode: "solid", upperCase: false }, "Job Details")),
                            react_1["default"].createElement("div", { className: "mb-2" },
                                react_1["default"].createElement(index_1["default"], { upperCase: false }, "Save Job")))))))))));
};
exports["default"] = JobPosting;
