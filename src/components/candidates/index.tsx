import React, { FunctionComponent } from 'react';
import { CandidatesContainer, CandidatesContent } from './candidates.Styled';
import { Message } from '../message'

export const Candidates: FunctionComponent = () => {
  return (
    <>
      <CandidatesContainer>
        <CandidatesContent>
          <Message/>
          Candidates
        </CandidatesContent>
      </CandidatesContainer>
    </>
  );
}