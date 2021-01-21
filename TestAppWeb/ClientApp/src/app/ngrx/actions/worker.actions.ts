import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Worker } from '../../interface';

export enum EWorkerActions {
  GetWorkers = 'get workers',
  GetWorkersSuccess = 'get workers success',
  GetWorker = 'get worker',
  GetWorkerSuccess = 'get worker success',
}

export class GetWorkers implements Action {
  public readonly type = EWorkerActions.GetWorkers;
  constructor() { }
}

export class GetWorkersSuccess implements Action {
  public readonly type = EWorkerActions.GetWorkersSuccess;
  constructor(public payload: Observable<Worker[]>) { }
}

export class GetWorker implements Action {
  public readonly type = EWorkerActions.GetWorker;
  constructor(public payload: number) { }
}

export class GetWorkerSuccess implements Action {
  public readonly type = EWorkerActions.GetWorkerSuccess;
  constructor(public payload: Observable<Worker>) { }
}

export type WorkerActions = GetWorker | GetWorkers | GetWorkersSuccess | GetWorkerSuccess;
