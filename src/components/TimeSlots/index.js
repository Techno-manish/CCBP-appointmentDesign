import styled from "styled-components";

const TimeSlots = ({ content }) => {
  const { time, status } = content;

  return <TimeSlot status={status}>{time}</TimeSlot>;
};

export default TimeSlots;

const TimeSlot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #e5e5e5;
  background-color: ${(props) => (props.status ? "#3A643B" : "#fff")};
  color: ${(props) => (props.status ? "#fff" : "#000")};
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;
