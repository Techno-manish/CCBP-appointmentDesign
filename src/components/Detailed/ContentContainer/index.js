import styled from "styled-components";
import RightCard from "./RightCard";
import LeftCard from "./LeftCard";

const ContentContainer = () => (
  <Container>
    <LeftCard />
    <RightCard />
  </Container>
);
export default ContentContainer;

const Container = styled.div`
  display: flex;
  gap: 20px;
`;
