import { Action } from '@ngrx/store';
import { Product } from '../models/product.model';
 
export enum ProductActionTypes {
  PRODUCT_ALL       = '[PRODUCT_ALL]       Get all products',
  PRODUCT_ALL_OK    = '[PRODUCT_ALL_OK]    Got all products',
  PRODUCT_NEW       = '[PRODUCT_NEW]       Add a new product',
  PRODUCT_NEW_OK    = '[PRODUCT_NEW_OK]    Product added',
  PRODUCT_UPDATE    = '[PRODUCT_UPDATE]    Update a product',
  PRODUCT_UPDATE_OK = '[PRODUCT_UPDATE_OK] Product updated',
  PRODUCT_DELETE    = '[PRODUCT_DELETE]    Delete a product',
  PRODUCT_DELETE_OK = '[PRODUCT_DELETE_OK] Product removed',
  PRODUCT_ERROR     = '[PRODUCT_ERROR]     Error during the request',
}

export class ProductAll implements Action {
    readonly type = ProductActionTypes.PRODUCT_ALL;
}

export class ProductAllOk implements Action {
    readonly type = ProductActionTypes.PRODUCT_ALL_OK;
    constructor(public payload: {products: Product[]}){}
}

export class ProductNew implements Action {
    readonly type = ProductActionTypes.PRODUCT_NEW;
    constructor(public payload: {product: Product}) {}
}

export class ProductNewOk implements Action {
    readonly type = ProductActionTypes.PRODUCT_NEW_OK;
    constructor(public payload: {product: Product}) {}
}

export class ProductUpdate implements Action {
    readonly type = ProductActionTypes.PRODUCT_UPDATE;
    constructor(public payload: {product: Product}){}    
}

export class ProductUpdateOk implements Action {
    readonly type = ProductActionTypes.PRODUCT_UPDATE_OK;
    constructor(public payload: {product: Product}) {}    
}

export class ProductDelete implements Action {
    readonly type = ProductActionTypes.PRODUCT_DELETE;
    constructor(public payload: {id: string}) {}
}

export class ProductDeleteOk implements Action {
    readonly type = ProductActionTypes.PRODUCT_DELETE_OK;
    constructor(public payload: {id: string}) {}    
}

export class ProductError implements Action {
    readonly type = ProductActionTypes.PRODUCT_ERROR;
    constructor(public payload: {msg: any}) {}
}

export type ProductsActions = 
    ProductAll | ProductAllOk | 
    ProductNew | ProductNewOk | 
    ProductUpdate | ProductUpdateOk | 
    ProductDelete | ProductDeleteOk |
    ProductError;