import { Department } from '../models/department.model';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import {DepartmentActionTypes, DepartmentsActions} from './department.actions';
import { Product } from '../models/product.model';

export interface DepartmentState extends EntityState<Department> {
    loading: boolean;
    prods_per_dep: { [_id: string]: Product[] },
}

export const departmentAdapter: EntityAdapter<Department> = createEntityAdapter<Department>({
    selectId: (instance) =>{ return instance._id; }
});  

export const initialState: DepartmentState = departmentAdapter.getInitialState({
    loading: false,
    prods_per_dep: {}
});


export function reducer(state = initialState, action: DepartmentsActions) {
    switch(action.type) {
        case DepartmentActionTypes.DEPARTMENT_ALL:
        case DepartmentActionTypes.DEPARTMENT_UPDATE:
        case DepartmentActionTypes.DEPARTMENT_DELETE:
        case DepartmentActionTypes.DEPARTMENT_NEW:
        case DepartmentActionTypes.DEPARTMENT_PROD:
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

        case DepartmentActionTypes.DEPARTMENT_PROD_OK:
            let newState = {...state, loading: false};
            newState.prods_per_dep[action.payload.id] = action.payload.products;
            return newState;

        case DepartmentActionTypes.DEPARTMENT_ERROR:
            state.prods_per_dep
            return {...state, loading: false};            
        
        default:
            return state;
    }
}

