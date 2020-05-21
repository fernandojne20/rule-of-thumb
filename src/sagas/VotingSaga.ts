import { all, takeLatest, call, put } from 'redux-saga/effects';
import { VOTING_ACTIONS, SetCandidatesAction, MakeVoteAction, VoteMadeAction, GetCandidatesAction } from '../domains/voting/actions';
import * as Voting from '../infrastructure/http-client/voting';
import {successGetCandidates, successMakeVote} from '../infrastructure/http-client/voting/fake';
import { Candidate, MakeVoteDTO } from '../domains/voting/entities';
import { StatusResponse } from '../infrastructure/http-client/entities';

//To use Fake request uncomment
// const getCandidates = Voting.getCandidates(successGetCandidates);

const getCandidates = Voting.getCandidates(Voting.getCandidatesAccesor());
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


  //To use Fake request uncomment
  // const makeVote = Voting.makeVote(successMakeVote);

  //TO use real request
  const makeVote = Voting.makeVote(Voting.makeVoteAccessor());

  const response: StatusResponse = yield call(makeVote, {id, voteType});

  if(response.success && response.result) {
    yield put<VoteMadeAction>({ type: VOTING_ACTIONS.VOTE_MADE, id});
    yield put<GetCandidatesAction>({type: VOTING_ACTIONS.GET_CANDIDATES});
  }

}