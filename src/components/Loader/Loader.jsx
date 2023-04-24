import React from 'react';
import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Spinner(status) {
  return (
    <div className={css.Spinner}>
      <RotatingLines
        strokeColor="green"
        strokeWidth="5"
        animationDuration="1"
        width="96"
        visible={status.status}
      />
    </div>
  );
}

Spinner.propTypes = {
  status: PropTypes.bool,
};
