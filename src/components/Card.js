import React, { useState } from "react";
import styled from "styled-components/macro";
import ThankYou from "./ThankYou.js";
import ChooseRating from "./ChooseRating";
const Card = () => {
  const [ratingState, setRatingState] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const ratings = [1, 2, 3, 4, 5];
  const handleClick = (num) => {
    setActiveId(num);
  };
  const handleSubmit = () => {
    setRatingState(!ratingState);
  };
  return (
    <CardWrapper>
      {ratingState ? (
        <ThankYou rating={activeId} />
      ) : (
        <ChooseRating
          ratings={ratings}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          activeId={activeId}
        />
      )}
    </CardWrapper>
  );
};

export default Card;

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
