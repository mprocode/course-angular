import { Product } from '../models/product.model';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import {ProductActionTypes, ProductsActions} from './product.actions';

export interface ProductState extends EntityState<Product> {
    loading: boolean;
}

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({
    selectId: (instance) =>{ return instance._id; }
});  

export const initialState: ProductState = productAdapter.getInitialState({
    loading: false,
});

export function reducer(state = initialState, action: ProductsActions) {
    switch(action.type) {
        case ProductActionTypes.PRODUCT_ALL    || ProductActionTypes.PRODUCT_UPDATE || 
             ProductActionTypes.PRODUCT_DELETE || ProductActionTypes.PRODUCT_ERROR:
            return {...state, loading: true};

        case ProductActionTypes.PRODUCT_ALL_OK:
            return productAdapter.addAll(action.payload.products, 
                {...state, loading: false} );

        case ProductActionTypes.PRODUCT_NEW_OK:
            return productAdapter.addOne(action.payload.product, 
                {...state, loading: false})

        case ProductActionTypes.PRODUCT_DELETE_OK:
            return productAdapter.removeOne(action.payload.id, 
                {...state, loading: false});

        case ProductActionTypes.PRODUCT_UPDATE_OK:
           return productAdapter.updateOne({ id: action.payload.product._id,
                changes: action.payload.product}, {...state, loading: false});

        default:
            return state;
    }
}


