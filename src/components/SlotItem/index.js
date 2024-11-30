import styled from "styled-components";

const SlotItem = (props) => {
  const { content } = props;
  const { mode, time, status } = content;
  return (
    <SlotItemContainer status={status}>
      <TimeText status={status}>{mode}</TimeText>
      <p>{time}</p>
    </SlotItemContainer>
  );
};
export default SlotItem;

const SlotItemContainer = styled.div`
  border: 1px solid #e5e5e5;
  padding: 5px;
  background-color: ${(props) => (props.status ? "#F2FBF2" : "#fff")};
  width: 28%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  border-radius: 8px;
`;

const TimeText = styled.p`
  color: ${(props) => (props.status ? "#3A643B" : "#000")};
  font-weight: bold;
`;
