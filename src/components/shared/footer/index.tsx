import React, {FunctionComponent} from 'react';
import { 
  FooterContainer, 
  LegalContainer, 
  SocialContainer,
  Label,
  SocialIcon
} from './footer.Styled';
import Facebook from '../../../assets/facebook.svg';
import Twitter from '../../../assets/twitter.svg';

export const Footer: FunctionComponent = () => {
  return (
    <FooterContainer>
      <LegalContainer>
        <Label>Terms and Conditions</Label>
        <Label>Privacy Policy</Label>
        <Label>Contact Us</Label>
      </LegalContainer>
      <SocialContainer>
        <Label>Follow Us</Label>
        <SocialIcon src={Facebook}/>
        <SocialIcon src={Twitter}/>
      </SocialContainer>
    </FooterContainer>
  );
}