import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function FuncUseDispatch() {
    const productList = [
        {maSP:1, tenSP:'Iphone', hinhAnh:'./iphone_xs.jpg', giaTien:1000},
        {maSP:2, tenSP:'Samsung', hinhAnh:'./samsung.jpg', giaTien:5000},
        {maSP:3, tenSP:'Xiaomi', hinhAnh:'./xiaomi.jpg', giaTien:200},
    ]

    const [productSelected,setProductSelected] = useState([
        {maSP: '', tenSP:'', hinhAnh:'', giaTien:''},
    ])

    // const handleSelectProduct = (sp) => {
    //     setProductSelected({
    //         ...productSelected,
    //         maSP: sp.maSP,
    //         tenSP: sp.tenSP,
    //         hinhAnh: sp.hinhAnh,
    //         giaTien: sp.giaTien,
    //     })
    // }

    const handleSelectProduct = (sp) => {
        console.log(sp, sp.maSP)
        setProductSelected({
            ...productSelected,
            maSP: sp.maSP,
            tenSP: sp.tenSP,
            hinhAnh: sp.hinhAnh,
            giaTien: sp.giaTien,
        })
        console.log(productSelected);
        let spDuocChon = {...productSelected}
        let action = {
            type: 'THEM_SAN_PHAM',
            productSelected: spDuocChon
        }
        dispatch(action)
    }

    let dispatch = useDispatch();

    const renderDanhSachSanPham = () => {
        return productList.map((item,index) => {
            console.log('item', item)
            return  <div className="col-4" key={index}>
                        <div className='card'>
                            <img className='card-img-top w-100' src={item.hinhAnh}  alt='' style={{height: 348}}/>
                            <div className='card-body'>
                                <h4 className='card-title'>{item.tenSP}</h4>
                                <p className='card-text text-warning font-weight-bold'>{item.giaTien}</p>
                                <button className="btn btn-success" onClick={() => {handleSelectProduct(item)}}>Thêm sản phẩm</button>
                            </div>
                        </div>
                </div>
            })
        }

    const renderDanhSachDuocChon = () => {
        return productSelected && productSelected.map((item,index) => {
            return  <div className="row" key={index}>
                        <div className="col-2">
                            <img className='w-100' src={item.hinhAnh} alt=''/>
                        </div>
                        <div className="col-10 text-left">
                            <h4>{item.tenSP}</h4>
                            <p>{item.giaTien}</p>
                        </div>
                    </div>
            })
        }

    return (
        <div>
                <div className="container">
                    <h3 className="text-danger">Chức năng Thêm Sản Phẩm</h3>
                    <div className="row">
                        {renderDanhSachSanPham()}
                    </div>
                    <h3 className="text-danger">Danh sách sản phẩm đã chọn</h3>
                        {renderDanhSachDuocChon()}
                </div>
            </div>
    )
}
