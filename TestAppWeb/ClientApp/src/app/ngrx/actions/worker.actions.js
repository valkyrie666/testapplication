"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EWorkerActions;
(function (EWorkerActions) {
    EWorkerActions["GetWorkers"] = "get workers";
    EWorkerActions["GetWorkersSuccess"] = "get workers success";
    EWorkerActions["GetWorker"] = "get worker";
    EWorkerActions["GetWorkerSuccess"] = "get worker success";
})(EWorkerActions = exports.EWorkerActions || (exports.EWorkerActions = {}));
var GetWorkers = /** @class */ (function () {
    function GetWorkers() {
        this.type = EWorkerActions.GetWorkers;
    }
    return GetWorkers;
}());
exports.GetWorkers = GetWorkers;
var GetWorkersSuccess = /** @class */ (function () {
    function GetWorkersSuccess(payload) {
        this.payload = payload;
        this.type = EWorkerActions.GetWorkersSuccess;
    }
    return GetWorkersSuccess;
}());
exports.GetWorkersSuccess = GetWorkersSuccess;
var GetWorker = /** @class */ (function () {
    function GetWorker(payload) {
        this.payload = payload;
        this.type = EWorkerActions.GetWorker;
    }
    return GetWorker;
}());
exports.GetWorker = GetWorker;
var GetWorkerSuccess = /** @class */ (function () {
    function GetWorkerSuccess(payload) {
        this.payload = payload;
        this.type = EWorkerActions.GetWorkerSuccess;
    }
    return GetWorkerSuccess;
}());
exports.GetWorkerSuccess = GetWorkerSuccess;
//# sourceMappingURL=worker.actions.js.map