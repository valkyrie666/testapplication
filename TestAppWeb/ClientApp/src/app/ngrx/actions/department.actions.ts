import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Department } from '../../interface';

export enum EDepartmentActions {
  GetDepartments = 'get departments',
  GetDepartmentsSuccess = 'get departments success',
  GetDepartment = 'get department',
  GetDepartmentSuccess = 'get department success',
  CreateDepartment = 'create department',
  CreateDepartmentSuccess = 'create department success',
  DeleteDepartment = 'delete department',
  DeleteDepartmentSuccess = 'delete department success',
  UpdateDepartment = 'update department',
  UpdateDepartmentSuccess = 'update department success',
}

export class GetDepartments implements Action {
  public readonly type = EDepartmentActions.GetDepartments;
  constructor() { }
}

export class GetDepartmentsSuccess implements Action {
  public readonly type = EDepartmentActions.GetDepartmentsSuccess;
  constructor(public payload: Observable<Department[]>) { }
}

export class GetDepartment implements Action {
  public readonly type = EDepartmentActions.GetDepartment;
  constructor(public payload: number) { }
}

export class GetDepartmentSuccess implements Action {
  public readonly type = EDepartmentActions.GetDepartmentSuccess;
  constructor(public payload: Observable<Department>) { }
}

export class CreateDepartment implements Action {
  public readonly type = EDepartmentActions.CreateDepartment;
  constructor(public payload: Department) { }
}

export class CreateDepartmentSuccess implements Action {
  public readonly type = EDepartmentActions.CreateDepartmentSuccess;
  constructor(public payload: Observable<void>) { }
}

export class DeleteDepartment implements Action {
  public readonly type = EDepartmentActions.DeleteDepartment;
  constructor(public payload: number) { }
}

export class DeleteDepartmentSuccess implements Action {
  public readonly type = EDepartmentActions.DeleteDepartmentSuccess;
  constructor(public payload: Observable<void>) { }
}

export type DepartmentActions =
  GetDepartment | GetDepartments |
  GetDepartmentsSuccess | GetDepartmentSuccess |
  CreateDepartment | CreateDepartmentSuccess |
  DeleteDepartment | DeleteDepartmentSuccess;

