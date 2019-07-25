/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PetInfo from '../components/PetInfo/PetInfo';
import pets from '../mock/pets.json';

const findPageID = props => props.match.params.id;

export default class Pet extends Component {
  state = {
    pet: {},
  };

  componentDidMount() {
    const id = findPageID(this.props);

    this.setState({ pet: this.findPet(id) });
  }

  handleClickGoBack = () => {
    this.props.history.push('/pets');
  };

  findPet = id => {
    const pet = pets.find(item => item.id === id);

    return pet;
  };

  render() {
    const { pet } = this.state;

    return (
      <PetInfo
        image={pet.image}
        name={pet.name}
        age={pet.age}
        breed={pet.breed}
        gender={pet.gender}
        color={pet.color}
        description={pet.description}
        onClick={this.handleClickGoBack}
      />
    );
  }
}
