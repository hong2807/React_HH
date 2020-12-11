import {combineReducers, createStore} from 'redux';
import { GioHangReducer } from './GioHangReducer';
import { SanPhamFunctionReducer } from './SanPhamFunctionReducer';
import { SanPhamReducer } from './SanPhamReducer';


const rootReducer = combineReducers({
    SanPhamReducer: SanPhamReducer,
    SanPhamFunctionReducer: SanPhamFunctionReducer,
    GioHangReducer: GioHangReducer,
})

const store = createStore(rootReducer);

export default store;