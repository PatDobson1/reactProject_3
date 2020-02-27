// -- Setup --------------------------------------------------------------------
    import React from 'react';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import FeaturedItem from './FeaturedItem';
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
                <FeaturedItem
                    key={key}
                    linkTo={'/product/' + featuredItems[key].id}
                    name={featuredItems[key].name}
                    image={featuredItems[key].image}
                    description={featuredItems[key].description}
                    price={featuredItems[key].price} />
            )
        })
        return(
            <div className="content">
                <div className="contentInner">
                    <h1>Welcome to our shop</h1>
                    <div className="featuredItems">
                        {featuredDisplay}
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;
