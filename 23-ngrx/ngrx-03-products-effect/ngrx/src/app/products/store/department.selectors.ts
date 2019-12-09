import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DepartmentState, departmentAdapter } from './department.reducers';

export const departmentState = createFeatureSelector<DepartmentState>('departments');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = departmentAdapter.getSelectors(departmentState)

export const selectProdsByDep = (id: string) => createSelector(
  departmentState,
  (state) => state.prods_per_dep[id]
)

export const selectProds = createSelector(
  departmentState,
  (state) => state.prods_per_dep
)

export const selectLoading = createSelector(
    departmentState,
    (state) => state.loading
);
