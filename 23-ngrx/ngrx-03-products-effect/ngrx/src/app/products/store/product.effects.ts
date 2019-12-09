import { Injectable } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as ProductActions from './product.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Product } from '../models/product.model';
import { NotificationService } from 'src/app/notification/notification.service';

@Injectable()
export class ProductEffects {

    @Effect()
    loadAll$ = this.actions$.pipe(
        ofType<ProductActions.ProductAll>(ProductActions.ProductActionTypes.PRODUCT_ALL),
        switchMap(() => this.productService.all().pipe(
            map((products) => new ProductActions.ProductAllOk({products})),
            catchError(err => of (new ProductActions.ProductError({msg: err})))
        ))
    );

    @Effect()
    update$ = this.actions$.pipe(
        ofType<ProductActions.ProductUpdate>(ProductActions.ProductActionTypes.PRODUCT_UPDATE),
        switchMap((action) => this.productService.update(action.payload.product).pipe(
            map((product) => new ProductActions.ProductUpdateOk({product})),
            catchError(err => of (new ProductActions.ProductError({msg: err})))
        ))
    );


    @Effect()
    delete$ = this.actions$.pipe(
        ofType<ProductActions.ProductDelete>(ProductActions.ProductActionTypes.PRODUCT_DELETE),
        switchMap((action) => this.productService.remove(action.payload.id).pipe(
            map((id) => new ProductActions.ProductDeleteOk({id})),
            tap(()=> this.notificationService.notifySuccess('Product successfuly removed.')),
            catchError(err => of (new ProductActions.ProductError({msg: err})))
        ))
    );

    @Effect()
    add$ = this.actions$.pipe(
        ofType<ProductActions.ProductNew>(ProductActions.ProductActionTypes.PRODUCT_NEW),
        switchMap((action) => this.productService.add(action.payload.product).pipe(
            map(product=>new ProductActions.ProductNewOk({product})),
            catchError(err => {
                console.log(err);
                return of(new ProductActions.ProductError({msg: err}));
            })
        ))

    );

    @Effect({dispatch: false})
    onError$ = this.actions$.pipe(
        ofType<ProductActions.ProductError>(ProductActions.ProductActionTypes.PRODUCT_ERROR),
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
        private productService: ProductService,
        private notificationService: NotificationService) {}
}