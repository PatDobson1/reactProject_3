// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import {Link} from 'react-router-dom';
// -----------------------------------------------------------------------------

class MenuItem extends React.Component{
    constructor(props){
        super(props);
    }
    menuClick(){
        document.getElementById('menu').style.display = 'none';
    }
    render(){
        return(
            <Link to={'/' + this.props.target} onClick={this.menuClick}>{this.props.title}</Link>
        )
    }
}

export default MenuItem;
