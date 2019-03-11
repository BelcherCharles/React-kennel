import React, { Component } from 'react'
import fired from "./fired-image.png"
import "./employees.css"

export default class EmployeeList extends Component {
    render () {
        return (
            <section className="employees">
            {
                this.props.employees.map(employees =>
                    <div key={employees.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={fired} className="icon--employees" />
                                {employees.name}
                                <a href="#"
                                    onClick={() => this.props.fireEmployee(employees.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}