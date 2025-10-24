import React from 'react'
import { PiShoppingCartBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import styles from './Layout.module.css'
const Layout = ({children}) => {
    const [state]=useCart()
  return (
   <>
    <header className={styles.header}>
        <Link to="/products">BotoShop</Link>
        <Link to='/checkout'>
        <PiShoppingCartBold/>
       {
        !!state.itemsCounter &&  <span>{state.itemsCounter}</span>
       }
        </Link>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>Developed By Love</p>
    </footer>
   </>
  )
}

export default Layout