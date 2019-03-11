import React, { Component } from "react"
import "./owners.css"
import removeOwner from './removeOwner.png'
// import dog from "./DogIcon.png"


export default class OwnerDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const owner = this.props.owners.find(o => o.id === parseInt(this.props.match.params.ownerId)) || {}
            console.log(owner)
        return (
            <section className="owner">
                <div key={owner.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                        <img src={removeOwner} className="icon--Owners" />
                            {owner.name}</h4>
                            <br></br>

                        <a href="#"
                            onClick={() => this.props.removeOwner(owner.id)
                                            .then(() => this.props.history.push("/owners"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}