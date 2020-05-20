import React, { FunctionComponent } from 'react';
import { 
  SubmitNameContainer,
  Paragraph, 
  SubmitButton, 
  SubmitNameContent
} from './submit-name.Styled';
import closeIcon from '../../assets/close.svg';

export const SubmitName: FunctionComponent = () => {
  return (
    <SubmitNameContainer>
      <SubmitNameContent>
        <Paragraph>
          Is there anyone else you would want us to add?
        </Paragraph>
        <SubmitButton> Submit a Name </SubmitButton>
      </SubmitNameContent>
    </SubmitNameContainer>
  );
}