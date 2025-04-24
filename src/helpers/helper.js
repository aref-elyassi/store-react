const shortenText = text => {
    return text.split(" ").slice(0, 3).join(" ")
}
const searchProducts = (products, search) => {
    if (!products) return products
    const searchProducts = products.filter(product => product.title.toLowerCase().includes(search))
    return searchProducts
}

const filterProducts = (products, category) => {
    if (!products) return products
    const filterProducts = products.filter(product => product.category === category)
    return filterProducts
}
export { shortenText, searchProducts, filterProducts }