// -- Setup --------------------------------------------------------------------
    import React from 'react';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
// -----------------------------------------------------------------------------

class Filters extends React.Component{
    constructor(props){
        super(props);
        this.selectFilter = this.selectFilter.bind(this);
    }
    selectFilter(e){
        this.props.selectFilter(e.target.target);
    }
    render(){
        const data = this.props.data;
        let categories = [];
        let filterList = [];
        Object.keys(data).forEach( (key,i) => {
            if( categories.indexOf( data[key].category )  === -1 ){
                categories.push(data[key].category)
            }
        })
        Object.keys(categories).forEach( (key,i) => {
            filterList.push(
                <a key={i} target={categories[key]} onClick={this.selectFilter}>{categories[key]}</a>
            )
        })
        return(
            <div className="filters">
                {filterList}
            </div>
        )
    }
}

export default Filters;
