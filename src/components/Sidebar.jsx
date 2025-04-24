import React from 'react'
import { FaListUl } from "react-icons/fa";
import { createQueryObject } from '../helpers/helper';
import styles from './Sidebar.module.css'
import { categories } from '../constant/list';
const Sidebar = ({ setQuery, query }) => {
    const categoryHandler = (e) => {
        const { tagName } = e.target
        if (tagName !== "LI") return
        const category = e.target.innerText.toLowerCase()
        setQuery(query => createQueryObject(query, { category }))
    }

    return (
        <div className={styles.sidebar}>
            <div>
                <FaListUl />
                <p>Categories</p>
                <ul onClick={categoryHandler}>
                    {categories.map((item) => (
                        <li key={item.id}
                            className={item.type.toLowerCase() === query.category ? styles.selected : null}>
                            {item.type}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar