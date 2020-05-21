import { all, takeLatest } from 'redux-saga/effects';
import { VOTING_ACTIONS } from '../domains/voting/actions';

function* initialMessage() {
  yield console.log('Initial Saga');
}
export function* rootSaga() {
  yield all([
    takeLatest(VOTING_ACTIONS.GET_CANDIDATES, initialMessage),
  ]);
}