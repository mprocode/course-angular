import { createFeatureSelector } from '@ngrx/store';
import { peopleAdapter, PeopleState } from './person.reducer';

export const peopleState = createFeatureSelector<PeopleState>('people');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = peopleAdapter.getSelectors(peopleState);