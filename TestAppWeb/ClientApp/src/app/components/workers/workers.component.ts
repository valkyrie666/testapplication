import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorkerService } from '../../services/workers.service';
import { Worker } from '../../interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit, OnDestroy {
  workers: Worker[];
  getWorkersSubscription: Subscription;
  deleteWorkerSubscription: Subscription;

  constructor(private workerService: WorkerService, private router: Router) { }

  ngOnInit(): void {
    this.getWorkersSubscription = this.workerService.getAll().subscribe(data => {
      this.workers = data;
    });
  }

  ngOnDestroy() {
    if (this.getWorkersSubscription) {
      this.getWorkersSubscription.unsubscribe();
    }

    if (this.deleteWorkerSubscription) {
      this.deleteWorkerSubscription.unsubscribe();
    }
  }

  delete(id: number) {
    this.workerService.delete(id).subscribe(() => {
      this.workers = this.workers.filter(x => x.Id !== id);
    });
  }
}
