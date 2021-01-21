"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EDepartmentActions;
(function (EDepartmentActions) {
    EDepartmentActions["GetDepartments"] = "get departments";
    EDepartmentActions["GetDepartmentsSuccess"] = "get departments success";
    EDepartmentActions["GetDepartment"] = "get department";
    EDepartmentActions["GetDepartmentSuccess"] = "get department success";
    EDepartmentActions["CreateDepartment"] = "create department";
    EDepartmentActions["CreateDepartmentSuccess"] = "create department success";
    EDepartmentActions["DeleteDepartment"] = "delete department";
    EDepartmentActions["DeleteDepartmentSuccess"] = "delete department success";
    EDepartmentActions["UpdateDepartment"] = "update department";
    EDepartmentActions["UpdateDepartmentSuccess"] = "update department success";
})(EDepartmentActions = exports.EDepartmentActions || (exports.EDepartmentActions = {}));
var GetDepartments = /** @class */ (function () {
    function GetDepartments() {
        this.type = EDepartmentActions.GetDepartments;
    }
    return GetDepartments;
}());
exports.GetDepartments = GetDepartments;
var GetDepartmentsSuccess = /** @class */ (function () {
    function GetDepartmentsSuccess(payload) {
        this.payload = payload;
        this.type = EDepartmentActions.GetDepartmentsSuccess;
    }
    return GetDepartmentsSuccess;
}());
exports.GetDepartmentsSuccess = GetDepartmentsSuccess;
var GetDepartment = /** @class */ (function () {
    function GetDepartment(payload) {
        this.payload = payload;
        this.type = EDepartmentActions.GetDepartment;
    }
    return GetDepartment;
}());
exports.GetDepartment = GetDepartment;
var GetDepartmentSuccess = /** @class */ (function () {
    function GetDepartmentSuccess(payload) {
        this.payload = payload;
        this.type = EDepartmentActions.GetDepartmentSuccess;
    }
    return GetDepartmentSuccess;
}());
exports.GetDepartmentSuccess = GetDepartmentSuccess;
var CreateDepartment = /** @class */ (function () {
    function CreateDepartment(payload) {
        this.payload = payload;
        this.type = EDepartmentActions.CreateDepartment;
    }
    return CreateDepartment;
}());
exports.CreateDepartment = CreateDepartment;
var CreateDepartmentSuccess = /** @class */ (function () {
    function CreateDepartmentSuccess(payload) {
        this.payload = payload;
        this.type = EDepartmentActions.CreateDepartmentSuccess;
    }
    return CreateDepartmentSuccess;
}());
exports.CreateDepartmentSuccess = CreateDepartmentSuccess;
var DeleteDepartment = /** @class */ (function () {
    function DeleteDepartment(payload) {
        this.payload = payload;
        this.type = EDepartmentActions.DeleteDepartment;
    }
    return DeleteDepartment;
}());
exports.DeleteDepartment = DeleteDepartment;
var DeleteDepartmentSuccess = /** @class */ (function () {
    function DeleteDepartmentSuccess(payload) {
        this.payload = payload;
        this.type = EDepartmentActions.DeleteDepartmentSuccess;
    }
    return DeleteDepartmentSuccess;
}());
exports.DeleteDepartmentSuccess = DeleteDepartmentSuccess;
//# sourceMappingURL=department.actions.js.map