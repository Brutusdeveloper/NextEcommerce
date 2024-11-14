import { createSlice } from "@reduxjs/toolkit"
import { ProductData } from "../../type"


interface UserInformation{
    id: string,
    name: string,
    email: string
}

interface initialState{
    cart: ProductData[],
    wishList: ProductData[]
    userInformation: UserInformation | null
}

const initialState:initialState={
    wishList:[],
    cart:[],
    userInformation:null,
}

export const shoppersSlice=createSlice({
    name:"shoppersSlice",
    initialState: initialState,
    reducers:{
        addToWishList:(state, action)=>{
            state.wishList.push(action.payload);
        },
        removeWishList:(state, action)=>{
            state.wishList = [];
        },
        addUser:(state, action)=>{
            state.userInformation = action.payload
        },
        removeUser:(state)=>{
            state.userInformation = null
        },
        increaseQuantity:(state, action)=>{
            const existingProduct = state.cart.find((item)=> item._id === action.payload._id);
            if(existingProduct){
                existingProduct.quantity +=1;
            } else{
                state.cart.push(action.payload);
            }
        },
        decreaseQuantity:(state, action)=>{
            const existingProduct = state.cart.find((item)=> item._id === action.payload._id);
            if(existingProduct){
                existingProduct.quantity -=1;
            } else{
                state.cart.push(action.payload);
            }
        },
        removeFromCart:(state, action)=>{
            state.cart = state.cart.filter((item)=> item._id !== action.payload._id);
        },
        resetCart:(state)=>{
            state.cart = [];
        }
    }
})

export const {
    increaseQuantity,
    removeFromCart,
    resetCart,
    decreaseQuantity,
    addUser,
    removeUser,
    addToWishList,
    removeWishList
} = shoppersSlice.actions;
export default shoppersSlice.reducer