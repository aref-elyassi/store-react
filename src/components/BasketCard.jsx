import React from 'react'
import { shortenText } from '../helpers/helper'
import { MdDeleteOutline } from 'react-icons/md'

const BasketCard = ({data,clickHandler}) => {
  return (
    <div>
        <img src={data.image} alt={data.title} />
        <p>{shortenText(data.title)}</p>
        <div>
           {data.quantity===1 && (<button onClick={()=>clickHandler("REMOVE-ITEM",data)}>
            <MdDeleteOutline/>
           </button>)} 
           {
            data.quantity>1 && (<button onClick={()=>clickHandler("DECREASE",data)}>
                -
            </button>)
           }
           <span>{data.quantity}</span>
           <button onClick={()=>clickHandler("INCREASE",data)}>
               +
            </button>
        </div>
    </div>
  )
}

export default BasketCard