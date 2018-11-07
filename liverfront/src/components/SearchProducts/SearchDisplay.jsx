import React from 'react'
import {Link} from 'react-router-dom'
import '../../index.css'
import { Input,Card, Collapse } from 'antd';
import logo from '../../images/logo_liverpool.png'
const Panel = Collapse.Panel;
const Search = Input.Search;
const { Meta } = Card;
const SearchDisplay = ({search,showSearches,products=[],arrProds=[]})=>{ 
    return(
        <div className="search">
            <header className="header">
                <Link to="/search"><img src={logo} alt="logo" className="logoImg"/></Link>
                <Search
                placeholder="¿Qué producto desea buscar?"
                onSearch={value=>search(value)}
                className="searchInput"/>
            </header>
            
            <div className="results">
            {products.map((p, key)=>{
                return  <Link to={`/productDisplay/${p.productId}`} key={key}>
                    <Card className="productCard" 
                    hoverable
                    bordered='true'
                    cover={<img alt="productImage" src={p.smallImage}/>}> <hr/>
                        <Meta
                            title={p.productDisplayName[0]}
                            description={`$`+p.productPrice}/>
                    </Card>
                </Link>
                })}  
            </div>

            <div className="searches">
                <Collapse accordion onChange={showSearches}>
                    <Panel header="Productos buscados anteriormente" key="1">
                        {arrProds.map((prod, key)=>{
                            return <p key={key}>{prod}</p>
                        })}  
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}

export default SearchDisplay


