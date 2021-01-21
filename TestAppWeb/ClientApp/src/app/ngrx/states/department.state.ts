import { Observable } from 'rxjs';
import { Department } from '../../interface';

export interface DepartmentState {
  departments: Observable<Department[]>;
  selectedDepartment: Observable<Department>;
}

export const inititalDepartmentState: DepartmentState = {
  departments: null,
  selectedDepartment: null
}
