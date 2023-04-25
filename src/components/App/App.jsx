import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import css from './App.module.css';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';
import Spinner from '../Loader/Loader';
import LoadMore from '../Button/Button';
import getImages from '../../services/api';

class App extends Component {
  state = {
    searchName: null,
    imagesArray: [],
    page: 1,
    activeImg: null,
    totalImg: 0,
    isLoad: false,
    error: null,
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName, page: 1 });
  };

  pageNumberUpdate = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  componentDidUpdate(_, prevState) {
    const { searchName, page } = this.state;
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoad: true });
      getImages(searchName, page)
        .then(res => {
          const images = res.data.hits.map(
            ({ id, tags, webformatURL, largeImageURL }) => ({
              id,
              tags,
              webformatURL,
              largeImageURL,
            })
          );
          this.setState(prevState => ({
            imagesArray: [...prevState.imagesArray, ...images],
            totalImg: res.data.totalHits,
          }));
        })
        .catch(error => {
          this.setState({ error: error.code });
        })
        .finally(() => {
          this.setState({ isLoad: false });
        });
    }
  }

  onStartModal = activeImg => {
    this.setState({ activeImg });
  };
  onStopModal = () => {
    this.setState({ activeImg: null });
  };

  render() {
    const { imagesArray, isLoad, activeImg, totalImg, error } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {imagesArray.length > 0 && (
          <ImageGallery imagesArray={imagesArray} onClick={this.onStartModal} />
        )}
        {imagesArray.length !== totalImg && isLoad === false && (
          <LoadMore pageNumberUpdate={this.pageNumberUpdate} />
        )}
        {isLoad === true && <Spinner />}
        <p>{error}</p>
        {activeImg !== null && (
          <Modal activeImg={activeImg} onStopModal={this.onStopModal} />
        )}
      </div>
    );
  }
}
export default App;
