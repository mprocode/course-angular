import { Injectable } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as DepartmentActions from './department.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Department } from '../models/department.model';

@Injectable()
export class DepartmentEffects {

    @Effect()
    loadAll$ = this.actions$.pipe(
        ofType<DepartmentActions.DepartmentAll>(DepartmentActions.DepartmentActionTypes.DEPARTMENT_ALL),
        switchMap(() => this.departmentService.all().pipe(
            map((departments) => new DepartmentActions.DepartmentAllOk({departments})),
            catchError(err => of (new DepartmentActions.DepartmentError({msg: err})))
        ))
    );

    @Effect()
    update$ = this.actions$.pipe(
        ofType<DepartmentActions.DepartmentUpdate>(DepartmentActions.DepartmentActionTypes.DEPARTMENT_UPDATE),
        switchMap((action) => this.departmentService.update(action.payload.department).pipe(
            map((department) => new DepartmentActions.DepartmentUpdateOk({department})),
            catchError(err => of (new DepartmentActions.DepartmentError({msg: err})))
        ))
    );


    @Effect()
    delete$ = this.actions$.pipe(
        ofType<DepartmentActions.DepartmentDelete>(DepartmentActions.DepartmentActionTypes.DEPARTMENT_UPDATE),
        switchMap((action) => this.departmentService.remove(action.payload.id).pipe(
            map((id) => new DepartmentActions.DepartmentDeleteOk({id})),
            catchError(err => of (new DepartmentActions.DepartmentError({msg: err})))
        ))
    );

    @Effect()
    add$ = this.actions$.pipe(
        ofType<DepartmentActions.DepartmentNew>(DepartmentActions.DepartmentActionTypes.DEPARTMENT_NEW),
        switchMap((action) => this.departmentService.add(action.payload.department).pipe(
            map(department=>new DepartmentActions.DepartmentNewOk({department})),
            catchError(err => of(new DepartmentActions.DepartmentError({msg: err})))
        ))

    );

    constructor(
        private actions$: Actions,
        private departmentService: DepartmentService) {}
}