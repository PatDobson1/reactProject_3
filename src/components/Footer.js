// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------

// -----------------------------------------------------------------------------

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let date = new Date().getFullYear();
        return(
            <div className="footer">
                <div className="footerContent">
                    <p>All content &copy;{date} The Shop</p>
                </div>
            </div>
        )
    }
}

export default Footer;
