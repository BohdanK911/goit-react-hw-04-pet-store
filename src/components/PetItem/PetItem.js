import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './PetItem.module.css';

const PetItem = ({ name, imgSrc, id }) => (
  <Link to={`pets/${id}`} className={style.link}>
    <div className={style.item}>
      <div className={style.imgWrapper}>
        <img src={imgSrc} alt={name} className={style.img} />
      </div>
      <h3 className={style.name}>{name}</h3>
    </div>
  </Link>
);

PetItem.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PetItem;
