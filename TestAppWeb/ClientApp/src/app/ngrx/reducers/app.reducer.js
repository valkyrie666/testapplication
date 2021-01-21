"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_store_1 = require("@ngrx/router-store");
var department_reducer_1 = require("./department.reducer");
var worker_reducer_1 = require("./worker.reducer");
exports.appReducers = {
    router: router_store_1.routerReducer,
    departments: department_reducer_1.departmentReducers,
    workers: worker_reducer_1.workerReducers
};
//# sourceMappingURL=app.reducer.js.map