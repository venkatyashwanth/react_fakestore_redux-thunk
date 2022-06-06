import { combineReducers } from 'redux';
import { productReducer, selectProductReducer } from './Productreducer';

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectProductReducer
});

export default reducers;