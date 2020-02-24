// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
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
                <Content state={this.state} />
                <Footer />
            </div>
        )
    }
}

// -- Render -------------------------------------------------------------------
    ReactDOM.render(<App />, appRoot )
// -----------------------------------------------------------------------------
