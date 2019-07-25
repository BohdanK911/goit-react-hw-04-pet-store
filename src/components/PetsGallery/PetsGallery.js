import React from 'react';
import PropTypes from 'prop-types';
import style from './PetsGallery.module.css';
import PetItem from '../PetItem/PetItem';

const PetsGallery = ({ pets }) => (
  <section className={style.wrapper}>
    <ul className={style.list}>
      {pets.map(pet => (
        <li className={style.listItem} key={pet.id}>
          <PetItem name={pet.name} imgSrc={pet.image} id={pet.id} />
        </li>
      ))}
    </ul>
  </section>
);

PetsGallery.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      breed: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PetsGallery;
