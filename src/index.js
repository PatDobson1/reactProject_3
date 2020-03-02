// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
    import 'polyfill-array-includes';
    import styles from './style/style';
    const appRoot = document.getElementById('app');
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import { getFeaturedData, getFullData, basket } from './js/Functions'
    import Header from './components/Header';
    import Home from './components/Home';
    import Shop from './components/Shop';
    import Product from './components/Product';
    import ViewBasket from './components/ViewBasket';
    import Contact from './components/Contact';
    import About from './components/About';
    import Footer from './components/Footer';
// -----------------------------------------------------------------------------


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            featuredData: '',
            fullData: '',
            featuredDataLoaded: false,
            fullDataLoaded: false,
            basket: {
                basketItems: [],
                basketQuantity: [],
                totalQuantity: 0,
                totalPrice: 0
            }
        };
        this.addToBasket = this.addToBasket.bind(this);
        this.removeFromBasket = this.removeFromBasket.bind(this);
    }
    removeFromBasket(id){
        basket(this,id,'remove');
    }
    addToBasket(id){
        basket(this, id,'add');
    }
    componentDidMount(){
        getFeaturedData(this);
    }
    render(){
        return(
            <div className="overall-content">
                <Header basket={this.state.basket} />
                <Switch>
                    <Route exact path="/" render={()=><Home state={this.state} />} />
                    <Route path="/shop" render={(props) => <Shop {...props} state={this.state} addToBasket={this.addToBasket} />} />
                    <Route path="/product/:id" render={(props) => <Product {...props} addToBasket={this.addToBasket} /> } />
                    <Route path="/viewbasket" render={(props) => <ViewBasket {...props} basket={this.state.basket} data={this.state.fullData} addToBasket={this.addToBasket} removeFromBasket={this.removeFromBasket} /> } />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

// -- Render -------------------------------------------------------------------
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, appRoot )
// -----------------------------------------------------------------------------
