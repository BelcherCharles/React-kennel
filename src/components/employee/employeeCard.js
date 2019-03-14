import React, { Component } from "react"
import { Link } from "react-router-dom"
import employee from './employee.png'
import AnimalCard from '../animals/animalCard'


import "./employees.css"

export default class EmployeeCard extends Component {
    render() {
        return (
            <div key={this.props.employee.id} className="card">
            <div className="card-body">
                <h3 className="card-title">
                    <img src={employee} className="icon--employees" />
                    <p>{this.props.employee.name}</p>


                    <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>

                    <a href="#"
                        onClick={() => this.props.fireEmployee(employee.id)}
                        className="card-link">Delete</a>
                </h3>
                <p className="card-subtitle mb-2 text-muted">Caretaker For</p>
                    <div className="animals--caretaker">
                        {
                            this.props.animals
                                .filter(anml => anml.employeeId === this.props.employee.id)
                                .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                        }
                    </div>
            </div>
        </div>
        )
    }
}