// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import {Link} from 'react-router-dom';
// -----------------------------------------------------------------------------

class ShopItem extends React.Component{
    constructor(props){
        super(props);
        this.addToBasket = this.addToBasket.bind(this);
    }
    addToBasket(e){
        this.props.addToBasket(e.target.id);
    }
    render(){
        return(
            <div className="shopItem" key={this.props.index}>
                <Link to={this.props.linkTo}>
                    <h2>{this.props.name}</h2>
                    <img src={this.props.image} alt={this.props.name} />
                    <p className="description">
                        {this.props.description}
                        <span className="fade"></span>
                    </p>
                    <p className="price">&pound;{this.props.price}</p>
                    <span>See more</span>
                </Link>
                <a id={this.props.id} onClick={this.addToBasket} className="add">Add to basket</a>
            </div>
        )
    }
}

export default ShopItem;
