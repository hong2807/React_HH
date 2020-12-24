import React, { Component } from 'react'
import {connect} from 'react-redux'

class ClassMapDispatchToProps extends Component {

    productList = [
        {maSP:1, tenSP:'Iphone', hinhAnh:'./iphone_xs.jpg', giaTien:1000},
        {maSP:2, tenSP:'Samsung', hinhAnh:'./samsung.jpg', giaTien:5000},
        {maSP:3, tenSP:'Xiaomi', hinhAnh:'./xiaomi.jpg', giaTien:200},
    ]

    renderDanhSachSanPham = () => {
        return this.productList.map((item,index) => {
            console.log('item', item)
            return  <div className="col-4" key={index}>
                        <div className='card'>
                            <img className='card-img-top w-100' src={item.hinhAnh}  alt='' style={{height: 348}}/>
                            <div className='card-body'>
                                <h4 className='card-title'>{item.tenSP}</h4>
                                <p className='card-text text-warning font-weight-bold'>{item.giaTien}</p>
                                <button className="btn btn-success" onClick={() => {this.props.themSanPham(item)}}>Thêm sản phẩm</button>
                            </div>
                        </div>
                </div>
            })
        }

    renderDanhSachDuocChon = () => {
        console.log(this.props.productsSelected)
        return this.props.productsSelected.map((item,index) => {
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

    

    render() {
        return (
            <div>
                <div className="container">
                    <h3 className="text-danger">Chức năng Thêm Sản Phẩm</h3>
                    <div className="row">
                        {this.renderDanhSachSanPham()}
                    </div>
                    <h3 className="text-danger">Danh sách sản phẩm đã chọn</h3>
                        {this.renderDanhSachDuocChon()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   
    return {
        productsSelected: state.GioHangReducer.shoppingCart
    }
}


const mapDispatchToProps = (dispatch) => { // tạo ra 1 phương thức props (themSanPham)
    return {
        themSanPham: (sanPham) => {
            const spDuocChon = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                hinhAnh: sanPham.hinhAnh,
                giaTien: sanPham.giaTien,
            }

            const action = {
                type: 'THEM_SAN_PHAM',
                productSelected: spDuocChon
            }
            console.log(action);
            // Chỗ này coi dc khi mình click mình sẽ gửi dữ liệu gì lên
            dispatch(action);
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (ClassMapDispatchToProps)


// Có 1 list danh sách sản phẩm => Bấm vào nút Thêm sản phẩm nó hiện vào Danh sách chọn
// Khi click sản phẩm nào thì lấy thông tin sp đó gửi lên