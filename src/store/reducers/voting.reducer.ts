import { VotingState } from '../../domains/voting/entities';
import { VotingActions, VOTING_ACTIONS } from '../../domains/voting/actions';

const initialState: VotingState = {
  candidates: [],
  votedCandidates: []
}

function reducer(state = initialState, action: VotingActions): VotingState {
  switch (action.type) {
    case VOTING_ACTIONS.SET_CANDIDATES:
      return {
        ...state,
        candidates: action.candidates
      }
    case VOTING_ACTIONS.VOTE_MADE: 
      return {
        ...state, 
        votedCandidates: addToArray<number>(state.votedCandidates, action.id)
      }
    case VOTING_ACTIONS.ALLOW_VOTE_AGAIN: 
      return {
        ...state,
        votedCandidates: removeFromArray<number>(state.votedCandidates, action.id)
      }
    default:
      return state;
  }
}

const addToArray = <T>(array: Array<T>, value: T) => {
  
  return array.indexOf(value) < 0 ? [...array, value] : array;
}

const removeFromArray = <T>(array: Array<T>, toRemove: T) => {
  
  return array.filter((value) => value !== toRemove );
}

export default reducer;