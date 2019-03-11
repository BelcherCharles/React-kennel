// import React, {Component} from 'react'

// class OwnerList extends Component {
//     render() {
//         return (
//             <article>
//                 <h1>Owner List</h1>
//                 {this.props.owners.map((singleOwner) => {
//                     return <p key={singleOwner.id}>{singleOwner.name} {singleOwner.phone}</p>
//                 })}
//             </article>
//         );
//     }
// }

// export default OwnerList

import React, { Component } from 'react'
import removeOwner from "./removeOwner.png"
import "./owners.css"

export default class OwnerList extends Component {
    render () {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={removeOwner} className="icon--Owners" />
                                {owner.name}
                                <a href="#"
                                    onClick={() => this.props.removeOwner(owner.id)}
                                    className="card-link">Remove Owner</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}