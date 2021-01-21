import { Component, OnInit, OnDestroy } from '@angular/core';
import { DepartmentService } from '../../services/departments.service';
import { Department } from '../../interface';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../ngrx/states/app.state';
import { departmentListSelector } from '../../ngrx/selectors/department.selector';
import { GetDepartments, DeleteDepartment } from '../../ngrx/actions/department.actions';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit, OnDestroy {
  departments: Department[];
  departmentsStream$: Observable<Observable<Department[]>>;

  getDepartmentsSub: Subscription;
  deleteDepartmentSub: Subscription;

  constructor(private departmentService: DepartmentService, private store: Store<AppState>) {
    this.departmentsStream$ = store.pipe(select(departmentListSelector));
  }

  ngOnInit(): void {
    this.departmentService.getAll().subscribe(data => {
      this.departments = data;
    });

    //this.store.dispatch(new GetDepartments());
    //this.getDepartmentsSub = this.departmentsStream$.subscribe(result => {
    //  this.getDepartmentsSub = result.subscribe(data => {
    //    this.departments = data;
    //  })
    //});

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
    //this.departmentService.get(id).subscribe(data => {
    //  this.departments.
    //});
    this.departmentService.delete(id).subscribe(
      //this.departments.filter();
    );
  }
}
