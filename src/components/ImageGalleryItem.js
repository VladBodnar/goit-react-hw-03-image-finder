import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ imagesArray, onStartModal }) => {
  return imagesArray.map(el => {
    return (
      <li
        onClick={() => onStartModal(el.id)}
        className={css.ImageGalleryItem}
        key={el.id}
      >
        <img
          className={css.ImageGalleryItemImage}
          src={el.webformatURL}
          alt="imag"
          loading="lazy"
        />
      </li>
    );
  });
};

ImageGalleryItem.propTypes = {
  imagesArray: PropTypes.array,
  onStartModal: PropTypes.func,
};

export default ImageGalleryItem;
