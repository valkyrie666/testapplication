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
var worker_state_1 = require("../states/worker.state");
var worker_actions_1 = require("../actions/worker.actions");
exports.workerReducers = function (state, action) {
    if (state === void 0) { state = worker_state_1.inititalWorkerState; }
    switch (action.type) {
        case worker_actions_1.EWorkerActions.GetWorkersSuccess: {
            return __assign(__assign({}, state), { workers: action.payload });
        }
        case worker_actions_1.EWorkerActions.GetWorkerSuccess: {
            return __assign(__assign({}, state), { selectedWorker: action.payload });
        }
        default: {
            return state;
        }
    }
    ;
};
//# sourceMappingURL=worker.reducer.js.map