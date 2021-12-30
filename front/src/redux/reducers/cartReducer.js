import { types } from "../types/types";


const initialState = {
    cart : []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CART:
            return{
                ...state,
                cart: action.payload
            }

        default:
            return state;
    }
}