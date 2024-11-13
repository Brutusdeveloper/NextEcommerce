import { createSlice } from "@reduxjs/toolkit"

const initialState={
    favorite:[],
    cart:[],
    userInformation:null,
}

export const shoppersSlice=createSlice({
    name:"shoppersSlice",
    initialState: initialState,
    reducers:{
        addToCart:(state, action)=>{
            state.cart = action.payload; 
        }
    }
})

export const {addToCart} = shoppersSlice.actions;
export default shoppersSlice.reducer