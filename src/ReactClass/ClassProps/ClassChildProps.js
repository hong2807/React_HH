import React, { Component } from 'react'
import './ClassProps.css'

export default class ClassChildProps extends Component {
    render() {
        return (
            <div className="classchildprops-component">
                <h3>{this.props.text}</h3>
                <br></br>
                <h3>{this.props.number}</h3>
                <br></br>
                <div>
                    <h3>Fruits List</h3>
                    <ul>
                        <li>{this.props.arrFruits[0]}</li>
                        <li>{this.props.arrFruits[1]}</li>
                        <li>{this.props.arrFruits[2]}</li>
                    </ul>
                </div>
                <br></br>
                <div>
                    <h3>Information</h3>
                    <ul>
                        <li>Name: {this.props.objPerson.name}</li>
                        <li>Age: {this.props.objPerson.age}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
