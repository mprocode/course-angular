import { Person } from '../person';
import * as fromPersonActions from './person.actions' ;
import { State } from '@ngrx/store';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export interface PeopleState extends EntityState<Person> {
}

// Se deixar id, nao precisa do selectId
export const peopleAdapter: EntityAdapter<Person> = createEntityAdapter<Person>({
   selectId: (instance) =>{ return instance._id; }
});  

export const initialState: PeopleState = peopleAdapter.getInitialState({
});

export function reducer(state = initialState, action: fromPersonActions.PersonActions) {
    switch(action.type) {
        case fromPersonActions.PersonActionTypes.PERSON_NEW:
            return peopleAdapter.addOne(action.payload.person, state);

        case fromPersonActions.PersonActionTypes.PERSON_DELETE: 
            return peopleAdapter.removeOne(action.payload.id, state);

        case fromPersonActions.PersonActionTypes.PERSON_UPDATE: 
           return peopleAdapter.updateOne({ id: action.payload.id, 
                changes: action.payload.changes}, state);

        default:
            return state;
    }
}