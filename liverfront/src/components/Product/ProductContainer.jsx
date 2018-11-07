import React, {Component} from 'react'
import {getProduct} from '../../services/productService'
import { message } from 'antd'
import ProductDisplay from './ProductDisplay'


message.config({top: "400px", duration: 2, maxCount: 3,});

class ProductContainer extends Component{

    state = {
        product:[]
    }

    componentWillMount =()=>{
        getProduct(this.props.match.params.productId)
        .then(product => {
            console.log(product.data.contents[0].mainContent[0].record)
            return this.setState({product:product.data.contents[0].mainContent[0].record})
        })
        .catch(e=>{console.log(e)})
     }
    
    render(){
        const {product} = this.state
        return(
            <div>
              <ProductDisplay 
                product={product}
              />
            </div>
        )
    }
}

export default ProductContainer