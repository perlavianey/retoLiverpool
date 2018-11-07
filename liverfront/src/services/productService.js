import axios from 'axios'

const url = 'https://www.liverpool.com.mx/tienda'


//Traer los productos que coincidan con el criterio de búsqueda
export const searchProduct = (productName) => {
    return axios.get(url + `/?s=${productName}&d3106047a194921c01969dfdec083925=json`)
    .then(products=>{
        return products
    })
    .catch(error=>{
        return error
    })
}

//Trae un producto por ID
export const getProduct = (productId) => {
    return axios.get(url + `/pdp/${productId}?&d3106047a194921c01969dfdec083925=json`)
    .then(product=>{
        return product
    })
    .catch(error=>{
        return error
    })
}