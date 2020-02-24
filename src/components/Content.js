// -- Setup --------------------------------------------------------------------
    import React from 'react';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------

// -----------------------------------------------------------------------------

class Content extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const featuredItems = this.props.state.featuredData;
        const featuredDisplay = [];
        Object.keys(featuredItems).forEach(key=>{
            featuredDisplay.push(
                <div className="featuredItem" key={key}>
                    <h1>{featuredItems[key].name}</h1>
                    {/* <img src={featuredItems[key].image} alt={featuredItems[key].name} /> */}
                    <p>{featuredItems[key].description}</p>
                    <p>&pound;{featuredItems[key].price}</p>
                </div>
            )
        })
        return(
            <div className="content">
                <div className="contentInner">
                    {featuredDisplay}
                </div>
            </div>
        )
    }
}

export default Content;
