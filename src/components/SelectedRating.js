import React from "react";
import styled from "styled-components/macro";
const SelectedRating = ({ rating }) => {
  console.log(rating);
  return (
    <Wrapper>
      <RatingText>{`You Selected ${rating} out of 5`}</RatingText>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  width: auto;
  border-radius: 22.5px;
  background-color: #262e38;
  font-size: 14px;
  color: #fc7614;
  margin-top: 24px;
  font-family: Overpass;
  font-weight: 400;
  @media (max-width: 375px) {
  }
`;
const RatingText = styled.span`
  line-height: 24px;
  font-size: 15px;
  letter-spacing: 0px;
  text-align: center;
  padding: 5px 12px;
`;

export default SelectedRating;
