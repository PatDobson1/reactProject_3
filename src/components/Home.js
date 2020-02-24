// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import {Link} from 'react-router-dom';
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
                    <Link to="shop">
                        <h2>{featuredItems[key].name}</h2>
                        <img src={featuredItems[key].image} alt={featuredItems[key].name} />
                        <p className="description">
                            {featuredItems[key].description}
                            <span className="fade"></span>
                        </p>
                        <p className="price">&pound;{featuredItems[key].price}</p>
                        <span>See more</span>
                    </Link>
                </div>
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
