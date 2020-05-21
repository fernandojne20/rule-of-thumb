import { Action } from 'redux';
import { Candidate, VoteType } from '../entities';

export enum VOTING_ACTIONS {
  GET_CANDIDATES = 'GET_CANDIDATES',
  SET_CANDIDATES = 'SET_CANDIDATES',
  MAKE_VOTE = 'MAKE_VOTE',
  VOTE_MADE = 'VOTE_MADE',
}

export interface GetCandidatesAction extends Action {
  type: VOTING_ACTIONS.GET_CANDIDATES;
}

export interface SetCandidatesAction extends Action {
  type: VOTING_ACTIONS.SET_CANDIDATES;
  candidates: Candidate[];
}

export interface MakeVoteAction extends Action {
  type: VOTING_ACTIONS.MAKE_VOTE;
  id: number;
  voteType: VoteType;
}

export interface VoteMadeAction extends Action {
  type: VOTING_ACTIONS.VOTE_MADE;
}

export type VotingActions = 
  | GetCandidatesAction
  | SetCandidatesAction
  | MakeVoteAction
  | VoteMadeAction;