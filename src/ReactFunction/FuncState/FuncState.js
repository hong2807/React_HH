import React, { useState } from 'react'
import './FuncState.css'

export default function FuncState() {
    const [state,setState] = useState({conso: 0})
    const [so,demSo] = useState(0);
    const [count,setCount] = useState(0);
    const [hien,setHien] = useState(true);
    const [show,setShow] = useState(true);
    const [check,setCheck] = useState(true);

    const handleNumber = () => {
        setState({
            conso: state.conso + 1
        })
    }

    const tangSo = () => {
        demSo(so + 1);
    }

    const giamSo = () => {
        demSo(so - 1);
    }

    const handleCount = (isAdd) => {
        if(isAdd) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }

    const sukienClick = () => {
        setHien(false)
    }

    const handleClick = () => {
        setShow(false)
    }

    const handleToggle = () => {
        setCheck(!check)
    }


    return (
        <div className="funcstate-component">
            <div className="container">
            <h3>Giá trị {so}</h3>
                <button className="btn btn-dark mr-3" onClick={tangSo}>Tăng</button>
                <button className="btn btn-dark" onClick={giamSo}>Giảm</button>

                <br></br>
                <br></br>

                <h3>Giá trị {so}</h3>
                <button className="btn btn-success mr-3" onClick={tangSo}>Tăng</button>
                <button className="btn btn-danger" onClick={giamSo}>Giảm</button>

                <br></br>
                <br></br>

                <h3>Number {count}</h3>
                <button className="btn btn-primary mr-3" onClick={ () => {handleCount(true)} }>Minus</button>
                <button className="btn btn-warning" onClick={ () => {handleCount(false)} }>Plus</button>

                <br></br>
                <br></br>

                <h3 className={hien ? 'hien' : 'an'}>Hello Everyone !</h3>
                <button className="btn btn-info" onClick={sukienClick}>Ẩn chữ</button>

                <br></br>
                <br></br>

                {show && <h3>Hello Everyone !</h3> }
                <button className="btn btn-dark" onClick={handleClick}>Hide text</button>

                <br></br>
                <br></br>
                
                <div>
                    {check && <h3 className="">Hello Everone !</h3>}
                    <button className="btn mr-3" style={{backgroundColor: "#bf360c"}} onClick={handleToggle}>Toggle text</button>
                </div>
            </div>
        </div>
    )
}
