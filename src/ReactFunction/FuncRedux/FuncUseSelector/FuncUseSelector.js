import React from 'react'
import { useSelector } from "react-redux";


export default function FuncUseSelector() {
    let danhSachSanPham = useSelector(state => state.SanPhamFunctionReducer.productList)
    console.log(danhSachSanPham)

    const renderDanhSachSanPham = () => {
        return danhSachSanPham.map((item,index) => {
            return  <div className="col-4" key={index}>
                        <div className='card'>
                            <img className='card-img-top w-100' src={item.hinhAnh}  alt='' style={{height: 348}}/>
                            <div className='card-body'>
                                <h4 className='card-title'>{item.tenSP}</h4>
                                <p className='card-text text-success font-weight-bold'>{item.giaTien}</p>
                            </div>
                        </div>
                </div>
            })
        }

    return (
        <div>
             <div className="container">
                <h2 className="text-danger">DANH SÁCH SẢN PHẨM</h2>
                <div className="row">
                    {renderDanhSachSanPham()}
                </div>
            </div>
        </div>
    )
}























