import styled from "styled-components";

const AppointmentButton = (props) => {
  const { text } = props;
  return <BookAppointmentButton>{text}</BookAppointmentButton>;
};
export default AppointmentButton;

const BookAppointmentButton = styled.button`
  padding: 10px 25px;
  position: relative;
  top: -10px;
  right: 50px;
  background-color: #3a643b;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
