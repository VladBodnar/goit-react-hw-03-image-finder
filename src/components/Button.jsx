import React, { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

class LoadMore extends Component {
  state = {
    visible: true,
  };

  render() {
    const { totalImg, imagesArray } = this.props.state;
    const { pageNumberUpdate } = this.props;
    if (totalImg > 0 && totalImg - imagesArray.length > 0) {
      return (
        <div className={css.ButtonBox}>
          <button
            className={css.Button}
            onClick={pageNumberUpdate}
            type="button"
          >
            <span>Load More</span>
          </button>
        </div>
      );
    }
    return;
  }
}

LoadMore.propTypes = {
  totalImg: PropTypes.number,
  imagesArray: PropTypes.array,
  pageNumberUpdate: PropTypes.func,
};

export default LoadMore;
