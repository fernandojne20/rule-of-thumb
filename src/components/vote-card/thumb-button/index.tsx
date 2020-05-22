import React, { FunctionComponent } from 'react';
import { ThumbButtonContainer, ThumbIcon } from './thumb-button.Styled';
import thumbUp from '../../../assets/thumb-up.svg';
import thumbDown from '../../../assets/thumb-down.svg';

interface ThumbButtonProps {
  type: 'UP' | 'DOWN'
}
export const ThumbButton: FunctionComponent<ThumbButtonProps> = ({type}) => {
  return (
    <ThumbButtonContainer type={type}>
      {
        type === 'UP' ? 
        <ThumbIcon src={thumbUp}/> : 
        <ThumbIcon src={thumbDown}/>
      }
    </ThumbButtonContainer>
  );
}