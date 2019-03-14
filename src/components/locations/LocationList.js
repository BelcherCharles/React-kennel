import React, {Component} from 'react'
// import EmployeeList from '../employee/EmployeeList'
import './locations.css'


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
