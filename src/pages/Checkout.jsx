import BasketCard from "../components/BasketCard"
import { useCart } from "../context/CartContext"

function Checkout() {
  const [state,dispatch]=useCart()
const clickHandler=(type,payload)=>{
dispatch({type,payload})
}
  return (
    <div>
     <div>
      {state.selectedItems.map(product=><BasketCard data={product} clickHandler={clickHandler}/>)}
     </div>
    </div>
  )
}

export default Checkout
