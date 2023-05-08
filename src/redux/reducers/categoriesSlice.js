import { createSlice } from "@reduxjs/toolkit";
import  CategoryData  from "../../Data/CategoryData";

const initialState = {
    categories: CategoryData,
    selectedCategorie:null,
};

export const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers: {
        selectedCategory: (state, action) => {
            state.selectedCategorie = state.selectedCategorie !== action.payload ? action.payload: null; 
        },
    
        renderCategory: (state,action) => {

            
        },
    
    
        
    }}
)

export const {selectedCategory, renderCategory} = categorySlice.actions; 
export default categorySlice.reducer;