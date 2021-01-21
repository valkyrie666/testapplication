"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var selectWorkers = function (state) { return state.workers; };
exports.workerListSelector = store_1.createSelector(selectWorkers, function (state) { return state.workers; });
exports.selectSelectedWorker = store_1.createSelector(selectWorkers, function (state) { return state.selectedWorker; });
//# sourceMappingURL=worker.selector.js.map