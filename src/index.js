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
    import Content from './components/Content';
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
                    <Route exact path="/" render={()=><Content context="content" state={this.state} />} />
                    <Route path="/about" render={()=><Content context="about" />} />
                    <Route path="/contact" render={()=><Content context="contact" />} />
                    <Route path="/terms" render={()=><Content context="terms" />} />
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
