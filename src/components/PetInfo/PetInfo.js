import React from 'react';
import PropTypes from 'prop-types';
import BackButton from '../BackButton/BackButton';
import style from './PetInfo.module.css';

const PetInfo = ({
  image,
  name,
  age,
  breed,
  gender,
  color,
  description,
  onClick,
}) => (
  <div className={style.container}>
    <BackButton onClick={onClick} />
    <h4 className={style.title}>All about {name}</h4>
    <div className={style.imgWrapper}>
      <img src={image} alt={name} className={style.img} />
    </div>
    <div className={style.infoWrapper}>
      <p className={style.info}>
        <strong>Age:</strong> {age}
      </p>
      <p className={style.info}>
        <strong>Gender:</strong> {gender}
      </p>
      <p className={style.info}>
        <strong>Color:</strong> {color}
      </p>
      <p className={style.info}>
        <strong>Breed:</strong> {breed}
      </p>
    </div>
    <p className={style.desc}>{description}</p>
  </div>
);

PetInfo.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  breed: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PetInfo;
