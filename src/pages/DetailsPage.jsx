import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useProductDetails } from "../context/ProductContext"
import Loader from "../components/Loader"

function DetailsPage() {
  const{id}=useParams()
const productDetails=useProductDetails(+id)
if(!productDetails) return <Loader/>

  return (
    <div>
      <img src={productDetails.image} alt={productDetails.title} />
      <div>
        <h3>{productDetails.title}</h3>
        <p>{productDetails.dscription}</p>
        <p>{productDetails.category}</p>
        <div>
          <span>{productDetails.price}$</span>
          <Link to='/products'>Back TO Shop</Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
