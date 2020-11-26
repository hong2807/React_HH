import React, { Component } from 'react'
import './ClassState.css'

export default class ClassState extends Component {
    state = {
        so: 0,
        number: 0,
        hien: true
    }

    handlePlus = () => {
        this.setState({
            so: this.state.so += 1
        })
    } 

    handleMinus = () => {
        this.setState({
            so: this.state.so -= 1
        })
    } 

    handleChange = (isAdd) => {
        if(isAdd) {
            this.setState({
                number: this.state.number += 1
            })
        } else {
            this.setState({
                number: this.state.number -= 1
            })
        }
    }

    render() {
        return (
            <div className="classstate-component">
                <div className="container">
                    <h3>Giá trị {this.state.so}</h3>
                    <button className="btn btn-success mr-3" onClick={this.handlePlus}>Tăng</button>
                    <button className="btn btn-danger" onClick={this.handleMinus}>Giảm</button>

                    <br></br>
                    <br></br>

                    <h3>Number {this.state.number}</h3>
                    {/* <button className="btn btn-success mr-3" onClick={this.handleChange(true)}>Plus</button> */}
                    {/* Viết như vậy là ko cần click nó sẽ gọi ra xài luôn >>> nó sẽ tạo ra vòng lặp >>> cách giải quyết dùng arrow function or bind */}
                        {/* Bind */}
                    <button className="btn btn-success mr-3" onClick= {this.handleChange.bind(this.true)}>Plus Binding</button>

                        {/* Arrow fucntion */}
                    <button className="btn btn-success mr-3" onClick={ () => {this.handleChange(true)}}>Plus</button>
                    <button className="btn btn-danger" onClick={ () => {this.handleChange(false)} }>Minus</button>

                    <br></br>
                    <br></br>

                    <h3>Hello Everone !</h3>
                    <button className="btn btn-primary mr-3 {show ? 'hien' : 'an' }" onClick={this.handlePlus}>Click</button>
                </div>
            </div>
        )
    }
}
