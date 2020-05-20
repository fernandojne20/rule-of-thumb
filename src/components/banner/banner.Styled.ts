import styled from 'styled-components';
import pope from '../../assets/pope.png';
import layer from '../../assets/gray.png'

export const BannerContainer = styled.section`
  height: 740px;
  background-image: url(${pope});
  background-repeat: no-repeat;
  background-size: 109%;
  position: relative;
  display: flex;
  flex-direction: column;
  /* opacity: 0.451; */
`;

export const Card = styled.div`
  background: transparent;
  max-width: 500px;
  margin-top: 13.5%;
  margin-left: 10.5%;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box; 
  padding: 40px 34px;
  /* background-color: rgba(134, 128, 123, 0.45); */
  background-image: url(${layer});
  color: #fff;
  font-weight: 300;
`;

export const ThumbContainer = styled.div`
  display: flex;
`;

export const Thumb = styled.div<{veredict: string}>`
  height: 80px;
  width:100%;
  display: flex;
  align-items: center; 
  justify-content: center;
  background-color: ${({veredict}) => veredict === 'UP' ? 'rgba(28, 187, 180, 0.902)' : 'rgba(255, 173, 29, 0.902)'};
`;

export const SmallTitle = styled.h5`
  font-size: 1em;
  color: rgba(255, 255, 255, 0.741);
  
`;

export const Title = styled.h1`
  font-size: 3.75em;
  margin-bottom: 30px;
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 1.31em;
  line-height: 1.143;
  padding-right: 22px;
  margin-bottom: 25px;
`;

export const Info = styled.div`
  margin-bottom: 40px;
  text-decoration: underline;
  font-size: 0.87em;
  display: flex;
  cursor: pointer;
`;

export const Question = styled.span`
  font-size: 1.25em;
  font-weight: 700;
`;

export const Icon = styled.img`
  width: 16px;
  height:16px;
  margin-right: 5px;
`;


export const IconThumb = styled.img`
  width: 36px;
`;

export  const RemainingDays = styled.div`
  margin-top: auto;
  display: flex;
  height: 50px;
  background-color: rgba(112, 112, 112, 0.302);
`;

export const Closing = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;  
  width: 47%;
  padding-right: 10px;
  color: #fff;
  font-size: 0.8em;
  position: relative;

  ::after {
    width: 0;
    height: 0;
    content: '';
    position: absolute;
    right: -7px;
    top: 42%;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 7px solid rgba(112, 112, 112, 0.502);
  }

`;

export const Remain = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;  
  width: 100%;
  padding-left: 15px;
  background-color: rgba(255, 255, 255, 0.702);
  color: rgb(70, 70, 70);
  font-size: 2.2em;
  font-weight: 300;
`;

export const Strong = styled.strong`
  font-weight: 700;
  padding-right: 10px;
`;