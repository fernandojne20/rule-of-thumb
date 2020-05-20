import styled from 'styled-components';

export const MessageContainer = styled.section`
  display: flex;
  flex: 1 1 auto;
  background-color: rgb(235, 235, 235);
  box-sizing: border-box;
  padding: 22px 25px;
  color: rgb(51, 51, 51);
  align-items: center;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
`;

export const Legends = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 190px;
  flex-shrink: 0;
`;

export const Paragraph = styled.p`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  line-height: 1.515;
  box-sizing: border-box;
  padding-right: 22px;
  padding-left: 5px;
  font-weight: 300;
`;

export const CloseIcon = styled.img`
  width: 14px;
  height: 15px;
  flex-shrink: 0;
`;

export const TinyLegend = styled.div`
  display: flex;
  font-weight: 300;
  font-size: 1.3em;
`;

export const BigLegend = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 2.2em;
  

`;
