import styled from "styled-components";
import Card from "../Card";

const CardContainer = () => (
  <Container>
    <Card />
    <Card />
    <Card />
  </Container>
);

export default CardContainer;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  max-width: 1200px;
  margin: 0 auto;
`;
