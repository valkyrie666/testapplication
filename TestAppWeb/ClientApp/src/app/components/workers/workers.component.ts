import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../services/workers.service';
import { Worker } from '../../interface';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  workers: Worker[];

  constructor(private workerService: WorkerService) { }

  ngOnInit(): void {
    this.workerService.getAll().subscribe(data => {
      this.workers = data;
    });
  }

  delete(id: number) {
    this.workerService.delete(id).subscribe();
  }
}
