import { votingSaga, getCandidatesSaga,  makeVoteSaga, ACTIONS} from './VotingSaga';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { VOTING_ACTIONS, MakeVoteAction } from '../domains/voting/actions';
import { CANDIDATES } from '../infrastructure/http-client/voting/fake'
import { VoteType } from '../domains/voting/entities';

describe("VotingSaga", () => {
  it("should execute all in Voting Saga", () => {

    const saga = votingSaga();

    const step1 = saga.next();

    expect(step1.value).toStrictEqual(
      all(ACTIONS)
    );
  });

  it("should get Candidates", () => {

    const saga = getCandidatesSaga();


    const step1 = saga.next();
    const step2 = saga.next(CANDIDATES);

    expect(step2.value).toStrictEqual(put({type: VOTING_ACTIONS.SET_CANDIDATES, candidates: CANDIDATES}));
  });

  it("should make vote", () => {

   const makeVoteAction: MakeVoteAction = {type: VOTING_ACTIONS.MAKE_VOTE, id: 5, voteType: VoteType.UP};
    const saga = makeVoteSaga(makeVoteAction);


    const step1 = saga.next();
    const step2 = saga.next({success: true, result: true, status: 202});
    expect(step2.value).toStrictEqual(put({type: VOTING_ACTIONS.VOTE_MADE, id: 5}));

    const step3 = saga.next();
    expect(step3.value).toStrictEqual(put({type: VOTING_ACTIONS.GET_CANDIDATES}));
  });
})