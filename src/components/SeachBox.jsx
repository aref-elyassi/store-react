import React from 'react'
import { ImSearch } from "react-icons/im";
import { createQueryObject } from '../helpers/helper';
import styles from './SearchBox.module.css'
const SeachBox = ({ search, setSearch, setQuery }) => {
  const searchHandler = () => {
    setQuery(query => createQueryObject(query, { search }))
  }
  
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search..." value={search}
        onChange={e => setSearch(e.target.value.toLocaleLowerCase().trim())} />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  )
}

export default SeachBox