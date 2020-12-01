import React, { Component } from 'react'
import ClassChildProps from './ClassChildProps'
import './ClassProps.css'

export default class ClassProps extends Component {
    fruits = ['apple', 'orange', 'banana']

    render() {
        let person = {
            name: 'John',
            age: 25
        }
        
        return (
            <div className="classprops-component">
                <ClassChildProps text={'Hello everyone'}
                            number={12345}
                            arrFruits = {this.fruits}
                            objPerson = {person}>
                </ClassChildProps>
            </div>
        )
    }
}
