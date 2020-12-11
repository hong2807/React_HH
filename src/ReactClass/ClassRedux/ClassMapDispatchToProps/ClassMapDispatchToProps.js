import React, { Component } from 'react'
import {connect} from 'react-redux'

class ClassMapDispatchToProps extends Component {
    renderDanhSachSanPham = () => {
        return this.props.danhSachSanPham.map((item,index) => {
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

    render() {
        return (
            <div>
                <div className="container">
                    <h3 className="text-danger">Chức năng Thêm Sản Phẩm</h3>
                    <div className="row">
                        {this.renderDanhSachSanPham()}
                    </div>
                    <h3 className="text-danger">Danh sách sản phẩm đã chọn</h3>
                    <div className="row">
                        <div className="col-2">
                            <img className="w-100" src="xiaomi.jpg"/>
                        </div>
                        <div className="col-10 text-left">
                            <h4>Iphone</h4>
                            <p>1000</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => { // stateDSSP chính là rootReducer
    return {
        danhSachSanPham: state.GioHangReducer.productList
    }
}

const mapDispatchToProps = (dispatch) => { // tạo ra 1 phương thức props (themSanPham)
    return {
        themSanPham: (sanPham) => {
            const spDuocChon = {
                maSP: sanPham.maSP,
                tenSP: sanPham.maSP,
                hinhAnh: sanPham.hinhAnh,
                giaTien: sanPham.giaTien,
            }

            const action = {
                type: 'THEM_SAN_PHAM',
                productSelected: spDuocChon
            }
            console.log(action);
            dispatch(action);
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (ClassMapDispatchToProps)


// Có 1 list danh sách sản phẩm => Bấm vào nút Thêm sản phẩm nó hiện vào Danh sách chọn
// Khi click sản phẩm nào thì lấy thông tin sp đó gửi lên