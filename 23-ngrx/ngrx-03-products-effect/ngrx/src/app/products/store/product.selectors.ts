import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState, productAdapter } from './product.reducers';

export const productState = createFeatureSelector<ProductState>('products');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = productAdapter.getSelectors(productState)

export const selectLoading = createSelector(
    productState,
    (state) => state.loading
);