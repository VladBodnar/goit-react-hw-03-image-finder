import React, { Component } from 'react';
import Searchbar from './Searchbar';
import css from './App.module.css';
import ImageGallery from './ImageGallery';
class App extends Component {
  state = {
    searchName: null,
  };
  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchName={this.state.searchName} />
      </div>
    );
  }
}
export default App;
