import { createStore, applyMiddleware, combineReducers, Reducer, Store } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { GlobalState } from './state';
import votingReducer from './reducers/voting.reducer';
import { Actions } from './actions';
import { rootSaga } from '../sagas/rootSaga';

export type RuleOfThumbStore = Store<GlobalState, Actions>;

export const reducers: Reducer<GlobalState> = combineReducers<GlobalState>({
  voting: votingReducer
});

function configureStore (initialState: GlobalState)  {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    initialState, 
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;