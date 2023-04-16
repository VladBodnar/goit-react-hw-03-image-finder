import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './Loader';
import LoadMore from './Button';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from './Modal';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    imagesArray: [],
    page: 1,
    per_page: 12,
    apiKey: '31238546-2d57ca86913699ca663b56d8b',
    activeImg: null,
    totalImg: null,
    status: false,
    error: null,
    showModal: false,
  };

  pageNumberUpdate = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchName !== this.props.searchName) {
      this.setState({
        imagesArray: [],
      });
    }
    if (
      prevProps.searchName !== this.props.searchName ||
      this.state.page > prevState.page
    ) {
      this.setState({ status: true });

      axios
        .get(
          `https://pixabay.com/api/?q=${this.props.searchName}&page=${this.state.page}&key=${this.state.apiKey}&image_type=photo&orientation=horizontal&per_page=${this.state.per_page}`
        )
        .then(res => {
          this.setState(prevState => {
            return {
              imagesArray: [...prevState.imagesArray, ...res.data.hits],
              totalImg: res.data.total,
            };
          });
        })
        .catch(error => {
          this.setState({ error: error.code });
        });
      this.setState({ status: false });
    }
  }

  onStartModal = event => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
    this.setState({
      activeImg: this.state.imagesArray.find(imagObj => imagObj.id === event)
        .largeImageURL,
    });
  };
  onStopModal = () => {
    this.setState({ activeImg: null });
  };

  render() {
    const { imagesArray, activeImg, status } = this.state;
    return (
      <div>
        <ul className={css.ImageGallery}>
          <ImageGalleryItem
            imagesArray={imagesArray}
            onStartModal={this.onStartModal}
          />
        </ul>
        <Spinner status={status} />
        <LoadMore state={this.state} pageNumberUpdate={this.pageNumberUpdate} />
        {activeImg !== null && (
          <Modal activeImg={activeImg} onStopModal={this.onStopModal} />
        )}

        <p>{this.state.error}</p>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  searchName: PropTypes.string,
};

export default ImageGallery;
