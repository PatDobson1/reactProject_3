// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
    import styles from './style/style';
    const appRoot = document.getElementById('app');
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import { getFeaturedData, getFullData } from './js/Functions'
    import Header from './components/Header';
    import Home from './components/Home';
    import Shop from './components/Shop';
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
            fullDataLoaded: false
        };
    }
    componentDidMount(){
        getFeaturedData(this);
    }
    render(){
        return(
            <div className="overall-content">
                <Header />
                <Switch>
                    <Route exact path="/" render={()=><Home state={this.state} />} />
                    <Route path="/shop" render={()=><Shop />} />
                    <Route path="/about" render={()=><About />} />
                    <Route path="/contact" render={()=><Contact />} />
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
