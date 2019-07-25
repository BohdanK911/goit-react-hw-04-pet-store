import React from 'react';
import PropTypes from 'prop-types';
import style from './BackButton.module.css';

const BackButton = ({ onClick }) => (
  <button type="button" className={style.btn} onClick={onClick}>
    Go back
  </button>
);

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackButton;
