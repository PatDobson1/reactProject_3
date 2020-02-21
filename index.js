// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import styles from './style/style';
    let data = require('./data/data.json');
    const appRoot = document.getElementById('app');
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import Header from './components/Header';
    import Content from './components/Content';
    import Footer from './components/Footer';
// -----------------------------------------------------------------------------


class App extends React.Component{
    constructor(props){
        super(props);
        this.state  = { currentPage : 'home' };
        this.menuHandler = this.menuHandler.bind(this);
    }
    menuHandler(target){
        this.setState({ currentPage : target });
    }
    render(){
        return(
            <div className="overall-content">
                <Header data={data} menuHandler={this.menuHandler} />
                <Content currentPage={this.state.currentPage} />
                <Footer data={data} menuHandler={this.menuHandler} />
            </div>
        )
    }
}

// -- Render -------------------------------------------------------------------
    ReactDOM.render(<App />, appRoot )
// -----------------------------------------------------------------------------
