import styled from "styled-components";
import CardContainer from "../../components/CardContainer";

const HomeView = () => (
  <>
    <BannerImage />
    <FormContainer>
      <StyledForm>
        <StyledSelect id="expertise" name="expertise">
          <option value="">Expertise</option>
          <option value="cardiology">Cardiology</option>
          <option value="dermatology">Dermatology</option>
        </StyledSelect>

        <StyledSelect id="gender" name="gender">
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </StyledSelect>

        <StyledSelect id="fees" name="fees">
          <option value="">Fees</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </StyledSelect>

        <StyledSelect id="languages" name="languages">
          <option value="">Languages</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
        </StyledSelect>

        <AllFiltersSelect id="all-filters" name="all-filters">
          <option value="">All Filters</option>
          <option value="filter1">Filter 1</option>
          <option value="filter2">Filter 2</option>
        </AllFiltersSelect>
      </StyledForm>
      <CardContainer />
    </FormContainer>
  </>
);

export default HomeView;

const BannerImage = styled.div`
  background-image: url("/assets/FrameBanner.png");
  background-size: cover;
  background-position: center;
  height: 200px;
  width: 100%;
`;

const FormContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  margin: 0 auto;
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const StyledSelect = styled.select`
  width: 150px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  background-color: #f3f3f3;
  cursor: pointer;
`;

const AllFiltersSelect = styled.select`
  width: 150px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  background-color: #dceedc;
  cursor: pointer;
`;
