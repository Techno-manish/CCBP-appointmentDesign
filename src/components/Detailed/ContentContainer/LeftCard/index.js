import styled from "styled-components";
import SelfIntro from "./SelfIntroCard";

const LeftCard = () => (
  <RightCardContainer>
    <SelfIntro />
    <SelfIntro />
    <SelfIntro />
    <SelfIntro />
  </RightCardContainer>
);
export default LeftCard;

const RightCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  gap: 20px;
`;
