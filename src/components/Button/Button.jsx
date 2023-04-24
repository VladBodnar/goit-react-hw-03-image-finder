import React from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

const LoadMore = ({ pageNumberUpdate }) => {
  return (
    <div className={css.ButtonBox}>
      <button className={css.Button} onClick={pageNumberUpdate} type="button">
        <span>Load More</span>
      </button>
    </div>
  );
};

LoadMore.propTypes = {
  pageNumberUpdate: PropTypes.func,
};

export default LoadMore;
