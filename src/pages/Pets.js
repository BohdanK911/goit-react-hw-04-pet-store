import React from 'react';
import PetsGallery from '../components/PetsGallery/PetsGallery';
import pets from '../mock/pets.json';

const style = {
  margin: '40px auto',
  textAlign: 'center',
};

const Pets = () => (
  <div>
    <h1 style={style}>Pets</h1>
    <PetsGallery pets={pets} />
  </div>
);

export default Pets;
