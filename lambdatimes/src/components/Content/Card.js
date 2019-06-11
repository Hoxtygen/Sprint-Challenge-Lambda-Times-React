import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"

const SingleCard = styled.div  `
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`

const Headline = styled.div `
  font-size: 25px;
  font-family: Didot, serif;
`

const Author = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;

  span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`

const ImageContainer = styled.div `
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;

  img   {
    width: 40px;
  }
`

const Card = props => {
  const {author, headline, img, tab} = props;
  return (
    <SingleCard data-tab = {tab}>
      <Headline>{headline}</Headline>
      <Author>
        <ImageContainer>
          <img src={img}  alt = {""}/>
        </ImageContainer>
        <span>By {author}</span>
      </Author>
    </SingleCard>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
author: PropTypes.string.isRequired,
headline: PropTypes.string.isRequired,
img: PropTypes.string.isRequired,
tab: PropTypes.string.isRequired
}
export default Card;
