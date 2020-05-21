import { VotingState } from '../../domains/voting/entities';
import { VotingActions, VOTING_ACTIONS } from '../../domains/voting/actions';

const initialState: VotingState = {
  candidates: []
}

function reducer(state = initialState, action: VotingActions): VotingState {
  switch (action.type) {
    case VOTING_ACTIONS.SET_CANDIDATES:
      return {
        ...state,
        candidates: action.candidates
      }
    default:
      return state;
  }
}

export default reducer;