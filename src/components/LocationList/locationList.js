import React, {Component} from 'react'
import EmployeeList from '../employee/EmployeeList'


class LocationList extends Component {
    render() {
        return (
            <div>
            <section>
                <h3>Student Kennels</h3>
                <h4>Nashville North Location</h4>
                <h5>500 Puppy Way</h5>
                {/* <EmployeeList employees={this.state.employees}/> */}
            </section>
            <section>
                <h3>Student Kennels</h3>
                <h4>Nashville South Location</h4>
                <h5>#1 Muddy Puddle Road</h5>
            </section>
            </div >
        );
    }
}

export default LocationList