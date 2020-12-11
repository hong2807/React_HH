const stateProductList = {
    productList: [
        {maSP:1, tenSP:'Iphone', hinhAnh:'./iphone_xs.jpg', giaTien:1000},
        {maSP:2, tenSP:'Samsung', hinhAnh:'./samsung.jpg', giaTien:5000},
        {maSP:3, tenSP:'Xiaomi', hinhAnh:'./xiaomi.jpg', giaTien:200},
    ]
}

export const SanPhamFunctionReducer = (state = stateProductList) => {
    return {...state} // Destructuring
}