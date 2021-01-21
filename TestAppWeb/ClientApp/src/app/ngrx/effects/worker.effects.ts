import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AppState } from '../states/app.state';
import { WorkerService } from "../../services/workers.service";
import { EWorkerActions, GetWorker, GetWorkerSuccess, GetWorkers, GetWorkersSuccess } from "../actions/worker.actions";
import { workerListSelector } from "../selectors/worker.selector";

@Injectable()
export class WorkerEffects {
  constructor(
    private _service: WorkerService,
    private _action$: Actions,
    private _store: Store<AppState>
  ) { }

  @Effect()
  getWorker$ = this._action$
    .pipe(
      ofType<GetWorker>(EWorkerActions.GetWorker),
      map(action => action.payload),
      withLatestFrom(this._store.pipe(select(workerListSelector))),
      switchMap(([id]) => {
        const selectedWorker = this._service.get(id);
        return of(new GetWorkerSuccess(selectedWorker));
      }));

  @Effect()
  getWorkers$ = this._action$
    .pipe(
      ofType<GetWorkers>(EWorkerActions.GetWorkers),
      switchMap(() => {
        const workers = this._service.getAll();
        return of(new GetWorkersSuccess(workers));
      }));
}
