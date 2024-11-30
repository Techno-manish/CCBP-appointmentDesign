import styled from "styled-components";
import ContainerTemplate from "../../../../ContainerTemplate";

const languages = ["English", "Hindi", "Telgu"];
const SelfIntro = () => (
  <ContainerTemplate text={"A Little About Me"}>
    <p>
      Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat.
      love to work with all my hospital staff and seniour doctors. Completed my
      graduation in Gynaecologist Medicine from the
    </p>
    <SessionModeBreak>
      <BreakLine />
      <SessionText>Read More</SessionText>
    </SessionModeBreak>
    <LanguageContainer>
      <h4>Language Spoken</h4>
      <LanguageListContainer>
        {languages.map((each) => (
          <LannguageTab>{each}</LannguageTab>
        ))}
      </LanguageListContainer>
    </LanguageContainer>
  </ContainerTemplate>
);
export default SelfIntro;
const SessionModeBreak = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const SessionText = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin-left: 10px;
  text-decoration: underline;
`;

const BreakLine = styled.hr`
  border: 0;
  border-top: 1px solid #e8e8e8;
  margin: 0;
  width: 60%;
`;

const LanguageContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;
const LanguageListContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

const LannguageTab = styled.li`
  list-style-type: none;
  border: 1px solid #2e37a40a;
  background-color: #2e37a40a;
  padding: 5px 10px;
  border-radius: 12px;
`;
