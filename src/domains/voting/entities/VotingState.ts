import {Candidate} from './Candidate';

export interface VotingState {
  candidates: Candidate[];
  votedCandidates: Array<number>;
}