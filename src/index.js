// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import styles from './style/style';
    const appRoot = document.getElementById('app');
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import {getData} from './static/Functions'
// -----------------------------------------------------------------------------


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: '',
            dataLoaded: false
        };
    }
    componentDidMount(){
        getData(this);
    }
    render(){
        if( this.state.dataLoaded ){
            console.log("dataLoaded");
            console.log(this.state.data);
        }
        return(
            <div className="overall-content">
                <h1>APP 3</h1>
                <p>dataLoaded : {String(this.state.dataLoaded)}</p>
            </div>
        )
    }
}

// -- Render -------------------------------------------------------------------
    ReactDOM.render(<App />, appRoot )
// -----------------------------------------------------------------------------
