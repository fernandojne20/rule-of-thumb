import { all, fork } from 'redux-saga/effects';
import { votingSaga } from './VotingSaga';

export function* rootSaga() {
  yield all([
    fork(votingSaga),
  ]);
}