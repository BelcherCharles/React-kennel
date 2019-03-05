import React, {Component} from 'react';
import EmployeeList from './employee/EmployeeList';
import LocationList from './LocationList/locationList';
import AnimalList from './animals/animalList';
import "./kennel.css"

class Kennel extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Scout"},
        { id: 2, name: "Puppy"},
        { id: 3, name: "Rudy"},
        { id: 4, name: "Harley"},
        { id: 5, name: "Suzuki"}
    ]

    // This stores the data that will be rendered to the DOM
    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }

    render() {
        return (
            <div>
                <LocationList locations={this.state.locations}/>
                <EmployeeList employees={this.state.employees}/>
                <AnimalList animals={this.state.animals}/>
            </div>
        );
    }
}

export default Kennel;