import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import { TbListDetails, TbShoppingBagCheck } from 'react-icons/tb'
import { productQuantity, shortenText } from '../helpers/helper'
import { useCart } from '../context/CartContext'
import { MdDeleteOutline } from 'react-icons/md'

function Card({ data }) {
    const [state, dispatch] = useCart()
    const { id, title, image, price } = data
    const quantity = productQuantity(state, id)
    const clickHandler = (type) => {
        dispatch({ type: type, payload: data })
    }
    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <h3>{shortenText(title)} </h3>
            <p>{price} $</p>
            <div className={styles.actions}>
                <Link to={`/products/${id}`}>
                    <TbListDetails />
                </Link>
                <div>
                    {
                        quantity === 0 ? (<button onClick={() => clickHandler("ADD_ITEM")}>
                            <TbShoppingBagCheck />
                        </button>) : (<button onClick={() => clickHandler("INCREASE")}>
                            +
                        </button>)
                    }
                    {quantity === 1 && (<button onClick={() => clickHandler("REMOVE_ITEM")}>
                        <MdDeleteOutline />
                    </button>)}
                    {
                    }
                    {
                        quantity > 1 && (<button onClick={() => clickHandler("DECREASE")}>
                            -
                        </button>)
                    }
                    <span>{quantity}</span>
                </div>
            </div>
        </div>
    )
}

export default Card
