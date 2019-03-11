import React, { Component } from "react"
import "./employees.css"
// import dog from "./DogIcon.png"


export default class EmployeeDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const employee = this.props.employees.find(e => e.id === parseInt(this.props.match.params.employeeId)) || {}

        return (
            <section className="employee">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                        {/* <img src={animal.species.image} className="icon--image" /> */}
                            {employee.name}
                            <br></br>
                            {/* {animal.species.name} */}
                            </h4>

                            {/* <img src={dog} className="icon--dog" />
                            {animal.name}
                        </h4>
                        <h6 className="card-title">{animal.breed}</h6> */}
                        <a href="#"
                            onClick={() => this.props.fireEmployee(employee.id)
                                            .then(() => this.props.history.push("/employees"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}