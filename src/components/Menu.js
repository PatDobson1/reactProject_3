// -- Setup --------------------------------------------------------------------
    import React from 'react';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import MenuItem from './MenuItem';
// -----------------------------------------------------------------------------

class Menu extends React.Component{
    render(){
        return(
            <div className="menu">
                <MenuItem target="home" title="Home" />
                <MenuItem target="shop" title="Shop" />
                <MenuItem target="about" title="About" />
                <MenuItem target="contact" title="Contact" />
            </div>
        )
    }
}

export default Menu;
