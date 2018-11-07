import React, {Component} from 'react'
import {searchProduct} from '../../services/productService'
import { message } from 'antd'
import SearchDisplay from './SearchDisplay'


message.config({top: "400px", duration: 2, maxCount: 3,});

class SearchContainer extends Component{

    state = {
        productos:[],
        arrProds:[],
        loading:false
    }

    //Buscar producto
     search=(productName)=>{
        if(productName===""){ //Si el usuario no introduce un producto a buscar, le mostramos el sig. msj:
            message.error("Introduzca el nombre de un producto para buscarlo")
        }
        else{
            searchProduct(productName) //Va al servicio de búsqueda mandando como parámetro el producto a buscar
            .then(products => { //Si sí regresa algo la búsqueda:
                this.setState({productos:products.data.contents[0].mainContent[3].contents[0].records})
                let array = JSON.parse(localStorage.getItem("array"))||[] //array para almacenar las búsqudas anteriores
                if(array.includes(productName)){ //Si el producto ya fue buscado, ya no lo agrega al array de productos buscados
                    return
                }
                array.push(productName)
                localStorage.setItem("array", JSON.stringify(array)); 
                this.showSearches() 
            })
            .catch(e=>{ //Si la búsqueda no regresa ningún producto, mostramos el mensaje:
                message.info("No existen productos que coincidan con este criterio.")
            })
        }
    }

    //Muestra la lista de las búsquedas de productos hechas anteriormente
    showSearches=()=>{ 
        if(!JSON.parse(localStorage.getItem("array"))){ //Si no ha habido búsquedas antes, muestra el msj:
            message.info("No hay búsquedas anteriores")
        }
        else{ //Si sí ha habido busquedas anteriormente, las ponemos en el state para mostrarlas
            var array = JSON.parse(localStorage.getItem("array"))
            this.setState({arrProds:array})
        }
    }
    
    render(){
        const {productos} = this.state
        const {arrProds} = this.state
        return(
            <div>
              <SearchDisplay 
                products={productos}
                search={this.search}
                arrProds={arrProds}
                showSearches={this.showSearches}
              />
            </div>
        )
    }
}

export default SearchContainer