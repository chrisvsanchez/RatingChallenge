import React, { useState } from "react";
import styled from "styled-components/macro";
import { ReactComponent as Star } from "../Assets.js/Star.svg";
import { ReactComponent as Thanks } from "../Assets.js/ThankYou.svg";
import SelectedRating from "./SelectedRating";
const Card = () => {
  const [ratingState, setRatingState] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const rating = [1, 2, 3, 4, 5];
  const handleClick = (num) => {
    setActiveId(num);
  };
  const handleSubmit = () => {
    setRatingState(!ratingState);
  };
  return (
    <CardWrapper>
      {ratingState ? (
        <>
          {/* thanks */}
          <ThanksContainer>
            <Thanks />
            <SelectedRating rating={activeId} />
            <ThankYou>Thank you!</ThankYou>
            <AppreciateYouText>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </AppreciateYouText>
          </ThanksContainer>{" "}
        </>
      ) : (
        <>
          <StarContainer>
            <Star />
          </StarContainer>
          <Title>How did we do?</Title>
          <RatingDetails>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </RatingDetails>
          <CircleContainer>
            {rating.map((num) => (
              <RatingScore
                active
                key={num}
                onClick={() => handleClick(num)}
                className={activeId === num ? `active` : ""}
              >
                {num}
              </RatingScore>
            ))}
          </CircleContainer>
          <Button onClick={() => handleSubmit()}>submit</Button>
        </>
      )}
    </CardWrapper>
  );
};

export default Card;

const Title = styled.h1`
  color: white;
  margin: 0 0 7px 0;
  font-size: 28px;
  @media (max-width: 375px) {
    font-size: 24px;
  }
`;
const ThankYou = styled.h1`
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
const RatingDetails = styled.span`
  font-family: "Overpass";
  font-style: normal;
  font-weight: 400;
  color: #969fad;
  line-height: 160%;
  margin-bottom: 24px;
  font-size: 15px;
  padding: 0 10px 0 0;
  width: 340px;
  @media (max-width: 375px) {
    font-size: 14px;
    width: 279px;
    line-height: 22px;
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
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-family: Overpass;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  border-radius: 30px;

  padding: 32px 40px 32px 32px;

  flex-grow: 1;
  flex-shrink: 1;

  min-width: 227px;
  max-width: 340px;
  m-height: 416px;
  @media (max-width: 375px) {
    height: auto;
    margin: 24px;
  }
`;
const RatingScore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #262e38;
  font-size: 16px;
  height: 51px;
  width: 51px;
  &:hover {
    color: white;
    background-color: #7c8798;
  }
  &.active {
    color: white;
    background-color: #fc7614;
  }
  @media (max-width: 375px) {
    font-size: 14px;
    width: 42px;
    height: 42px;
  }
`;
const CircleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  color: #7c8798;
  gap: 21px;
  margin-bottom: 32px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  @media (max-width: 375px) {
    gap: 9px;
  }
`;
const ThanksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #262e38;
  height: 51px;
  width: 51px;
  margin-bottom: 30px;
  @media (max-width: 375px) {
    width: 40px;
    height: 40px;
  }
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fc7614;
  border-radius: 22.5px;
  width: 100%;
  height: 45px;
  font-family: "Overpass";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 1.86667px;
  color: #ffffff;
  text-transform: uppercase;
  &:hover {
    background-color: #ffffff;
    color: #fc7614;
  }
  @media (max-width: 375px) {
    /* width: 327px; */
  }
`;
