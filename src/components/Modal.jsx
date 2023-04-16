import React, { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';
document.querySelector('#root');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onStopModal();
    }
  };

  onOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onStopModal();
    }
  };
  render() {
    return (
      <div onClick={this.onOverlayClick} className={css.Overlay}>
        <div className={css.Modal}>
          <img src={this.props.activeImg} alt={this.props.activeImg} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  activeImg: PropTypes.string,
  onStopModal: PropTypes.func,
};

export default Modal;
