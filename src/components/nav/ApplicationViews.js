import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from '../animals/AnimalList'
import LocationList from '../locations/LocationList'
import EmployeeList from '../employee/EmployeeList'
import OwnerList from '../owners/OwnerList'
import SearchBox from '../search/search'
import animalAPIManager from '../../modules/AnimalManager'
import AnimalDetail from '../animals/animalDetail'


class ApplicationViews extends Component {


    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: [],
        animalOwners: [],
        species: [],
        searchResults: []
    }

    // deleteAnimal = id => {
    //     return fetch(`http://localhost:5002/animals/${id}`, {
    //         method: "DELETE"
    //     })
    //         .then(e => e.json())
    //         .then(() => fetch(`http://localhost:5002/animals`))
    //         .then(e => e.json())
    //         .then(animals => this.setState({
    //             animals: animals
    //         })
    //         )
    // }

    deleteAnimal = (id) => {
       return animalAPIManager.deleteAnimal(id)
            .then(animalAPIManager.getAllAnimals)
            .then(animals => this.setState({ animals: animals })
            )
    }

    //   dischargeAnimal = (id) =>
    //     AnimalManager.deleteAnimal(id)
    //         .then(AnimalManager.getAll)
    //         .then(animals => this.setState({ animals: animals }))

    fireEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(e => e.json())
            .then(employees => this.setState({
                employees: employees
            })
            )
    }

    removeOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(e => e.json())
            .then(owners => this.setState({
                owners: owners
            })
            )
    }

    componentDidMount() {
        const newState = {};
        animalAPIManager.getAllEmployees()
            .then(parsedEmployees => {
                newState.employees = parsedEmployees;
                return animalAPIManager.getAllLocations();
            })
            .then(parsedLocations => {
                newState.locations = parsedLocations;
                return animalAPIManager.getAllOwners();
            })
            .then(parsedOwners => {
                newState.owners = parsedOwners;
                return animalAPIManager.getAllAnimals();
            })
            .then(parsedAnimals => {
                // console.log(parsedAnimals)
                newState.animals = parsedAnimals;
                return animalAPIManager.getAllOwners();
            })
            .then((parsedAnimalOwners) => {
                newState.animalOwners = parsedAnimalOwners;
                return animalAPIManager.getAllSpecies();
            })
                .then(parsedSpecies => {
                newState.species = parsedSpecies
                this.setState(newState)
            })


    }

    render() {
        return (
            <div className="container-div">
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} animalOwners={this.state.animalOwners} species={this.state.species}/>
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} owners={this.state.owners} animalOwners={this.state.animalOwners} species={this.state.species} />
                }} />
                {/* <Route path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} owners={this.state.owners} animalOwners={this.state.animalOwners} species={this.state.species}/>
                }} /> */}
                <Route path="/owners" render={(props) => {
                    return <OwnerList removeOwner={this.removeOwner} owners={this.state.owners} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList fireEmployee={this.fireEmployee} employees={this.state.employees} />
                }} />
                <Route path="/search" render={(props) => {
                    return <SearchBox searchResults={this.searchResults} />
                }} />
            </div>
        )
    }
}

export default ApplicationViews