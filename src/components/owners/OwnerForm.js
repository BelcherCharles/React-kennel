import React, { Component } from "react";
import "./owners.css";

export default class OwnerForm extends Component {
  // Set initial state
  state = {
    name: "",
    address: "",
    phone: "",
  };

  // Update state whenever an input field is edited (USED ALMOST EVERY TIME A FORM IS IN REACT!!!!)
  handleFieldChange = evt => {
    //   console.log(evt)
    //   console.log(evt.target.value)
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewOwner = evt => {
    evt.preventDefault();
    if (this.state.ownerPhone === "") {
      window.alert("Please select a phone number (xxx) xxx-xxxx");
    }
    else if (this.state.ownerAddress === "") {
        window.alert("Please enter a street address.")

    } else {
      const newOwner = {
        name: this.state.ownerName,
        address: this.state.ownerAddress,
        phone: this.state.ownerPhone
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        // employeeId: parseInt(this.state.employeeId)
      };

    //   console.log(animal)
    //   debugger;
      // Create the animal and redirect user to animal list
      this.props
        .addOwner(newOwner)
        .then(() => this.props.history.push("/owners"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="ownerForm">
          <div className="form-group">
            <label htmlFor="ownerName">Owner Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="ownerName"
              placeholder="Owner's Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="ownerAddress"
              placeholder="Owner's Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Address</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="ownerPhone"
              placeholder="Owner's Phone"
            />
          </div>

          <button
            type="submit"
            onClick={this.constructNewOwner}
            className="btn btn-primary"
          >
            Add Owner
          </button>
        </form>
      </React.Fragment>
    );
  }
}