import { Observable } from 'rxjs';
import { Worker } from '../../interface';

export interface WorkerState {
  workers: Observable<Worker[]>;
  selectedWorker: Observable<Worker>;
}

export const inititalWorkerState: WorkerState = {
  workers: null,
  selectedWorker: null
}
