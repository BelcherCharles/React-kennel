// import React, { Component } from 'react'
// import { Link } from "react-router-dom";
// // import dog from "./DogIcon.png"
// import "./animal.css"

// export default class AnimalList extends Component {
//     state = {
//         animalsToRender: []
//     };

//     filterAnimals = evt => {
//         const matchingAnimals = this.props.animals.filter(
//             animal => animal.speciesId === evt.target.value
//         );
//         this.setState({ animalsToRender: matchingAnimals });
//         console.log(matchingAnimals)
//     };

//     render() {
//         const animalsToRender = this.state.animalsToRender.length > 0 ? this.state.animalsToRender : this.props.animals;
//         return (
//             <div>
//                 <section>
//                     <select onClick={this.filterAnimals}>
//                         {this.props.species.map(singleSpecies => {
//                             return (
//                                 <option key={singleSpecies.id} value={singleSpecies.id}>
//                                     View all {singleSpecies.name}
//                                 </option>
//                             );
//                         })}
//                     </select>
//                 </section>



//                 {/* {animalsToRender.map(animal =>
//                      console.log(animal))}
//                      <section key={animalsToRender.id} className="card">
//                          <section className="card-body">
//                              <h5 className="card-title">
//                                  <img src={animalsToRender.species.image} className="icon--image" />
//                                  {animalsToRender.name}
//                                  <br></br>
//                                  {animalsToRender.species.name}

//                                  <Link className="nav-link" to={`/animals/${animalsToRender.id}`}>Details</Link>
//                              </h5>
//                          </section>
//                      </section>
//                 )
//             } */}
//         </div>
//         )
//     }
// }

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./animal.css";

export default class AnimalList extends Component {
  state = {
    animalsToRender: []
  };

  filterAnimals = evt => {
    const matchingAnimals = this.props.animals.filter(
      animal => animal.speciesId === parseInt(evt.target.value)
    );
    console.log(evt.target.value)
    this.setState({ animalsToRender: matchingAnimals });
  };




  render() {
    const animalsToRender = this.state.animalsToRender.length > 0 ? this.state.animalsToRender : this.props.animals;
    return (
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
            //   console.log(animal)
            <div key={animal.id} className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <img
                    className="icon--image"
                    src={animal.species.image}
                    alt="picture of animal"
                  />
                  <p>{animal.name}</p>
                  <p>{animal.species.name}</p>
                  {/* <p>Owner: {animal.owners.name}</p> */}

                  <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>

                  <button
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.props.deleteAnimal(animal.id)}
                  >
                    Delete
                  </button>
                </h5>
              </div>
            </div>
          ))}
        </section>
      </section>
    );
  }
}
