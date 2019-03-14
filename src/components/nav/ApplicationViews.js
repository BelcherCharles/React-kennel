import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from '../authentication/login'
import animalAPIManager from '../../modules/AnimalManager'
import AnimalDetail from '../animals/animalDetail'
import AnimalForm from '../animals/animalForm'
import AnimalList from '../animals/AnimalList'
import AnimalEditForm from '../animals/animalEditForm'
import LocationList from '../locations/LocationList'
import EmployeeList from '../employee/EmployeeList'
import EmployeeDetail from '../employee/employeeDetail'
import EmployeeForm from '../employee/employeeForm'
import OwnerDetail from '../owners/OwnerDetail'
import OwnerList from '../owners/OwnerList'
import OwnerForm from '../owners/OwnerForm'
import RegNewUser from '../authentication/newUserReg'
import SearchBox from '../search/search'

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



    // Check if credentials are in local storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    // alternate way to write above function
    //     isAuthenticated(){
    //     const credentials = sessionStorage.getItem("credentials");
    //     if(credentials === null) {
    //     return false;
    // } else {
    //     return true;
    // }
    //     }

    deleteAnimal = (id) => {
        return animalAPIManager.deleteAnimal(id)
            .then(animalAPIManager.getAllAnimals)
            .then(animals => this.setState({ animals: animals })
            )
    }

    addAnimal = animalObject =>
        animalAPIManager.postAnimal(animalObject)
            .then(() => animalAPIManager.getAllAnimals())
            .then(animals =>
                this.setState({
                    animals: animals
                })
            );

    updateAnimal = (editedAnimalObject) => {
        return animalAPIManager.put(editedAnimalObject)
            .then(() => animalAPIManager.getAllAnimals())
            .then(animals => {
                this.setState({
                    animals: animals
                })
            });
    };
    //   dischargeAnimal = (id) =>
    //     AnimalManager.deleteAnimal(id)
    //         .then(AnimalManager.getAll)
    //         .then(animals => this.setState({ animals: animals }))

    addEmployee = employee =>
        animalAPIManager.postEmployee(employee)
            .then(() => animalAPIManager.getAllEmployees())
            .then(employees =>
                this.setState({
                    employees: employees
                })
            );

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

    addOwner = owner =>
        animalAPIManager.postOwner(owner)
            .then(() => animalAPIManager.getAllOwners())
            .then(owners =>
                this.setState({
                    owners: owners
                })
            );

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
                <Route exact path="/"
                    // component={Login}
                    render={props => {
                        return <Login {...props} />
                    }} />

                <Route exact path="/locations" render={(props) => {
                    return <LocationList locations={this.state.locations} employees={this.state.employees} />
                }} />

                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props}
                            // deleteAnimal={this.deleteAnimal}
                            owners={this.state.owners} animalOwners={this.state.animalOwners} species={this.state.species} animals={this.state.animals} />
                    } else {
                        return <Redirect to="/" />
                    }
                }
                } />

                <Route path="/animals/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalForm {...props}
                            addAnimal={this.addAnimal}
                            owners={this.state.animals}
                            employees={this.state.employees} />
                    } else {
                        return <Redirect to="/" />
                    }
                }
                } />

                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} owners={this.state.owners} animalOwners={this.state.animalOwners} species={this.state.species} />
                    } else {
                        return <Redirect to="/" />
                    }
                }
                } />

                <Route
                    path="/animals/:animalId(\d+)/edit" render={props => {
                        return <AnimalEditForm {...props} employees={this.state.employees} updateAnimal={this.updateAnimal} deleteAnimal={this.deleteAnimal} animals={this.state.animals} owners={this.state.owners} animalOwners={this.state.animalOwners} species={this.state.species} />
                    }}
                />

                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerList {...props}
                            owners={this.state.owners} />
                    } else {
                        return <Redirect to="/" />
                    }
                }
                } />

                <Route path="/owners/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerForm {...props}
                            addOwner={this.addOwner}
                            owners={this.state.owners} />
                    } else {
                        return <Redirect to="/" />
                    }
                }
                } />

                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerDetail {...props} owners={this.state.owners} removeOwner={this.removeOwner} />
                    } else {
                        return <Redirect to="/" />
                    }
                }
                } />

                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props}
                            fireEmployee={this.fireEmployee}
                            employees={this.state.employees}
                            animals={this.state.animals}
                            species={this.state.species} />
                    } else {
                        return <Redirect to="/" />
                    }
                }
                } />

                <Route path="/employees/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeForm {...props}
                            addEmployee={this.addEmployee}
                            employees={this.state.employees} />
                    } else {
                        return <Redirect to="/" />
                    }
                }
                } />

                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeDetail {...props} employees={this.state.employees} fireEmployee={this.fireEmployee} />
                    } else {
                        return <Redirect to="/" />
                    }
                }
                } />

                <Route path="/search" render={(props) => {
                    return <SearchBox searchResults={this.searchResults} />
                }} />

                <Route path="/regNewUser" render={(props) => {
                    return <RegNewUser />
                }} />
            </div>
        )
    }
}

export default ApplicationViews