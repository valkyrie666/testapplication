import { Component, OnInit, OnDestroy } from '@angular/core';
import { Department } from '../../interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DepartmentService } from '../../services/departments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-form-create',
  templateUrl: './create-department-form.component.html',
  styleUrls: ['./create-department-form.component.css']
})
export class CreateDepartmentFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  constructor(private service: DepartmentService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      departmentName: new FormControl(null, Validators.required)
    });
  }

  ngOnDestroy() { }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const department: Department = {
      Name: this.form.value.departmentName,
      DateOfCreation: new Date(),
      DateOfEdit: new Date(),
      Workers: []
    };

    console.log(department.Name);

    this.service.create(department).subscribe(() => {
      this.form.reset();
      this.router.navigate(['departments']);
    });
  }
}
