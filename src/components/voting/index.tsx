import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { VotingContainer, Title, CardVotingContainer } from './voting.Styled';
import { VoteCard } from '../vote-card';
import { GlobalState } from '../../store/state';
import { GetCandidatesAction, VOTING_ACTIONS, MakeVoteAction, AllowVoteAgainAction } from '../../domains/voting/actions';
import { Candidate, VoteType } from '../../domains/voting/entities';

interface VotingProps {
  candidates: Candidate[];
  votedCandidates: Array<number>;
  getCandidates: () => void;
  makeVote: (id: number, voteType: VoteType) => void;
  allowVoteAgain: (id: number) => void;
}
export const Voting: FunctionComponent<VotingProps> = ({candidates, votedCandidates, getCandidates, makeVote, allowVoteAgain}) => {

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
              voted={votedCandidates.indexOf(candidate.id) >= 0}
              onVote={(id, voteType) => makeVote(id, voteType)}
              onVoteAgain={(id) => allowVoteAgain(id)}
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
      candidates: voting.candidates,
      votedCandidates: voting.votedCandidates
    }
  },
  (dispatch) => {
    return {
      getCandidates: () => dispatch<GetCandidatesAction>({type: VOTING_ACTIONS.GET_CANDIDATES}),
      makeVote: (id: number, voteType: VoteType) => dispatch<MakeVoteAction>({type: VOTING_ACTIONS.MAKE_VOTE, id, voteType }),
      allowVoteAgain: (id: number) => dispatch<AllowVoteAgainAction>({type: VOTING_ACTIONS.ALLOW_VOTE_AGAIN, id })
    }
  }
)(Voting);