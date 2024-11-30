import styled from "styled-components";

const slotData = [
  { mode: "Video Consultation", time: "Rs 800", status: false },
  { mode: "Chat Consultation", time: "Free", status: false },
];

const Card = () => (
  <ProfileCard>
    <AvatarContainer>
      <Avatar src="/assets/HomeAvatar.png" alt="Doctor Avatar" />
      <Badge>4.5 ⭐</Badge>
    </AvatarContainer>
    <DoctorName>Dr. Prerna Narang</DoctorName>
    <DetailsContainer>
      <Detail>
        <IconPlaceholder>📌</IconPlaceholder>
        <p>Male/Female Infertility</p>
      </Detail>
      <Detail>
        <IconPlaceholder>📆</IconPlaceholder>
        <p>7 years of experience</p>
      </Detail>
      <Detail>
        <IconPlaceholder>💬</IconPlaceholder>
        <p>Speaks Hindi, English, Marathi</p>
      </Detail>
      <SlotList>
        {slotData.map((each, index) => (
          <SlotDiv key={index}>
            <SlotMode>{each.mode}</SlotMode>
            <SlotTime>{each.time}</SlotTime>
          </SlotDiv>
        ))}
      </SlotList>
    </DetailsContainer>
    <ButtonContainer>
      <ButtonWhite>Contact</ButtonWhite>
      <ButtonGreen>Book Now</ButtonGreen>
    </ButtonContainer>
  </ProfileCard>
);

export default Card;

const ProfileCard = styled.div`
  background-color: #fff7e2;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 15px;
  max-width: 300px;
  text-align: center;
  flex: 1 1 calc(33.333% - 20px);
  margin-bottom: 20px;
`;

const AvatarContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #ddd;
`;

const Badge = styled.div`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000; /* Set the background color to black */
  color: #fff; /* Set the star color to #F79624 */
  font-size: 10px;
  font-weight: bold;
  padding: 3px 6px;
  border-radius: 10px;
`;

const DoctorName = styled.h3`
  font-size: 16px;
  color: #333;
  margin: 10px 0;
`;

const DetailsContainer = styled.div`
  text-align: center;
  margin: 15px 0;
`;

const Detail = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  margin: 8px 0;

  p {
    margin: 0;
    font-size: 12px;
    color: #555;
  }
`;

const IconPlaceholder = styled.span`
  font-size: 14px;
  color: #3a643b;
`;

const SlotList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
`;

const SlotDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background-color: #f9f9f9;
  width: 45%;
`;

const SlotMode = styled.div`
  font-size: 12px;
  color: #3a643b;
`;

const SlotTime = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #3a643b;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
`;

const ButtonWhite = styled.button`
  background-color: #fff;
  color: #3a643b;
  border: 1px solid #3a643b;
  border-radius: 5px;
  padding: 8px 15px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ButtonGreen = styled.button`
  background-color: #3a643b;
  color: #fff;
  border: 1px solid #3a643b;
  border-radius: 5px;
  padding: 8px 15px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #2f5030;
  }
`;
