import React, { Component } from 'react'
import { Link } from "react-router-dom";
import removeOwner from "./removeOwner.png"
import "./owners.css"

export default class OwnerList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="addOwnerButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/owners/new")
                        }
                        }>
                        Add New Owner
                    </button>
                </div>
                <section className="employees"></section>
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={removeOwner} className="icon--Owners" />
                                {owner.name}

                                <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>

                                <a href="#"
                                    onClick={() => this.props.removeOwner(owner.id)}
                                    className="card-link">Remove Owner</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        </React.Fragment>
        )
    }
}