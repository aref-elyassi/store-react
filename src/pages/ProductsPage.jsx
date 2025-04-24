import { ImSearch } from "react-icons/im";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import styles from './ProductsPage.module.css'
import { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa";
import { createQueryObject, filterProducts, getInitialQuery, searchProducts } from "../helpers/helper";
import { useSearchParams } from "react-router-dom";



function ProductsPage() {
  const products = useProducts()
  const [search, setSearch] = useState("")
  const [displayed, setDisplayed] = useState([])
  const [query, setQuery] = useState({})
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setDisplayed(products)
    setQuery(getInitialQuery(searchParams))
  }, [products])

  useEffect(() => {
    setSearchParams(query)
    let finalProducts = searchProducts(products, query.search)
    finalProducts = filterProducts(finalProducts, query.category)
    console.log(finalProducts);
    setDisplayed(finalProducts)
  }, [query])

  const searchHandler = () => {
    setQuery(query => createQueryObject(query, { search }))
  }

  const categoryHandler = (e) => {
    const { tagName } = e.target
    if (tagName !== "LI") return
    const category = e.target.innerText.toLowerCase()
    setQuery(query => createQueryObject(query, { category }))
  }

  return (
    <>
      <div>
        <input type="text" placeholder="Search..." value={search}
          onChange={e => setSearch(e.target.value.toLocaleLowerCase().trim())} />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map(product => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
            <ul onClick={categoryHandler}>
              <li>All</li>
              <li>Electronics</li>
              <li>Jewelery</li>
              <li>Men's Clothing</li>
              <li>Women's Clothing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsPage
