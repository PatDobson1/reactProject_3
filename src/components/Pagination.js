// -- Setup --------------------------------------------------------------------
    import React from 'react';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
// -----------------------------------------------------------------------------

class Pagination extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props);
        const pagination = this.props.pagination;
        const start = pagination.start;
        const end = pagination.itemsDisplayed + pagination.start;
        return(
            <div className={"pagination " + this.props.position}>
                <p>Items {start} - {end} of {this.props.totalItems}</p>
            </div>
        )
    }
}

export default Pagination;
