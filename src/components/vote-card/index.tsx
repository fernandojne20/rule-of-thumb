import React, { FunctionComponent } from 'react';
import thumbUp from '../../assets/thumb-up.svg';
import thumbDown from '../../assets/thumb-down.svg';
import {
  CardContainer,
  VoteCardContainer,
  CandidateName,
  Description,
  Published,
  Strong,
  VoteActions,
  VotePercentage,
  ThumbUp,
  ThumbDown,
  IconThumb,
  Percentage,
  VoteButton
} from './vote-card.Styled';
import { ThumbButton } from './thumb-button';

interface VoteCardProps {
  cardCandidate: string
}

export const VoteCard: FunctionComponent<VoteCardProps> = ({cardCandidate}) => {
  return (
    <CardContainer cardImage={cardCandidate}>
      <VoteCardContainer>

        <CandidateName><ThumbButton type='UP'/> Kanye West</CandidateName>
        <Published><Strong>1 month ago</Strong> in Entertainment</Published>
        <Description>Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</Description>
        <VoteActions>
          <ThumbButton type='UP'/>
          <ThumbButton type='DOWN'/>
          <VoteButton>Vote now</VoteButton>
        </VoteActions>
        <VotePercentage>
          <ThumbUp percentage={50}>
            <IconThumb src={thumbUp} />
            50
            <Percentage>%</Percentage>
          </ThumbUp>
          <ThumbDown percentage={50}>
            50
            <Percentage>%</Percentage> 
            <IconThumb src={thumbDown} />
          </ThumbDown>
        </VotePercentage>
      </VoteCardContainer>
    </CardContainer>
  );
}

