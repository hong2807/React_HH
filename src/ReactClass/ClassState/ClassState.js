import React, { Component } from 'react'
import './ClassState.css'

export default class ClassState extends Component {
    state = {
        so: 0,
        number: 0,
        hien: true,
        show: true,
        check: true
    }

    handlePlus = () => {
        this.setState({
            so: this.state.so + 1
        })
    } 

    handleMinus = () => {
        this.setState({
            so: this.state.so - 1
        })
    } 

    handleChange = (isAdd) => {
        if(isAdd) {
            this.setState({
                number: this.state.number + 1
            })
        } else {
            this.setState({
                number: this.state.number - 1
            })
        }
    }

    sukienClick = () => {
        this.setState({
            hien: false
        })
    }

    handleClick = () => {
        this.setState({
            show: false
        })
    }

    // handleToggle = () => {
    //     if(this.state.check) {
    //         this.setState({
    //             check: false
    //         })
    //     } else {
    //         this.setState({
    //             check: true
    //         })
    //     }
        
    // }

    // Cách viết gọn hơn
    // handleToggle = () => {
    //     this.setState({
    //         check: !this.state.check
    //     }) 
    // }

    // Cách viết gọn nhất
    handleToggle = () => {
        this.setState({
            check: !this.state.check
        }) 
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
                    <button className="btn btn-primary mr-3" onClick= {this.handleChange.bind(this.true)}>Plus Binding</button>

                        {/* Arrow fucntion */}
                    <button className="btn btn-primary mr-3" onClick={ () => {this.handleChange(true)}}>Plus</button>
                    <button className="btn btn-warning" onClick={ () => {this.handleChange(false)} }>Minus</button>

                    <br></br>
                    <br></br>

                    {/* Mặc định lúc đầu true là show, click đổi thành false là mất */}
                    <h3 className={this.state.hien ? 'hien' : 'an' }>Hello Everone !</h3>
                    <button className="btn btn-info mr-3" onClick={this.sukienClick}>Ẩn chữ</button>

                    <br></br>
                    <br></br>

                    {/* Nếu show = true thì render ra có h3 còn show = false thì ko in h3 ra */}
                    {this.state.show && <h3 className="">Hello Everone !</h3>}
                    <button className="btn btn-dark mr-3" onClick={this.handleClick}>Hide text</button>

                    <br></br>
                    <br></br>

                    <div>
                        {this.state.check && <h3 className="">Hello Everone !</h3>}
                        <button className="btn mr-3" style={{backgroundColor: "#bf360c"}} onClick={this.handleToggle}>Toggle text</button>
                    </div>
                </div>
            </div>
        )
    }
}
