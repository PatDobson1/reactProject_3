// -- Setup --------------------------------------------------------------------
    import React from 'react';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import ShopItem from './ShopItem';
    import Pagination from './Pagination';
// -----------------------------------------------------------------------------

class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pagination: {
                itemsDisplayed: 20,
                start: 0
            }
        }
    }
    render(){
        const allItems = this.props.state.fullData;
        const shopDisplay = [];
        let totalItems = 0;
        Object.keys(allItems).forEach( (key, i) => {
            totalItems++;
            if( i >= this.state.pagination.start && i < this.state.pagination.itemsDisplayed ){
                shopDisplay.push(
                    <ShopItem
                        key={key}
                        linkTo={'/product/' + allItems[key].id}
                        name={allItems[key].name}
                        image={allItems[key].image}
                        description={allItems[key].description}
                        price={allItems[key].price} />
                )
            }
        })
        return(
            <div className="content">
                <div className="contentInner">
                    <h2>Shop</h2>
                    <Pagination pagination={this.state.pagination} totalItems={totalItems} position="top" />
                    <div className="shopItems">
                        {shopDisplay}
                    </div>
                    <Pagination pagination={this.state.pagination} totalItems={totalItems} position="bottom" />
                </div>
            </div>
        )
    }
}

export default Shop;
