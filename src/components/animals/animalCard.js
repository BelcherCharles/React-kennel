import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './animal.css'

export default class AnimalCard extends Component {

    render() {
        return (

            <div key={this.props.animal.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <img
                            className="icon--image"
                            src={this.props.animal.species.image}
                            alt="picture of animal"
                        />

                        <p>{this.props.animal.name}</p>
                        <p>{this.props.species.name}</p>
                        <p>{this.props.animal.breed}</p>
                        <p>Caregiver:{this.props.animal.employeeId}</p>
                        {/* <p>Owner: {animal.owners.name}</p> */}

                        <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>

                        {/* <button
              className="btn btn-danger"
              href="#"
              onClick={() => this.props.deleteAnimal(animal.id)}
            >
              Delete
          </button> */}
                    </h5>
                </div>
            </div>
        )
    }
}