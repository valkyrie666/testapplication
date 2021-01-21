import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { routerReducer } from '@ngrx/router-store';
import { departmentReducers } from './department.reducer';
import { workerReducers } from './worker.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  departments: departmentReducers,
  workers: workerReducers
}
