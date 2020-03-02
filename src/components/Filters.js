// -- Setup --------------------------------------------------------------------
    import React from 'react';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
// -----------------------------------------------------------------------------

class Filters extends React.Component{
    constructor(props){
        super(props);
        this.selectFilter = this.selectFilter.bind(this);
        this.removeFilter = this.removeFilter.bind(this);
    }
    removeFilter(e){
        e.stopPropagation();
        this.props.removeFilter(e.target.target);
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
            let filterClass = '';
            filterClass = this.props.filters.includes(categories[i]) ? 'selected' : 'not';
            filterList.push(
                <span key={i}>
                    <a key={i} target={categories[key]} onClick={this.selectFilter} className={filterClass}>
                        {categories[key]}
                    </a>
                    <a onClick={this.removeFilter} target={categories[key]} className="remove">x</a>
                </span>
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
