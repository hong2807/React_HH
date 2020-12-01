import React from 'react'
import FuncChildProps from './FuncChildProps'

export default function FuncProp() {
    let fruits = ['apple', 'orange', 'banana']

    let person = {
        name: 'John',
        age: 25
    }

    return (
        <div>
            <FuncChildProps text='Hello Everyone'
                            number={12345}
                            arrFruits = {fruits}
                            objPerson = {person}>
            </FuncChildProps>
        </div>
    )
}
