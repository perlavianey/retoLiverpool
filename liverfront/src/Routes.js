import React from 'react'
import {Route,Switch} from 'react-router-dom'
import SearchContainer from './components/SearchProducts/SearchContainer'
import ProductContainer from './components/Product/ProductContainer'

const Routes = () => {
    return(
        <Switch>
            <Route path="/search" component={SearchContainer}/>
            <Route path="/productDisplay/:productId" component={ProductContainer}/>
        </Switch>
    )
}

export default Routes