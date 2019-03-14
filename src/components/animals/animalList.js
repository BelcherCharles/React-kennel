import React, { Component } from "react";
import { Link } from "react-router-dom";
import AnimalCard from './animalCard'
import "./animal.css";

export default class AnimalList extends Component {
  state = {
    animalsToRender: []
  };

  filterAnimals = evt => {
    const matchingAnimals = this.props.animals.filter(
      animal => animal.speciesId === parseInt(evt.target.value)

    );
    if (matchingAnimals.length !== 0) {
      // console.log(matchingAnimals)
      this.setState({ animalsToRender: matchingAnimals });
    } else {
      // console.log(matchingAnimals)
      this.setState({ animalsToRender: [] })
    }
  };




  render() {
    const animalsToRender = this.state.animalsToRender.length > 0 ? this.state.animalsToRender : []
    // this.props.animals;
    return (
      <React.Fragment>
        <div className="animalButton">
          <button type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/animals/new")
            }
            }>
            Admit Animal
                    </button>
        </div>
        <section>
          <select onChange={this.filterAnimals}>

            {this.props.species.map(singleSpecies => {
              //   console.log(singleSpecies.id)
              return (
                <option key={singleSpecies.id} value={singleSpecies.id}>
                  View all {singleSpecies.name}s
              </option>
              );
            })}
          </select>
          <section className="animals">
            {animalsToRender.map(animal => (
          < AnimalCard key={animal.id} animal={animal} {...this.props} />



            ))}
          </section>
        </section>
      </React.Fragment>
    );
  }
}
