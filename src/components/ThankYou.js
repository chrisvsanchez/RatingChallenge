import React from "react";
import { ReactComponent as Thanks } from "../Assets.js/ThankYou.svg";
import styled from "styled-components/macro";
import SelectedRating from "./SelectedRating";

const ThankYou = ({ rating }) => {
  return (
    <ThanksContainer>
      <Thanks />
      <SelectedRating rating={rating} />
      <ThankYouText>Thank you!</ThankYouText>
      <AppreciateYouText>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </AppreciateYouText>
    </ThanksContainer>
  );
};
const ThanksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ThankYouText = styled.h1`
  ont-family: "Overpass";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  @media (max-width: 375px) {
    font-size: 24px;
  }
`;
const AppreciateYouText = styled.span`
  font-family: "Overpass";
  font-style: normal;
  font-weight: 400;
  color: #969fad;
  line-height: 22px;
  font-size: 15px;
  width: 340px;
  text-align: center;
  @media (max-width: 375px) {
    font-size: 14px;
    width: 279px;
    line-height: 22px;
  }
`;
export default ThankYou;
