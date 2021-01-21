import { inititalWorkerState, WorkerState } from '../states/worker.state';
import { WorkerActions, EWorkerActions } from '../actions/worker.actions';

export const workerReducers = (
  state = inititalWorkerState,

  action: WorkerActions): WorkerState => {
  switch (action.type) {
    case EWorkerActions.GetWorkersSuccess: {
      return {
        ...state,
        workers: action.payload
      };
    }
    case EWorkerActions.GetWorkerSuccess: {
      return {
        ...state,
        selectedWorker: action.payload
      };
    }
    default: {
      return state;
    }
  };
}
