// -- Setup --------------------------------------------------------------------
    import React from 'react';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import BasketItem from './BasketItem';
// -----------------------------------------------------------------------------

class ViewBasket extends React.Component{
    constructor(props){
        super(props);
        this.addToBasket = this.addToBasket.bind(this);
        this.removeFromBasket = this.removeFromBasket.bind(this);
    }
    removeFromBasket(id){
        this.props.removeFromBasket(id);
    }
    addToBasket(id){
        this.props.addToBasket(id);
    }
    render(){
        const basket = this.props.basket.basketItems;
        const data = this.props.data;
        let basketDisplay = [];
        let grandTotal = 0;
        if( basket.length > 0 ){
            Object.keys(basket).forEach( (key, i) => {
                let quantity = this.props.basket.basketQuantity[key];
                let dataKey = basket[key];
                let id = parseInt(data.find( item => item.id === parseInt(dataKey)).id);
                let name = data.find( item => item.id === parseInt(dataKey)).name;
                let price = parseFloat(data.find( item => item.id === parseInt(dataKey)).price);
                let totalPrice = price * quantity;
                grandTotal += totalPrice;
                basketDisplay.push(
                    <BasketItem
                        key={basket[key]}
                        id={id}
                        name={name}
                        quantity={quantity}
                        unitPrice={price}
                        totalPrice={totalPrice}
                        addToBasket={this.addToBasket}
                        removeFromBasket={this.removeFromBasket} />
                )
            })
        }
        return(
            <div className="content">
                <div className="contentInner">
                    <h2>Your shopping basket</h2>
                    {basket.length > 0 ? (
                        <table className="viewBasket">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quanity</th>
                                    <th>Unit price</th>
                                    <th>Total price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {basketDisplay}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="3">Total:</td>
                                    <td>&pound;{grandTotal.toFixed(2)}</td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </table>
                    ) : (
                        <p className="emptyBasket"><em>Your basket is empty</em></p>
                    )}
                </div>
            </div>
        )
    }
}

export default ViewBasket;
