// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import {Link} from 'react-router-dom';
// -----------------------------------------------------------------------------

class MenuItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Link to={'/' + this.props.target}>{this.props.title}</Link>
        )
    }
}

export default MenuItem;
