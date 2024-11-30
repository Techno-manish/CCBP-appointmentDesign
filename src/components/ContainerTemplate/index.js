import styled from "styled-components";

const ContainerTemplate = (props) => {
  const { text, children } = props; // `children` allows for dynamic content
  return (
    <TemplateContainer>
      <HeaderContainer>
        <h5>{text}</h5>
      </HeaderContainer>
      <ContentContainer>{children}</ContentContainer>
    </TemplateContainer>
  );
};

export default ContainerTemplate;

// Styled Components
const TemplateContainer = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 12px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

const ContentContainer = styled.div`
  padding: 15px;
`;
