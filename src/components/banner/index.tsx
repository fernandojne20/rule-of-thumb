import React, { FunctionComponent } from 'react';
import wiki from '../../assets/wiki.svg';
import thumbUp from '../../assets/thumb-up.svg';
import thumbDown from '../../assets/thumb-down.svg';
import { 
  BannerContainer, 
  Card, 
  CardContent, 
  ThumbContainer, 
  Thumb, 
  SmallTitle,
  Title,
  Description,
  Info,
  Question,
  Icon,
  IconThumb,
  RemainingDays,
  Closing,
  Remain,
  Strong
} from './banner.Styled';

export const Banner: FunctionComponent = () => {

  return (
    <BannerContainer>
      <Card>
        <CardContent>
          <SmallTitle>What’s your opinion on</SmallTitle>
          <Title>Pope Francis?</Title>
          <Description>He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up) </Description>
          <Info><Icon src={wiki} /> More information</Info>
          <Question>What’s Your Verdict?</Question>
        </CardContent>
        <ThumbContainer>
          <Thumb veredict='UP'><IconThumb src={thumbUp}/></Thumb>
          <Thumb veredict='DOWN'><IconThumb src={thumbDown}/></Thumb>
        </ThumbContainer>
      </Card>
      <RemainingDays>
        <Closing>CLOSING IN</Closing>
        <Remain> <Strong>22</Strong> days </Remain>
      </RemainingDays>
    </BannerContainer>
  );
}
