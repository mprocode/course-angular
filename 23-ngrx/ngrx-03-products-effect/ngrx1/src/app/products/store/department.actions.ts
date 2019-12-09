import { Action } from '@ngrx/store';
import { Department } from '../models/department.model';
 
export enum DepartmentActionTypes {
  DEPARTMENT_ALL       = '[DEPARTMENT_ALL]       Get all departments',
  DEPARTMENT_ALL_OK    = '[DEPARTMENT_ALL_OK]    Got all departments',
  DEPARTMENT_NEW       = '[DEPARTMENT_NEW]       Add a new department',
  DEPARTMENT_NEW_OK    = '[DEPARTMENT_NEW_OK]    Department added',
  DEPARTMENT_UPDATE    = '[DEPARTMENT_UPDATE]    Update a department',
  DEPARTMENT_UPDATE_OK = '[DEPARTMENT_UPDATE_OK] Department updated',
  DEPARTMENT_DELETE    = '[DEPARTMENT_DELETE]    Delete a department',
  DEPARTMENT_DELETE_OK = '[DEPARTMENT_DELETE_OK] Department removed',
  DEPARTMENT_ERROR     = '[DEPARTMENT_ERROR]     Error during the request',
}

export class DepartmentAll implements Action {
    readonly type = DepartmentActionTypes.DEPARTMENT_ALL;
}

export class DepartmentAllOk implements Action {
    readonly type = DepartmentActionTypes.DEPARTMENT_ALL_OK;
    constructor(public payload: {departments: Department[]}){}
}

export class DepartmentNew implements Action {
    readonly type = DepartmentActionTypes.DEPARTMENT_NEW;
    constructor(public payload: {department: Department}) {}
}

export class DepartmentNewOk implements Action {
    readonly type = DepartmentActionTypes.DEPARTMENT_NEW_OK;
    constructor(public payload: {department: Department}) {}
}

export class DepartmentUpdate implements Action {
    readonly type = DepartmentActionTypes.DEPARTMENT_UPDATE;
    constructor(public payload: {department: Department}){}    
}

export class DepartmentUpdateOk implements Action {
    readonly type = DepartmentActionTypes.DEPARTMENT_UPDATE_OK;
    constructor(public payload: {department: Department}) {}    
}

export class DepartmentDelete implements Action {
    readonly type = DepartmentActionTypes.DEPARTMENT_DELETE;
    constructor(public payload: {id: string}) {}
}

export class DepartmentDeleteOk implements Action {
    readonly type = DepartmentActionTypes.DEPARTMENT_DELETE_OK;
    constructor(public payload: {id: string}) {}    
}


export class DepartmentError implements Action {
    readonly type = DepartmentActionTypes.DEPARTMENT_ERROR;
    constructor(public payload: {msg: string}) {}
}

export type DepartmentsActions = 
    DepartmentAll | DepartmentAllOk | DepartmentNew | DepartmentNewOk | 
    DepartmentUpdate | DepartmentUpdate | DepartmentUpdateOk | 
    DepartmentDelete | DepartmentDelete | DepartmentDeleteOk |
    DepartmentError;