// -- Setup --------------------------------------------------------------------
    import React from 'react';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import { getProduct, basket } from '../js/Functions'
// -----------------------------------------------------------------------------

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productData: [],
            productDataLoaded: false
        }
        this.addToBasket = this.addToBasket.bind(this);
    }
    addToBasket(e){
        this.props.addToBasket(e.target.id);
    }
    componentDidMount(){
        getProduct(this, this.props.match.params.id);
        window.scrollTo(0, 0);
    }
    render(){
        const product = this.state.productData;
        let name, description, price, image, inStock, category, id = '';
        Object.keys(product).forEach(key=>{
            id = product[key].id;
            name = product[key].name;
            description = product[key].description;
            price = product[key].price;
            image = product[key].image;
        })
        return(
            <div className="content">
                <div className="contentInner product">
                    <h1>{name}</h1>
                    <div className="info">
                        <img src={image} alt={name} />
                        <p className="price">&pound;{price}</p>
                        <a id={id} onClick={this.addToBasket}>Add to basket</a>
                    </div>
                    <p className="description">{description}</p>
                </div>
            </div>
        )
    }
}

export default Product;
