// -- Setup --------------------------------------------------------------------
    import React from 'react';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
// -----------------------------------------------------------------------------

class MenuItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <a target={this.props.target}>{this.props.title}</a>
        )
    }
}

export default MenuItem;
