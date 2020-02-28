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
                itemsDisplayed: 10,
                start: 1,
                currentPage: 1
            }
        }
        this.paginationChange = this.paginationChange.bind(this);
    }
    paginationChange(target, type){
        let itemsDisplayed = this.state.pagination.itemsDisplayed;
        let start = this.state.pagination.start;
        let currentPage = this.state.pagination.currentPage;
        if( type === 'itemsPerPage' ){
            itemsDisplayed = parseInt(target);
            start = 1;
            currentPage = 1;
        }else if( type === 'page' ){
            start = (target*itemsDisplayed)-itemsDisplayed;
            currentPage = parseInt(target);
        }
        this.setState({
            pagination: {
                itemsDisplayed: itemsDisplayed,
                start: start,
                currentPage: currentPage
            }
        })
    }
    render(){
        const allItems = this.props.state.fullData;
        const shopDisplay = [];
        const start = this.state.pagination.start;
        const end = this.state.pagination.start + this.state.pagination.itemsDisplayed;
        let totalItems = 0;
        Object.keys(allItems).forEach( (key, i) => {
            totalItems++;
            if( i >= start && i < end ){
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
                    <Pagination pagination={this.state.pagination} totalItems={totalItems} position="bottom" paginationChange={this.paginationChange} />
                </div>
            </div>
        )
    }
}

export default Shop;
