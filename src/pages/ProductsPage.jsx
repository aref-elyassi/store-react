
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import styles from './ProductsPage.module.css'
import { useEffect, useState } from "react";

import { createQueryObject, filterProducts, getInitialQuery, searchProducts } from "../helpers/helper";
import { useSearchParams } from "react-router-dom";
import SeachBox from "../components/SeachBox";
import Sidebar from "../components/Sidebar";
import { categories } from "../constant/list";



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




  return (
    <>
     <SeachBox search={search} setSearch={setSearch} setQuery={setQuery}/>
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map(product => (
            <Card key={product.id} data={product} />
          ))}
        </div>
      <Sidebar setQuery={setQuery} query={query}/>
      </div>
    </>
  )
}

export default ProductsPage
