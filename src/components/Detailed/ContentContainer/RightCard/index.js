import styled from "styled-components";
import SlotItem from "../../../SlotItem";
import TimeSlots from "../../../TimeSlots";
import AppointmentButton from "../../../AppointmentButton";

const SessionMode = [
  { mode: "In-Clinic", time: "45 mins", status: false },
  { mode: "Video", time: "45 mins", status: true },
  { mode: "Chat", time: "45 mins", status: false },
];

const timeSlots = [
  { mode: "Mon, 10 Oct", time: "10 slots", status: true },
  { mode: "Tue, 11 Oct", time: "02 slots", status: false },
  { mode: "Wed, 12 Oct", time: "05 slots", status: false },
];

const morningTime = [
  { time: "09:00 AM", status: false },
  { time: "09:30 AM", status: false },
  { time: "10:00 AM", status: false },
  { time: "10:15 AM", status: false },
  { time: "10:45 AM", status: false },
  { time: "11:00 AM", status: true },
];

const eveningTime = [
  { time: "04:00 PM", status: false },
  { time: "04:15 PM", status: false },
  { time: "04:30 PM", status: false },
  { time: "04:45 PM", status: false },
  { time: "05:15 PM", status: false },
];
const RightCard = () => (
  <RightCardContainer>
    <AppointmentFeeContainer>
      <AppointmentFeeText>Appointment Fee</AppointmentFeeText>
      <AppointmentFeeAmount>₹699.0</AppointmentFeeAmount>
    </AppointmentFeeContainer>
    <SessionModeBreak>
      <SessionText>Select your mode of session</SessionText>
      <BreakLine />
    </SessionModeBreak>
    <SlotItemContainer>
      {SessionMode.map((each) => (
        <SlotItem key={each.mode} content={each} />
      ))}
    </SlotItemContainer>
    <SessionModeBreak>
      <SessionText>Pick a time slot</SessionText>
      <BreakLine />
    </SessionModeBreak>
    <SlotItemContainer>
      {timeSlots.map((each) => (
        <SlotItem key={each.mode} content={each} />
      ))}
    </SlotItemContainer>
    <div>
      <h4 style={{ marginLeft: "10px" }}>Morning</h4>
      <TimeSlotContainer>
        {morningTime.map((each) => (
          <TimeSlots key={each.time} content={each} />
        ))}
      </TimeSlotContainer>
    </div>
    <div style={{ marginTop: "20px" }}>
      <h4 style={{ marginLeft: "10px" }}>Evening</h4>
      <TimeSlotContainer>
        {eveningTime.map((each) => (
          <TimeSlots key={each.time} content={each} />
        ))}
      </TimeSlotContainer>
    </div>
    <RightAppointmentButton>
      <AppointmentButton text={"Make an appointment"} />
    </RightAppointmentButton>
  </RightCardContainer>
);

export default RightCard;

const RightCardContainer = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 20px 10px;
  height: 100%;
  width: 50%;
`;

const AppointmentFeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding: 5px 10px;
`;

const AppointmentFeeText = styled.p`
  font-size: 14px;
  color: #000;
`;

const AppointmentFeeAmount = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #3a643b;
`;

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
`;

const BreakLine = styled.hr`
  border: 0;
  border-top: 1px solid #e8e8e8;
  margin: 0;
  width: 60%;
`;

const SlotItemContainer = styled.ul`
  display: flex;
  gap: 10px;
  list-style-type: none;
`;

const TimeSlotContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 20px;
  margin-left: 10px;
`;
const RightAppointmentButton = styled.div`
  position: relative;
  left: 40%;
  margin-top: 20px;
`;
