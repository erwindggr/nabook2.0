import { axiosInstance } from '../config/config';
import axios from 'axios';
import { selectSearchTerm } from '../redux/searchTermSlice';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// const allProductData = axiosInstance.get("/product/");
// const allProductData = axios.get("https://localhost:2000/product");

// export const loadData = () => {
//   return {
//     type: 'allProducts/loadData',
//     payload: allProductData
//   }
// }

export const loadData = () => async dispatch => {

  try{
      const res = await axiosInstance.get("/product/")
      dispatch( {
          type: 'allProducts/loadData',
          payload: res.data
      })
  }
  catch(error){
      dispatch( {
          type: 'allProducts/error',
          payload: ""
      })
  }

}
// export async function loadData() {
//   const res = await axios.get("https://localhost:2000/product")
//   return {
//     type: 'allProducts/loadData',
//     payload: res.data
//   }
// }

const initialState = [];
export const allProductsReducer = (allProducts = initialState, action) => {
  switch (action.type) {
    case 'allProducts/loadData':
      return action.payload

    case 'allProducts/error':
      return action.payload

    default:
      return allProducts;
  }
}

export const selectAllProducts = (state) => state.allProducts;

export const selectFilteredAllProducts = (state) => {
  const allProducts = selectAllProducts(state);
  const searchTerm = selectSearchTerm(state);

  return allProducts.filter((product) =>
    // product.title.toLowerCase().includes(searchTerm.toLowerCase())
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
};