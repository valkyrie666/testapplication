"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var selectDepartments = function (state) { return state.departments; };
exports.departmentListSelector = store_1.createSelector(selectDepartments, function (state) { return state.departments; });
exports.selectSelectedDepartment = store_1.createSelector(selectDepartments, function (state) { return state.selectedDepartment; });
//# sourceMappingURL=department.selector.js.map