import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()
const initialState = {

}
const reducer = (state, action) => { }
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
    )
}
const useCart = () => {
    const result = useContext(CartContext)
    return [result, dispatch]
    console.log(result);
}
export default CartProvider
export { useCart }