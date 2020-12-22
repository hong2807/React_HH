const stateShoppingCart = {
    shoppingCart: [
        {maSP:1, tenSP:'Iphone', hinhAnh:'./iphone_xs.jpg', giaTien:1000},
    ]
}

export const GioHangReducer = (state = stateShoppingCart,action) => {
    switch(action.type) {
        case 'THEM_SAN_PHAM': {
            let gioHangCapNhat = [...state.shoppingCart];
            gioHangCapNhat.push(action.productSelected);
            state.shoppingCart =  gioHangCapNhat;
            return {...state}
        }
    }
    return {...state} // Destructuring
}