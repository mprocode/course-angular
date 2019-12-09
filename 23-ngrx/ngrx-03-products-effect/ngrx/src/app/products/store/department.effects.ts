import { Injectable } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as DepartmentActions from './department.actions';
import { switchMap, map, catchError, tap, withLatestFrom, filter, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Department } from '../models/department.model';
import { NotificationService } from 'src/app/notification/notification.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as DepartmentSelectors from './department.selectors';

@Injectable()
export class DepartmentEffects {

    
    @Effect()
    loadProducts$ = this.actions$.pipe(
        ofType<DepartmentActions.DepartmentProducts>(DepartmentActions.DepartmentActionTypes.DEPARTMENT_PROD),
        map((action) => action.payload.id),
        withLatestFrom(this.store.select( DepartmentSelectors.selectProds) ),
        filter(([id, products]) => !products[id]),
        switchMap(([id, products]) => this.departmentService.products(id).pipe(
            map(products => new DepartmentActions.DepartmentProductsOk({id, products})),
            catchError(err => of (new DepartmentActions.DepartmentError({msg: err})))
        ))
    );
    

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
        ofType<DepartmentActions.DepartmentDelete>(DepartmentActions.DepartmentActionTypes.DEPARTMENT_DELETE),
        switchMap((action) => this.departmentService.remove(action.payload.id).pipe(
            map((id) => new DepartmentActions.DepartmentDeleteOk({id})),
            tap(()=> this.notificationService.notifySuccess('Department successfuly removed.')),
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

    @Effect({dispatch: false})
    onError$ = this.actions$.pipe(
        ofType<DepartmentActions.DepartmentError>(DepartmentActions.DepartmentActionTypes.DEPARTMENT_ERROR),
        tap((action) => {
            // console.log(action.payload.msg);
            let error = action.payload.msg;
            if (error.status == 0) {
                console.log('The internet connection is broken or the server is down.');
                this.notificationService.notifyError('The internet connection is broken or the server is down.');
            }
            else {
                console.log(error.error);
                this.notificationService.notifyError(error.error);
            }

        })
    )    

    constructor(
        private actions$: Actions,
        private departmentService: DepartmentService,
        private notificationService: NotificationService,
        private store: Store<AppState>) {}
}