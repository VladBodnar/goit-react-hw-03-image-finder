import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

const ImageGallery = ({ imagesArray, onClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {imagesArray.map(image => {
        return (
          <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
        );
      })}
    </ul>
  );
};



ImageGallery.propTypes = {
  imagesArray: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.object.isRequired,
    key: PropTypes.number.isRequired,    
  })), 
  onClick: PropTypes.func.isRequired,
};


export default ImageGallery;
