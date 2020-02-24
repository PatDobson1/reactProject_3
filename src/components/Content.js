// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------

// -----------------------------------------------------------------------------

class Content extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <p>featuredDataLoaded : {String(this.props.state.featuredDataLoaded)}</p>
                <p>fullDataLoaded : {String(this.props.state.fullDataLoaded)}</p>
            </div>
        )
    }
}

export default Content;
