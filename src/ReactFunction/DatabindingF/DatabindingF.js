import React from 'react'
import './DatabindingF.css'

export default function DatabindingF() {
    let hoTen = 'Nguyen Van A';
    let email =  "nguyena@gmail.com";
    let sodienthoai =  "0124.368.759";
    let truong = "Dai hoc Sai Gon";
    let lop = "CKE1113";
    let mssv = "15";

    const renderThongTinSinhVien = () => {
        return (
            <ul>
                <li>Trường: {truong}</li>
                <li>Lớp: {lop}</li>
                <li>Mã số sinh viên: {mssv}</li>
            </ul>
        )
    }

    return (
        <div className="databindingf-component">
            <div className="container">
                <ul>
                    <li>Họ tên: {hoTen}</li>
                    <li>Email: {email}</li>
                    <li>Số điện thoại: {sodienthoai}</li>
                </ul>
                <br></br>
                {renderThongTinSinhVien()}
            </div>
        </div>
    )
}


