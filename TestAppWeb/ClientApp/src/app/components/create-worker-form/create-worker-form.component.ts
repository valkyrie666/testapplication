import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorkerService } from '../../services/workers.service';
import { Worker, Department } from '../../interface';
import { DepartmentService } from '../../services/departments.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-worker-form',
  templateUrl: './create-worker-form.component.html',
  styleUrls: ['./create-worker-form.component.css']
})
export class CreateWorkerFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  departmentList: Department[];
  selectedDepartment: Department;

  departmentSub: Subscription;
  createWorkerSub: Subscription;

  constructor(private workerService: WorkerService, private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentSub = this.departmentService.getAll().subscribe(data => {
      this.departmentList = data;
      console.log(this.departmentList);
    });

    this.form = new FormGroup({
      workerName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      workerPost: new FormControl('', [Validators.required, Validators.minLength(1)]),
      workerEmployed: new FormControl(new Date(), Validators.required),
      workerDepartment: new FormControl(null, [Validators.required, Validators.minLength(1)])
    });
  }

  ngOnDestroy() {
    if (this.createWorkerSub) {
      this.createWorkerSub.unsubscribe();
    }

    if (this.departmentSub) {
      this.departmentSub.unsubscribe();
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const worker: Worker = {
      Name: this.form.value.workerName,
      DateOfCreation: new Date(),
      DateOfEdit: new Date(),
      DateOfEmployement: new Date(this.form.value.workerEmployed),
      DepartmentId: Number(this.form.value.workerDepartment),
      Post: this.form.value.workerPost
    };

    console.log(this.form.value.workerEmployed);
    console.log(worker);

    this.createWorkerSub = this.workerService.create(worker).subscribe(() => {
      this.form.reset();
    });
  }
}
