// -- Setup --------------------------------------------------------------------
    import React from 'react';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import ShopItem from './ShopItem';
    import Filters from './Filters';
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
            },
            filters: []
        }
        this.paginationChange = this.paginationChange.bind(this);
        this.addToBasket = this.addToBasket.bind(this);
        this.selectFilter = this.selectFilter.bind(this);
        this.removeFilter = this.removeFilter.bind(this);
    }
    removeFilter(category){
        let selectedFilters = this.state.filters;
        selectedFilters.splice( selectedFilters.indexOf(category),1);
        this.setState({
            filters: selectedFilters
        })
    }
    selectFilter(category){
        let selectedFilters = this.state.filters;
        if( selectedFilters.indexOf(category) === -1 ){
            selectedFilters.push(category);
        }
        this.setState({
            pagination: {
                itemsDisplayed: 20,
                start: 1,
                currentPage: 1
            },
            filters: selectedFilters
        })
    }
    addToBasket(id){
        this.props.addToBasket(id);
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
        let filteredList = [];
        Object.keys(allItems).forEach( (key, i) => {
            let addProduct = this.state.filters.includes(allItems[key].category);
            if(addProduct || this.state.filters.length === 0){
                filteredList.push(allItems[key])
            }
        })
        Object.keys(filteredList).forEach( (key, i) => {
            totalItems++;
            if( i >= start && i < end ){
                shopDisplay.push(
                    <ShopItem
                        key={key}
                        id={filteredList[key].id}
                        linkTo={'/product/' + filteredList[key].id}
                        name={filteredList[key].name}
                        image={filteredList[key].image}
                        description={filteredList[key].description}
                        price={filteredList[key].price}
                        category={filteredList[key].category}
                        addToBasket={this.addToBasket} />
                )
            }
        })
        return(
            <div className="content">
                <div className="contentInner">
                    <Filters data={this.props.state.fullData} selectFilter={this.selectFilter} removeFilter={this.removeFilter} filters={this.state.filters} />
                    <Pagination pagination={this.state.pagination} totalItems={totalItems} position="top" />
                    <div className="shopItems">
                        {shopDisplay}
                    </div>
                    {/*<Pagination pagination={this.state.pagination} totalItems={totalItems} position="bottom" paginationChange={this.paginationChange} />*/}
                </div>
            </div>
        )
    }
}

export default Shop;
