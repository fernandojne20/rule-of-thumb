import styled from 'styled-components';

export const ThumbButtonContainer = styled.span<{type: 'UP' | 'DOWN'}>`
  width: 31px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
  cursor: pointer;
  background-color: ${({type}) => type === 'UP' ? 'rgba(28, 187, 180, 0.702)' : 'rgba(255, 173, 29, 0.702)'};
`;

export const ThumbIcon = styled.img`
  width: 18px;
  height: 18px;
`;