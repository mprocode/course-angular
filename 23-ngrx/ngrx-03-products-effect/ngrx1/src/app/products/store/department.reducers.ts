import { Department } from '../models/department.model';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import {DepartmentActionTypes, DepartmentsActions} from './department.actions';

export interface DepartmentState extends EntityState<Department> {
    loading: boolean;
}

export const departmentAdapter: EntityAdapter<Department> = createEntityAdapter<Department>({
    selectId: (instance) =>{ return instance._id; }
});  

export const initialState: DepartmentState = departmentAdapter.getInitialState({
    loading: false,
});

export function reducer(state = initialState, action: DepartmentsActions) {
    switch(action.type) {
        case DepartmentActionTypes.DEPARTMENT_ALL    || DepartmentActionTypes.DEPARTMENT_UPDATE || 
             DepartmentActionTypes.DEPARTMENT_DELETE || DepartmentActionTypes.DEPARTMENT_ERROR:
            return {...state, loading: true};

        case DepartmentActionTypes.DEPARTMENT_ALL_OK:
            return departmentAdapter.addAll(action.payload.departments, 
                {...state, loading: false} );

        case DepartmentActionTypes.DEPARTMENT_NEW_OK:
            return departmentAdapter.addOne(action.payload.department, 
                {...state, loading: false})

        case DepartmentActionTypes.DEPARTMENT_DELETE_OK:
            return departmentAdapter.removeOne(action.payload.id, 
                {...state, loading: false});

        case DepartmentActionTypes.DEPARTMENT_UPDATE_OK:
           return departmentAdapter.updateOne({ 
               id: action.payload.department._id, 
               changes: action.payload.department}, 
                    {...state, loading: false});

        default:
            return state;
    }
}

