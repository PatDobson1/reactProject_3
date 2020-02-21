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
                [content]
                <p>dataLoaded : {String(this.props.state.dataLoaded)}</p>
            </div>
        )
    }
}

export default Content;
