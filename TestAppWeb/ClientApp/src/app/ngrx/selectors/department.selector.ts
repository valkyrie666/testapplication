import { AppState } from "../states/app.state";
import { createSelector } from '@ngrx/store';
import { DepartmentState } from "../states/department.state";

const selectDepartments = (state: AppState) => state.departments;

export const departmentListSelector = createSelector(
  selectDepartments,
  (state: DepartmentState) => state.departments
);

export const selectSelectedDepartment = createSelector(
  selectDepartments,
  (state: DepartmentState) => state.selectedDepartment
);
