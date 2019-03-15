import React, {Component} from 'react'
// import EmployeeList from '../employee/EmployeeList'
import './locations.css'
import location from "./Placeholder-for-Location.jpg"


export default class LocationList extends Component {
    render() {
        return (
            <div>
            <h1>Locations</h1><br></br>
                {this.props.locations.map((singleLocation) => {
                    return (
                    <div key={singleLocation.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                            <img src={location} className="icon--locations" />
                                {singleLocation.name}<br></br>
                                {singleLocation.address}
                            </h5>
                        </div>
                    </div>
                    )
                })}
            </div >
        );
    }
}
