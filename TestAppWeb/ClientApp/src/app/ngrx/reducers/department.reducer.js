"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var department_state_1 = require("../states/department.state");
var department_actions_1 = require("../actions/department.actions");
exports.departmentReducers = function (state, action) {
    if (state === void 0) { state = department_state_1.inititalDepartmentState; }
    switch (action.type) {
        case department_actions_1.EDepartmentActions.GetDepartmentsSuccess: {
            return __assign(__assign({}, state), { departments: action.payload });
        }
        case department_actions_1.EDepartmentActions.GetDepartmentSuccess: {
            return __assign(__assign({}, state), { selectedDepartment: action.payload });
        }
        default: {
            return state;
        }
    }
    ;
};
//# sourceMappingURL=department.reducer.js.map