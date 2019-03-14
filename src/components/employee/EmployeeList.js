import React, { Component } from 'react'
import employee from "./employee.png"
import { Link } from "react-router-dom";
import AnimalCard from '../animals/animalCard'
import EmployeeCard from './employeeCard'
import "./employees.css"

export default class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="hireEmployeeButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/employees/new")
                        }
                        }>
                        Hire Employee
                    </button>
                </div>
                <section className="employees">
                    {
                        this.props.employees.map(employee =>
                            // console.log(employee)
                            < EmployeeCard key={employee.id} employee={employee} {...this.props} />
                            // <div key={employees.id} className="card">
                            //     <div className="card-body">
                            //         <h3 className="card-title">
                            //             <img src={employee} className="icon--employees" />
                            //             <p>{employees.name}</p>


                            //             <Link className="nav-link" to={`/employees/${employees.id}`}>Details</Link>

                            //             <a href="#"
                            //                 onClick={() => this.props.fireEmployee(employees.id)}
                            //                 className="card-link">Delete</a>
                            //         </h3>
                            //         <p className="card-subtitle mb-2 text-muted">Caretaker For</p>
                            //             <div className="animals--caretaker">
                            //                 {
                            //                     this.props.animals
                            //                         .filter(anml => anml.employeeId === employees.id)
                            //                         .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                            //                 }
                            //             </div>
                            //     </div>
                            // </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}