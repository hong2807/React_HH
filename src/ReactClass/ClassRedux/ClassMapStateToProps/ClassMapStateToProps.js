import React, { Component } from 'react'
import {connect} from 'react-redux'


class ClassMapStateToProps extends Component {
    renderDanhSachSanPham = () => {
        return this.props.danhSachSanPham.map((item,index) => {
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

    render() {
        console.log(this.props.danhSachSanPham)
        return (
            <div className="mapstatetoprops">
                <div className="container">
                    <h2 className="text-danger">DANH SÁCH SẢN PHẨM</h2>
                    <div className="row">
                        {this.renderDanhSachSanPham()}
                        {/* <div className="col-4">
                            <div className='card'>
                                <img className='card-img-top w-100' src="./iphone_xs.jpg"  alt=''/>
                                <div className='card-body'>
                                    <h4 className='card-title'>Iphone</h4>
                                    <p className='card-text'>15.000.000</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='card '>
                                <img className='card-img-top w-100' src="./iphone_xs.jpg"  alt=''/>
                                <div className='card-body'>
                                    <h4 className='card-title'>Iphone</h4>
                                    <p className='card-text'>15.000.000</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='card '>
                                <img className='card-img-top w-100' src="./iphone_xs.jpg"  alt=''/>
                                <div className='card-body'>
                                    <h4 className='card-title'>Iphone</h4>
                                    <p className='card-text'>15.000.000</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => { // state chính là rootReducer (state này tùy ý đặt tên)
    return {
        danhSachSanPham: state.SanPhamReducer.productList
    }
}

export default connect (mapStateToProps, null) (ClassMapStateToProps)
