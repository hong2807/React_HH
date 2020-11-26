import React from 'react'
import './FuncDatabinding.css'

export default function FuncDatabinding() {
    // Biến
    let hoTen = 'Nguyen Van A';
    let email =  "nguyena@gmail.com";
    let sodienthoai =  "0124.368.759";
    let truong = "Dai hoc Sai Gon";
    let lop = "CKE1113";
    let mssv = "15";

    // Hàm gọi ra không cần có sự kiện
    const renderThongTinSinhVien = () => {
        return (
            <ul>
                <li>Trường: {truong}</li>
                <li>Lớp: {lop}</li>
                <li>Mã số sinh viên: {mssv}</li>
            </ul>
        )
    }

    // Hàm chỉ dc gọi ra khi có sự kiện
    const thongBao = () => {
        alert("Xin chào bạn !");
    }

    return (
        <div className="funcdatabinding-component">
            <div className="container">
                <ul>
                    <li>Họ tên: {hoTen}</li>
                    <li>Email: {email}</li>
                    <li>Số điện thoại: {sodienthoai}</li>
                </ul>
                <br></br>
                {renderThongTinSinhVien()}

                <button className="btn btn-success" onClick={thongBao}>Click me</button>
            </div>
        </div>
    )
}


