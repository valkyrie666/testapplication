import { RouterReducerState } from '@ngrx/router-store';
import { DepartmentState, inititalDepartmentState } from './department.state';
import { WorkerState, inititalWorkerState } from './worker.state';

export interface AppState {
  router?: RouterReducerState;
  departments: DepartmentState;
  workers: WorkerState
}

export const initialAppState: AppState = {
  departments: inititalDepartmentState,
  workers: inititalWorkerState
}
