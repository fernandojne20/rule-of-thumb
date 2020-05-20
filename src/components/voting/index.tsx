import React, { FunctionComponent } from 'react';
import { VotingContainer, Title, CardVotingContainer } from './voting.Styled';
import {VoteCard} from '../vote-card';
import Kanye from '../../assets/Kanye.png';
import Cristina from '../../assets/Cristina.png';
import Malala from '../../assets/Malala.png';
import Mark from '../../assets/Mark.png';

export const Voting: FunctionComponent = () => {
  return (
    <VotingContainer>
      <Title>Votes</Title>
      <CardVotingContainer>
        <VoteCard cardCandidate={Kanye}/>
        <VoteCard cardCandidate={Mark}/>
        <VoteCard cardCandidate={Cristina}/>
        <VoteCard cardCandidate={Malala}/>
      </CardVotingContainer>
    </VotingContainer>
  );
}