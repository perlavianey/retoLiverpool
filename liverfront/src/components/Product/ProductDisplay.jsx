import React from 'react'
import {Link} from 'react-router-dom'
import '../../index.css'
import { } from 'antd';
import logo from '../../images/logo_liverpool.png'


const ProductDisplay = ({product={}})=>{ 
    return(
        <div className="search">
            <header className="header">
                <Link to="/search"><img src={logo} alt="logo" className="logoImg"/></Link>
                <Link to="/search" className="back">Regresar</Link>
            </header>
            
            <div className="productoUnico">
                <img alt="prod_image" src={product.largeImage}/>
                <div className="prodDescription">
                    <p>{product.productDisplayName}</p>
                    <p>Código de Producto: {product.productId}</p>
                    <p>$ {product.productPrice}</p>
                </div>
                
            </div>
        </div>
    )
}

export default ProductDisplay