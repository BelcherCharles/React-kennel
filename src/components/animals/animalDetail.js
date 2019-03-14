import React, { Component } from "react"
import "./animal.css"
// import dog from "./DogIcon.png"


export default class AnimalDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) ||
        {name: "", id: "", speciesId: "", species: { id: "", name: "", image: "" } }

        console.log("Here is console log", animal)
        // console.log(animal.species)
        // console.log(animal.species.name)
        return (
            <section className="animal">
                <div key={animal.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={animal.species.image} className="icon--image" />
                            {animal.name}
                            <br></br>
                            {animal.species.name}</h4>

                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(`/animals/${animal.id}/edit`);
                            }}
                        >
                            Edit
                        </button>

                        <br></br>

                        <a href="#"
                            onClick={() => this.props.deleteAnimal(animal.id)
                                .then(() => this.props.history.push("/animals"))}
                            className="card-link">Delete</a>


                    </div>
                </div>
            </section>
        )
    }
}
