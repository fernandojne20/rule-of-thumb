import { VotingState } from '../domains/voting/entities';

export type GlobalState = {
  voting: VotingState
}

export const initialState: GlobalState = {
  voting: {
    candidates: [],
    votedCandidates: []
  }
}