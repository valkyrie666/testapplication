import { Component, OnInit } from '@angular/core';
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
export class CreateWorkerFormComponent implements OnInit {
  form: FormGroup;
  Departments: Department[];
  selectedDepartment: Department;

  departmentSub: Subscription;

  constructor(private workerService: WorkerService, private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentSub = this.departmentService.getAll().subscribe(data => {
      this.Departments = data;
    });

    console.log(this.Departments);

    this.form = new FormGroup({
      workerName: new FormControl(null, Validators.required),
      workerPost: new FormControl(null, Validators.required),
      //workerDepartment: new FormControl(null, Validators.required),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const worker: Worker = {
      Name: this.form.value.workerName,
      DateOfCreation: new Date(),
      DateOfEdit: new Date(),
      DateOfEmployement: new Date(),
      //Department: this.selectedDepartment,
      DepartmentId: 1,
      Post: this.form.value.workerPost
    };

    this.workerService.create(worker).subscribe(() => {
      this.form.reset();
    });
  }
}
