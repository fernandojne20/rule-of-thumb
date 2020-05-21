import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { VotingContainer, Title, CardVotingContainer } from './voting.Styled';
import { VoteCard } from '../vote-card';
import { GlobalState } from '../../store/state';
import { GetCandidatesAction, VOTING_ACTIONS, MakeVoteAction } from '../../domains/voting/actions';
import { Candidate, VoteType } from '../../domains/voting/entities';

interface VotingProps {
  candidates: Candidate[];
  getCandidates: () => void;
  makeVote: (id: number, voteType: VoteType) => void;
}
export const Voting: FunctionComponent<VotingProps> = ({candidates, getCandidates, makeVote}) => {

  useEffect(() => {
    getCandidates();
  }, [])
  return (
    <VotingContainer>
      <Title>Votes</Title>
      <CardVotingContainer>
        {
          candidates && candidates.map((candidate) => 
            <VoteCard 
              candidate={candidate} 
              key={candidate.id}
              onVote={(id, voteType) => makeVote(id, voteType)}
            />
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
      getCandidates: () => dispatch<GetCandidatesAction>({type: VOTING_ACTIONS.GET_CANDIDATES}),
      makeVote: (id: number, voteType: VoteType) => dispatch<MakeVoteAction>({type: VOTING_ACTIONS.MAKE_VOTE, id, voteType })
    }
  }
)(Voting);