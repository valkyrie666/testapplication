import { inititalDepartmentState, DepartmentState } from '../states/department.state';
import { DepartmentActions, EDepartmentActions } from '../actions/department.actions';

export const departmentReducers = (
  state = inititalDepartmentState,

  action: DepartmentActions): DepartmentState => {
  switch (action.type) {
    case EDepartmentActions.GetDepartmentsSuccess: {
      return {
        ...state,
        departments: action.payload
      };
    }
    case EDepartmentActions.GetDepartmentSuccess: {
      return {
        ...state,
        selectedDepartment: action.payload
      };
    }
    default: {
      return state;
    }
  };
}
