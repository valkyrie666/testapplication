import { Component, OnInit, OnDestroy } from '@angular/core';
import { DepartmentService } from '../../services/departments.service';
import { Department } from '../../interface';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../ngrx/states/app.state';
import { departmentListSelector } from '../../ngrx/selectors/department.selector';
import { GetDepartments, DeleteDepartment } from '../../ngrx/actions/department.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit, OnDestroy {
  departments: Department[];

  getDepartmentsSub: Subscription;
  deleteDepartmentSub: Subscription;

  constructor(private departmentService: DepartmentService, private router: Router) {}

  ngOnInit(): void {
    this.getDepartmentsSub = this.departmentService.getAll().subscribe(data => {
      this.departments = data;
    });
  }

  ngOnDestroy() {
    if (this.getDepartmentsSub) {
      this.getDepartmentsSub.unsubscribe;
    }

    if (this.deleteDepartmentSub) {
      this.deleteDepartmentSub.unsubscribe;
    }
  }

  delete(id: number) {
    this.deleteDepartmentSub = this.departmentService.delete(id).subscribe(() => {
      this.departments = this.departments.filter(x => x.Id !== id);
    });
  }
}
