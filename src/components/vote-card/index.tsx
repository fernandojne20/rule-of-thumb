import React, { FunctionComponent, useState, useEffect } from 'react';
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
import { Candidate, VoteType } from '../../domains/voting/entities';

interface VoteCardProps {
  candidate: Candidate,
  voted: boolean,
  onVote: (id: number, voteType: VoteType) => void,
  onVoteAgain: (id:number) => void,
}

const calculatePercentage = (total: number, portion: number): number => {
  return Math.round(portion*100/total);
}

const thumbRule = (upVotes: number, downVotes: number): VoteType => {
  return (upVotes >= downVotes ? VoteType.UP: VoteType.DOWN);
}

export const VoteCard: FunctionComponent<VoteCardProps> = ({candidate, voted, onVote, onVoteAgain}) => {

  const upPercentage = calculatePercentage(candidate.upVotes + candidate.downVotes, candidate.upVotes);
  const downPercentage = calculatePercentage(candidate.upVotes + candidate.downVotes, candidate.downVotes);
  const [upVotePercentage] = useState<number>(upPercentage);
  const [downVotePercentage] = useState<number>(downPercentage);
  const [voteType, setVoteType] = useState<VoteType | undefined>(undefined);

  useEffect(() => {
    if(!voted) {
      setVoteType(undefined);
    }
    
  }, [voted])
  
  return (
    <CardContainer cardImage={candidate.image}>
      <VoteCardContainer>

        <CandidateName>
          <ThumbButton type={thumbRule(upVotePercentage, downVotePercentage)}/> 
          {candidate.name}
        </CandidateName>

        <Published>
          <Strong>
            {candidate.published} 
          </Strong> 
           in {candidate.section}
        </Published>

        <Description>
          { !voted ? candidate.message : 'Thank you for voting!'}
        </Description>

        {
          !voted ? 
          <VoteActions>
            <ThumbButton 
              onClick={(type) => setVoteType(type)}
              selected={voteType === VoteType.UP}
              type={VoteType.UP}
            />

            <ThumbButton 
              onClick={(type) => setVoteType(type)}
              selected={voteType === VoteType.DOWN}
              type={VoteType.DOWN}
            />

            <VoteButton 
              onClick={() => voteType && onVote(candidate.id, voteType)}>
              Vote now
            </VoteButton>
          </VoteActions>
          :
          <VoteActions>
            <VoteButton
              onClick={() => onVoteAgain(candidate.id)}>
              Vote again
            </VoteButton>
          </VoteActions>

        }

        <VotePercentage>
          <ThumbUp percentage={upVotePercentage}>
            <IconThumb src={thumbUp} />
            {upVotePercentage}
            <Percentage>%</Percentage>
          </ThumbUp>

          <ThumbDown percentage={downVotePercentage}>
            {downVotePercentage}
            <Percentage>%</Percentage> 
            <IconThumb src={thumbDown} />
          </ThumbDown>
        </VotePercentage>

      </VoteCardContainer>
    </CardContainer>
  );
}

