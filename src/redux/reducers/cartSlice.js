import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem('cartItems') !== null ? 
JSON.parse(localStorage.getItem('cartItems')) :
[];


const totalAmount = localStorage.getItem('totalCost') !== null ? 
JSON.parse(localStorage.getItem('totalCost')) :
0;

const setItemFunc = (item, totalCost) => {
    localStorage.setItem('cartItems', JSON.stringify(item));
    localStorage.setItem('totalCost', JSON.stringify(totalCost))
}


const initialState = {
    cartItems: items,
    totalCost: totalAmount,
    toggleCartON: false,
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        toggleCart: (state, action) => {
            state.toggleCartON = action.payload;
            
        },

        addToCart: (state,action) => {
            const NewItem = action.payload
            const existingItem = state.cartItems.find((item) => item.id === NewItem.id)
            
            if(!existingItem){
                state.cartItems.push({
                    id: NewItem.id,
                    image:NewItem.image,
                    title: NewItem.description,
                    precio: NewItem.precio,
                    quantity:1,
                })
            } else{
                existingItem.quantity++;
                
            }
                
                state.totalCost = state.cartItems.reduce( (total,item) => total + Number(item.precio) * Number(item.quantity),
                0)
                setItemFunc(state.cartItems.map((item) => item) ,state.totalCost)
                
           

        },

        removeItemToCart: (state,action) => {
            const Item = action.payload;
            const ItemToRemove = state.cartItems.find((item) => item.id === Item)
    
           
             if ( ItemToRemove.quantity === 1) { state.cartItems = state.cartItems.filter( (item) =>
                item.id !== Item) } else {ItemToRemove.quantity --}
        
                state.totalCost = state.cartItems.reduce( (total,item) => total + Number(item.precio) * Number(item.quantity),
                0) 
                setItemFunc(state.cartItems.map((item) => item) ,state.totalCost)
                
                   
    },

       addItemToCart: (state,action) => {
        const Item = action.payload;
        const ItemToAdd = state.cartItems.find((item) => item.id === Item)

       
         if ( ItemToAdd) { ItemToAdd.quantity ++} else {
            return
         }
         
         state.totalCost = state.cartItems.reduce( (total,item) => total + Number(item.precio) * Number(item.quantity),
                0)
         setItemFunc(state.cartItems.map((item) => item) ,state.totalCost)
         
       },

       removeItem: (state,action) => {
            const Item = action.payload;
            const ItemToRemove = state.cartItems.find((item) => item.id === Item)
    
           
             if ( ItemToRemove) { state.cartItems = state.cartItems.filter( (item) =>
                item.id !== Item) }
            console.log(Item)

            state.totalCost = state.cartItems.reduce( (total,item) => total + Number(item.precio) * Number(item.quantity),
                0)
         setItemFunc(state.cartItems.map((item) => item) ,state.totalCost)
            
       },
       
       removeAllProduts: (state,action) => {
        console.log(state.action)
        state.cartItems = action.payload;
        state.totalCost = state.cartItems.reduce( (total,item) => total + Number(item.precio) * Number(item.quantity),
                0)
         setItemFunc(state.cartItems.map((item) => item) ,state.totalCost)
       }
}
})


export const {toggleCart, addToCart, removeItemToCart, addItemToCart, removeAllProduts,removeItem} = cartSlice.actions;
export default cartSlice.reducer;