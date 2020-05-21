import styled from 'styled-components';
import { VoteType } from '../../../domains/voting/entities';

export const ThumbButtonContainer = styled.span<{type: VoteType}>`
  width: 31px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
  cursor: pointer;
  background-color: ${({type}) => type === VoteType.UP ? 'rgba(28, 187, 180, 0.702)' : 'rgba(255, 173, 29, 0.702)'};
`;

export const ThumbIcon = styled.img`
  width: 18px;
  height: 18px;
`;