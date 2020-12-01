import React from 'react'
import './FuncProps.css'

export default function FuncChildProps(props) {
    return (
        <div className="funcchildprops-component">
            <h3>{props.text}</h3>
            <br></br>
            <h3>{props.number}</h3>
            <br></br>
            <div>
                <h3>Fruits List</h3>
                <ul>
                    <li>{props.arrFruits[0]}</li>
                    <li>{props.arrFruits[1]}</li>
                    <li>{props.arrFruits[2]}</li>
                </ul>
            </div>
            <br></br>
            <div>
                    <h3>Information</h3>
                    <ul>
                        <li>Name: {props.objPerson.name}</li>
                        <li>Age: {props.objPerson.age}</li>
                    </ul>
                </div>
        </div>
    )
}
