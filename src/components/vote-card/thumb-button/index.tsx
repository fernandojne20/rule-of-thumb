import React, { FunctionComponent } from 'react';
import { ThumbButtonContainer, ThumbIcon } from './thumb-button.Styled';
import thumbUp from '../../../assets/thumb-up.svg';
import thumbDown from '../../../assets/thumb-down.svg';
import { VoteType } from '../../../domains/voting/entities';

interface ThumbButtonProps {
  type: VoteType,
  selected?: boolean,
  onClick?: (voteType: VoteType) => void,
}
export const ThumbButton: FunctionComponent<ThumbButtonProps> = ({type, selected, onClick}) => {
  return (
    <ThumbButtonContainer 
      selected={selected || false}
      type={type} 
      onClick={() => onClick && onClick(type)}>
      {
        type === VoteType.UP ? 
        <ThumbIcon src={thumbUp}/> : 
        <ThumbIcon src={thumbDown}/>
      }
    </ThumbButtonContainer>
  );
}