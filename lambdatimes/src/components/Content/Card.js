import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  const {author, headline, img, tab} = props;
  return (
    <div className="card" data-tab = {tab}>
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img}  alt = {""}/>
        </div>
        <span>By {author}</span>
      </div>
    </div>
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
