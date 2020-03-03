// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import Logo from './Logo';
    import Menu from './Menu';
    import Basket from './Basket';
// -----------------------------------------------------------------------------

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    mobileMenu(){
        document.getElementById('menu').style.display = 'block';
    }
    render(){
        return(
            <div className="header">
                <div className="headerContent">
                    <Logo />
                    <Menu />
                    <Basket basket={this.props.basket} />
                    <a className="mobileMenu" onClick={this.mobileMenu}></a>
                </div>
            </div>
        )
    }
}

export default Header;
