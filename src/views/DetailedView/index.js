import "./index.css";
import styled from "styled-components";
import Banner from "../../components/Detailed/Banner";
import ContentContainer from "../../components/Detailed/ContentContainer";

const DetailedView = () => (
  <>
    <MainContainer>
      <Banner />
      <ContentContainer />
    </MainContainer>
  </>
);

export default DetailedView;

const MainContainer = styled.nav`
  margin: 0 auto;
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;
