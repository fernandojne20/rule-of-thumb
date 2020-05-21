import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { VotingContainer, Title, CardVotingContainer } from './voting.Styled';
import { VoteCard } from '../vote-card';
import { GlobalState } from '../../store/state';
import { GetCandidatesAction, VOTING_ACTIONS } from '../../domains/voting/actions';
import { Candidate } from '../../domains/voting/entities';

interface VotingProps {
  candidates: Candidate[];
  getCandidates: () => void;
}
export const Voting: FunctionComponent<VotingProps> = ({candidates, getCandidates}) => {

  useEffect(() => {
    getCandidates();
  }, [])
  return (
    <VotingContainer>
      <Title>Votes</Title>
      <CardVotingContainer>
        {
          candidates && candidates.map((candidate) => 
             <VoteCard candidate={candidate} key={candidate.id}/>
          )
        }
      </CardVotingContainer>
    </VotingContainer>
  );
}

export default connect(
  ({voting}: GlobalState) => {
    return {
      candidates: voting.candidates
    }
  },
  (dispatch) => {
    return {
      getCandidates: () => dispatch<GetCandidatesAction>({type: VOTING_ACTIONS.GET_CANDIDATES})
    }
  }
)(Voting);