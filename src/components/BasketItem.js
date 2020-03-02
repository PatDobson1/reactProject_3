// -- Setup --------------------------------------------------------------------
    import React from 'react';
// -----------------------------------------------------------------------------

class BasketItem extends React.Component{
    constructor(props){
        super(props);
        this.addToBasket = this.addToBasket.bind(this);
        this.removeFromBasket = this.removeFromBasket.bind(this);
    }
    removeFromBasket(e){
        this.props.removeFromBasket(e.target.id);
    }
    addToBasket(e){
        this.props.addToBasket(e.target.id);
    }
    render(){
        let price = parseFloat(this.props.unitPrice);
        let total = parseFloat(this.props.totalPrice);
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.quantity}</td>
                <td>&pound;{price.toFixed(2)}</td>
                <td>&pound;{total.toFixed(2)}</td>
                <td><a id={this.props.id} onClick={this.addToBasket}>+</a><a id={this.props.id} onClick={this.removeFromBasket}>-</a></td>
            </tr>
        )
    }
}

export default BasketItem;
