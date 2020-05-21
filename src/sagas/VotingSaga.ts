import { all, takeLatest, call, put } from 'redux-saga/effects';
import { VOTING_ACTIONS, SetCandidatesAction } from '../domains/voting/actions';
import * as Voting from '../infrastructure/http-client/voting';
import {successGetCandidates} from '../infrastructure/http-client/voting/fake';
import { Candidate } from '../domains/voting/entities';

const getCandidates = Voting.getCandidates(successGetCandidates);
export function* votingSaga() {

  yield all([
    takeLatest(VOTING_ACTIONS.GET_CANDIDATES, getCandidatesSaga),
  ]);
}

function* getCandidatesSaga() {
  const candidates: Candidate[] = yield call(getCandidates);
  yield put<SetCandidatesAction>({type: VOTING_ACTIONS.SET_CANDIDATES, candidates: candidates});
}

