import React, { FunctionComponent } from 'react';
import { 
  MessageContainer, 
  Legends, 
  Paragraph, 
  CloseIcon,
  TinyLegend,
  BigLegend
} from './message.Styled';
import closeIcon from '../../assets/close.svg';

export const Message: FunctionComponent = () => {
  return (
    <MessageContainer>
      <Legends>
        <TinyLegend>Speak out. Be heard. </TinyLegend>
        <BigLegend>Be counted</BigLegend>
      </Legends>
      <Paragraph>
        Rule of Thumb is a crowd sourced court of public opinion where anyone 
        and everyone can speak out and speak freely. It’s easy: You share your 
        opinion, we analyze and put the data in a public report.
      </Paragraph>
      <CloseIcon src={closeIcon} />
    </MessageContainer>
  );
}