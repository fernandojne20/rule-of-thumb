import React, { FunctionComponent } from 'react';
import { CandidatesContainer, CandidatesContent } from './candidates.Styled';
import { Message } from '../message';
import { Voting } from '../voting';

export const Candidates: FunctionComponent = () => {
  return (
    <>
      <CandidatesContainer>
        <CandidatesContent>
          <Message/>
          <Voting/>
        </CandidatesContent>
      </CandidatesContainer>
    </>
  );
}