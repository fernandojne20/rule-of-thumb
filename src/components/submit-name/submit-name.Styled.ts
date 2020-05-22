import styled from 'styled-components';
import people from '../../assets/people.png'

export const SubmitNameContainer = styled.section`
  display: flex;
  flex: 1 1 auto;
  background-image: url(${people});
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  align-items: center;
  line-height: 0.8;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  margin-bottom: 10px;
`;

export const SubmitNameContent = styled.section`
  display: flex;
  flex: 1 1 auto;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 15px 25px;
  justify-content: space-between;
`;


export const Paragraph = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.87em;
  line-height: 1.515;
  box-sizing: border-box;
  padding-right: 22px;
  padding-left: 5px;
  font-weight: 300;
`;

export const SubmitButton = styled.button`
  height: 47px;
  padding: 0 39px;
  background-color: rgba(255, 255, 255, 0.149);
  border-width: 3px;
  border-color: rgb(51, 51, 51);
  border-style: solid;
  font-family: Lato;
  font-size: 1.25em;
`;