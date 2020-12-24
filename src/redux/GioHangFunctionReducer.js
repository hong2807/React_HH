const stateShoppingCart = {
    shoppingCart: [
        {maSP:1, tenSP:'Iphone', hinhAnh:'./iphone_xs.jpg', giaTien:1000},
    ]
}

export const GioHangFunctionReducer = (state = stateShoppingCart,action) => {
    switch(action.type) {
        case 'THEM_SAN_PHAM': {
            state.shoppingCart = [...state.shoppingCart,action.productSelected];
            return {...state}
        }
    }
    return {...state} 
}