// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import {Link} from 'react-router-dom';
// -----------------------------------------------------------------------------

class Basket extends React.Component{
    render(){
        const basket = this.props.basket;
        let ex = basket.totalQuantity == 1 ? '' : 's';
        return(
            <Link className="basket" to="/basket">
                <p>{basket.totalQuantity} item{ex}, &pound;{basket.totalPrice.toFixed(2)}</p>
            </Link>
        )
    }
}

export default Basket;
