import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/Action-types";

const fetchProducts =()=> async (dispatch) => {
        const response = await fakeStoreApi.get("/products");
        dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data})
    };

const fetchProduct = (id)=> async (dispatch) => {
    const response = await fakeStoreApi.get(`/products/${id}`);
    dispatch({type: ActionTypes.SELECTED_PRODUCT, payload: response.data})
};


const setProducts = (products) =>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

const selectedProducts = (product) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

const removeSelectedProducts = () =>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}

export{setProducts,selectedProducts,removeSelectedProducts,fetchProducts,fetchProduct};