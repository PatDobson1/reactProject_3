// -- Setup --------------------------------------------------------------------
    import React from 'react';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
// -----------------------------------------------------------------------------

class Basket extends React.Component{
    render(){
        const basket = this.props.basket;
        let ex = basket.totalQuantity == 1 ? '' : 's';
        return(
            <div className="basket">
                <p>Shopping basket</p>
                <p>{basket.totalQuantity} item{ex}</p>
                <p>&pound;{basket.totalPrice.toFixed(2)}</p>
            </div>
        )
    }
}

export default Basket;
