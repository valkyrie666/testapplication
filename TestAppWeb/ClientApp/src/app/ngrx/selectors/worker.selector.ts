import { AppState } from "../states/app.state";
import { createSelector } from '@ngrx/store';
import { WorkerState } from "../states/worker.state";

const selectWorkers = (state: AppState) => state.workers;

export const workerListSelector = createSelector(
  selectWorkers,
  (state: WorkerState) => state.workers
);

export const selectSelectedWorker = createSelector(
  selectWorkers,
  (state: WorkerState) => state.selectedWorker
);
