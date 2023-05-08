import { createSlice } from "@reduxjs/toolkit";
import { ProductsData } from "../../Data/ProductsData";

const initialState = {
    productsList: ProductsData,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    }
})

export default productsSlice.reducer