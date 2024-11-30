import styled from "styled-components";
import StarRating from "../StarRating";
import AppointmentButton from "../../AppointmentButton";

const Banner = () => (
  <BannerContainer>
    <BannerUpperSection></BannerUpperSection>
    <BannerLowerSection>
      <AvatarContainer></AvatarContainer>
      <UserDetails>
        <Name>Dr. Bruce Willis</Name>
        <Specialization>Gynecologist</Specialization>
        <RatingContainer>
          <span>4.2</span>
          <StarRating />
        </RatingContainer>
      </UserDetails>
      <PopularityContainer>
        <StatusItemContainer>
          <StatusItemName>Followers</StatusItemName>
          <StatusItemValue>850</StatusItemValue>
        </StatusItemContainer>
        <StatusItemContainer>
          <StatusItemName>Following</StatusItemName>
          <StatusItemValue>18K</StatusItemValue>
        </StatusItemContainer>
        <StatusItemContainer>
          <StatusItemName>Posts</StatusItemName>
          <StatusItemValue>250</StatusItemValue>
        </StatusItemContainer>
      </PopularityContainer>
      <AppointmentButton text={"Book an Appointment"}></AppointmentButton>
    </BannerLowerSection>
  </BannerContainer>
);
export default Banner;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d8d8d8;
  border-radius: 12px;
  margin-top: 50px;
`;

const BannerUpperSection = styled.div`
  width: 100%;
  height: 100px;
  background-color: #eaf2ea;
  background-image: url("/assets/BannerUpperImage.png");
  background-size: cover;
  background-position: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  opacity: 0.4;
`;
const BannerLowerSection = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fffbf2;
  background-size: cover;
  background-position: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AvatarContainer = styled.div`
  height: 100px;
  width: 100px;
  background-image: url("/assets/Avatar.png");
  background-color: #fffbf2;
  background-size: cover;
  background-position: center;
  border: 4px solid #fff;
  border-radius: 100%;
  position: absolute;
  top: 130px;
  left: 80px;
  transform: translateX(-50%);
  z-index: 100;
  background-color: #d8d8d8;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 140px;
`;

const Name = styled.h1`
  font-size: 18px;
`;

const Specialization = styled.p`
  font-size: 14px;
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 5px;
  font-size: 12px;
`;

const PopularityContainer = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
  top: -10px;
`;
const StatusItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StatusItemName = styled.h5`
  color: #3a643b;
`;
const StatusItemValue = styled.h4`
  font-weight: bold;
`;
