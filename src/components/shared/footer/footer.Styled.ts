import styled from 'styled-components';

export const FooterContainer = styled.section`
  background-image: linear-gradient(to right, #333 10%, rgba(255, 255, 255, 0) 0%);
  background-position: top;
  background-size: 10px 1px;
  background-repeat: repeat-x;
  padding: 34px 0;
  margin: 0 135px;
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
`;

export const LegalContainer = styled.div`
  display: flex;

`;

export const SocialContainer = styled.div`
  display: flex;

`;

export const Label = styled.span`
  margin-right: 28px;
  font-size: 0.75em;
  color: rgb(51, 51, 51);
  line-height: 1.6;
  font-weight: 300;
  align-self: center;
`;
export const SocialIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 28px;

  :last-child {
    margin-right: 0;
  }
`;