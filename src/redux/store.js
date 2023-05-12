import { configureStore } from '@reduxjs/toolkit'
import  categoryReducer  from './reducers/categoriesSlice'
import productsReducer from './reducers/productsSlice'
import cartReducer from './reducers/cartSlice'
import toggleMenuReducer from './reducers/toggleMenuSlice'


export const store = configureStore({
    reducer: {
        category: categoryReducer,
        products: productsReducer,
        cart: cartReducer,
        toggleMenu: toggleMenuReducer,
    },
    

})


