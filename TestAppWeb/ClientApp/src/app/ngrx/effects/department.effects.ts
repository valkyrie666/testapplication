import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AppState } from '../states/app.state';
import { DepartmentService } from "../../services/departments.service";
import { departmentListSelector } from "../selectors/department.selector";
import { GetDepartmentSuccess, EDepartmentActions, GetDepartment, GetDepartments, GetDepartmentsSuccess, DeleteDepartment, DeleteDepartmentSuccess } from "../actions/department.actions";

@Injectable()
export class DepartmentEffects {
  constructor(
    private _service: DepartmentService,
    private _action$: Actions,
    private _store: Store<AppState>
  ) { }

  @Effect()
  getDepartment$ = this._action$
      .pipe(
        ofType<GetDepartment>(EDepartmentActions.GetDepartment),
      map(action => action.payload),
        withLatestFrom(this._store.pipe(select(departmentListSelector))),
      switchMap(([id]) => {
        const selectedDepartment = this._service.get(id);
        return of(new GetDepartmentSuccess(selectedDepartment));
      }));

  @Effect()
  getDepartments$ = this._action$
    .pipe(
      ofType<GetDepartments>(EDepartmentActions.GetDepartments),
      switchMap(() => {
        const departments = this._service.getAll();
        return of(new GetDepartmentsSuccess(departments));
      }));

  @Effect()
  deleteDepartment$ = this._action$
    .pipe(
      ofType<DeleteDepartment>(EDepartmentActions.DeleteDepartment),
      map(action => action.payload),
      withLatestFrom(this._store.pipe(select(departmentListSelector))),
      switchMap(([id]) => {
        const remove = this._service.delete(id);
        return of(new DeleteDepartmentSuccess(remove));
      })
    );
}
