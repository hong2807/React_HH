import React, { Component } from 'react'
import './ClassDatabinding.css'

export default class ClassDatabinding extends Component {
    // Thuộc tính
    hoTen = 'Nguyen Van A';
    email =  "nguyena@gmail.com";
    sodienthoai =  "0124.368.759";
    truong = "Dai hoc Sai Gon";
    lop = "CKE1113";
    mssv = "15";

    // Phương thức gọi ra không cần sự kiện
    renderThongTinSinhVien = () => {
        return (
            <ul>
                <li>Trường: {this.truong}</li>
                <li>Lớp: {this.lop}</li>
                <li>Mã số sinh viên: {this.mssv}</li>
            </ul>
        )
    }

    // Phương thức chỉ được gọi ra khi có sự kiện
    thongBao = () => {
        alert("Xin chào bạn A!");
    }

    render() {
        // Biến
        let name = 'Nguyen Van B';
        let mail =  "nguyenb@gmail.com";
        let phone =  "0768.862.343";
        let school = "Dai hoc TDT";
        let classname = "TCT1024";
        let id = "40";

         // Hàm gọi ra không cần sự kiện
        const thongTinSinhVien = () => {
            return (
                <ul>
                    <li>Trường: {school}</li>
                    <li>Lớp: {classname}</li>
                    <li>Mã số sinh viên: {id}</li>
                </ul>
            )
        }

        // Hàm chỉ được gọi ra khi có sự kiện
        const announce = () => {
            alert("Xin chào bạn B!");
        }

        return (
            <div className="classdatabinding-component">
                <div className="container">
                    <ul>
                        <li>Họ tên: {this.hoTen}</li>
                        <li>Email: {this.email}</li>
                        <li>Số điện thoại: {this.sodienthoai}</li>
                    </ul>

                    <br></br>

                    {this.renderThongTinSinhVien()}

                    <br></br>

                    <button className="btn btn-success" onClick={this.thongBao}>Click me</button>

                    <br></br>

                    <ul>
                        <li>Họ tên: {name}</li>
                        <li>Email: {mail}</li>
                        <li>Số điện thoại: {phone}</li>
                    </ul>

                    <br></br>

                    {thongTinSinhVien()}

                    <br></br>

                    <button className="btn btn-warning" onClick={announce}>Click me</button>
                </div>
            </div>
        )
    }
}
