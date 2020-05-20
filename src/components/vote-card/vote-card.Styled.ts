import styled from 'styled-components';

export const CardContainer = styled.div<{cardImage: string}>`
  display: flex;
  max-width: 30.62em;
  min-height: 34.37em; 
  /* width: 100%; */
  background-image: url(${({cardImage}) => cardImage});
  margin-bottom: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  
`;

export const VoteCardContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  color: #fff;
  background: -moz-linear-gradient(90deg, rgba(0,0,0,0.61) 0%, rgba(0,0,0,0.61) 37%, rgba(0,0,0,0) 74%, rgba(0,0,0,0) 100%);
  background: -webkit-linear-gradient(90deg, rgba(0,0,0,0.61) 0%, rgba(0,0,0,0.61) 37%, rgba(0,0,0,0) 74%, rgba(0,0,0,0) 100%);
  background: linear-gradient(0deg, rgba(0,0,0,0.61) 0%, rgba(0,0,0,0.61) 37%, rgba(0,0,0,0) 74%, rgba(0,0,0,0) 100%);
`;
export const CandidateName = styled.h1`
  font-size: 2.81em;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

export const Published = styled.span`
  padding-left: 40px;
  font-size:0.75em;
  font-weight: 400;

`;

export const Description = styled.p`
  font-size: 1em;
  line-height: 1.2;
  padding: 24px 50px 24px 40px;
  font-weight: 300;
`;

export const Strong = styled.strong`
  font-weight: 700;
`;

export const VoteActions = styled.div`
  display: flex;
  padding-left: 40px;
  margin-bottom: 32px;
  align-items: center;

`;

export const VoteButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: rgb(255, 255, 255);
  border-style: solid;
  background-color: rgba(0, 0, 0, 0.149);
  height: 38px;
  padding: 0 20px;
  font-size: 0.87em;
  cursor: pointer;
`;


export const VotePercentage = styled.div`
  height: 50px; 
  display: flex;
  font-weight: 300;
  font-size: 2em;
`;

export const ThumbUp = styled.span<{percentage: number}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: ${({percentage}) => percentage}%;
  background-color: rgba(28, 187, 180, 0.702);
  
`;
export const ThumbDown = styled.span<{percentage: number}>`
  display: flex;  
  align-items: center;
  justify-content: flex-end;
  width: ${({percentage}) => percentage}%;
  background-color: rgba(255, 173, 29, 0.702);

`;

export const IconThumb = styled.img`
  width: 28px;
  padding: 10px;
`;

export const Percentage = styled.span`
  font-size: 0.7em;
  align-self: flex-end;
  padding-bottom: 11px;
`;