import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={css.ImageGalleryItem} key={image.id}>
      <img
        className={css.ImageGalleryItemImage}
        src={image.webformatURL}
        alt="imag"
        loading="lazy"
        onClick={onClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.object.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
