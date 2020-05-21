import { all, takeLatest, call, put } from 'redux-saga/effects';
import { VOTING_ACTIONS, SetCandidatesAction, MakeVoteAction, VoteMadeAction } from '../domains/voting/actions';
import * as Voting from '../infrastructure/http-client/voting';
import {successGetCandidates, successMakeVote} from '../infrastructure/http-client/voting/fake';
import { Candidate, MakeVoteDTO } from '../domains/voting/entities';
import { StatusResponse } from '../infrastructure/http-client/entities';

const getCandidates = Voting.getCandidates(successGetCandidates);
export function* votingSaga() {

  yield all([
    takeLatest(VOTING_ACTIONS.GET_CANDIDATES, getCandidatesSaga),
    takeLatest(VOTING_ACTIONS.MAKE_VOTE, makeVoteSaga)
  ]);
}

function* getCandidatesSaga() {
  const candidates: Candidate[] = yield call(getCandidates);
  yield put<SetCandidatesAction>({type: VOTING_ACTIONS.SET_CANDIDATES, candidates: candidates});
}

function* makeVoteSaga(args: MakeVoteAction) {

  const {id, voteType}: MakeVoteDTO = args;

  const makeVote = Voting.makeVote(successMakeVote);

  const response: StatusResponse = yield call(makeVote, {id, voteType});

  if(response.success && response.result) {
    yield put<VoteMadeAction>({ type: VOTING_ACTIONS.VOTE_MADE, id});
  }

}