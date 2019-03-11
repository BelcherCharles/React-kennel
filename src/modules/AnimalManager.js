// import AnimalList from "../components/animals/AnimalList";


const remoteURL = "http://localhost:5002"

export default {
    getAllAnimals: () => {
        return fetch (`${remoteURL}/animals?_expand=species`)
        .then(animals => animals.json())
    },

    getSingleAnimal: (animalId) => {
        return fetch (`${remoteURL}/animals/${animalId}`)
        .then(singleAnimal => singleAnimal.json())
    },

    getAllLocations: () => {
        return fetch(`${remoteURL}/locations`)
        .then(locations => locations.json())
    },

    getSingleLocation: (locationId) => {
        return fetch(`${remoteURL}/locations/${locationId}`)
        .then(singleLocation => singleLocation.json())
    },

    getAllEmployees: () => {
        return fetch("http://localhost:5002/employees")
        .then(employees => employees.json())
    },

    getSingleEmployee: (employeeId) => {
        return fetch(`${remoteURL}/employees/${employeeId}`)
        .then(singleEmployee => singleEmployee.json())
    },

    getAllOwners: () => {
        return fetch(`${remoteURL}/owners`)
        .then(owners => owners.json())
    },

    getSingleOwner: (ownerId) => {
        return fetch(`${remoteURL}/owners/${ownerId}`)
        .then(singleOwner => singleOwner.json())
    },

    deleteAnimal: (animalId) => {
        return fetch(`${remoteURL}/animals/${animalId}`, {
            "method": "DELETE",
        })
        .then (e => e.json());
    },
    getAllSpecies: () => {
        return fetch(`${remoteURL}/species`)
        .then(species => species.json())
    },
}
