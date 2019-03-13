import React, { Component } from "react";
import "./employees.css";

export default class EmployeeForm extends Component {
  // Set initial state
  state = {
    name: "",
    department: "",
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
  constructNewEmployee = evt => {
    evt.preventDefault();
    if (this.state.department === "") {
      window.alert("Please select a department");
    } else {
      const newEmployee = {
        name: this.state.employeeName,
        department: this.state.department,
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        // employeeId: parseInt(this.state.employeeId)
      };

    //   console.log(animal)
    //   debugger;
      // Create the animal and redirect user to animal list
      this.props
        .addEmployee(newEmployee)
        .then(() => this.props.history.push("/employees"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="employeeForm">
          <div className="form-group">
            <label htmlFor="employeeName">Employee Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="employeeName"
              placeholder="Employee Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="department"
              placeholder="Department"
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="employee">Assign to caretaker</label>
            <select
              defaultValue=""
              name="employee"
              id="employeeId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select an employee</option>
              {this.props.employees.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div> */}
          <button
            type="submit"
            onClick={this.constructNewEmployee}
            className="btn btn-primary"
          >
            Add Employee
          </button>
        </form>
      </React.Fragment>
    );
  }
}