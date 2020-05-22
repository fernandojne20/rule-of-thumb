import { VotingActions, VOTING_ACTIONS} from '../../domains/voting/actions';

export type Actions = 
  | VotingActions;

export type ActionType = 
  | VOTING_ACTIONS;