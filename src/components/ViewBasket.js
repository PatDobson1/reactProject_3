// -- Setup --------------------------------------------------------------------
    import React from 'react';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
// -----------------------------------------------------------------------------

class ViewBasket extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="content">
                <div className="contentInner">
                    <h2>Your shopping basket</h2>
                </div>
            </div>
        )
    }
}

export default ViewBasket;
