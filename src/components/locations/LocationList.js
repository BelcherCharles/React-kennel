import React, {Component} from 'react'
// import EmployeeList from '../employee/EmployeeList'


class LocationList extends Component {
    render() {
        return (
            <div>
            <section>
            <h1>Locations</h1>
                {this.props.locations.map((singleLocation) => {
                    return <p key={singleLocation.id}>{singleLocation.name}<br></br>{singleLocation.address}</p>
                })}
            </section>
            </div >
        );
    }
}

export default LocationList