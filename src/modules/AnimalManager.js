// import AnimalList from "../components/animals/AnimalList";


const remoteURL = "http://localhost:5002"

export default {
    getAllAnimals: () => {
        return fetch(`${remoteURL}/animals?_expand=species`)
            .then(animals => animals.json())
    },

    getSingleAnimal: (animalId) => {
        return fetch(`${remoteURL}/animals/${animalId}`)
            .then(singleAnimal => singleAnimal.json())
    },

    put(editedAnimal) {
        return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedAnimal)
        }).then(data => data.json());
      },

    getAllLocations: () => {
        return fetch(`${remoteURL}/locations`)
            .then(locations => locations.json())
    },

    getSingleLocation: (locationId) => {
        return fetch(`${remoteURL}/locations/${locationId}`)
            .then(singleLocation => singleLocation.json())
    },

    postEmployee(employee) {
        return fetch(`${remoteURL}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        }).then(e => e.json())
    },

    getAllEmployees: () => {
        return fetch("http://localhost:5002/employees")
            .then(employees => employees.json())
    },

    getSingleEmployee: (employeeId) => {
        return fetch(`${remoteURL}/employees/${employeeId}`)
            .then(singleEmployee => singleEmployee.json())
    },

    postOwner(owner) {
        return fetch(`${remoteURL}/owners`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(owner)
        }).then(o => o.json())
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
            .then(e => e.json());
    },
    getAllSpecies: () => {
        return fetch(`${remoteURL}/species`)
            .then(species => species.json())
    },
    postAnimal(newAnimal) {
        return fetch(`${remoteURL}/animals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAnimal)
        }).then(data => data.json())
    }
}
