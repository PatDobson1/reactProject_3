// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import {Link} from 'react-router-dom';
// -----------------------------------------------------------------------------

class FeaturedItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="featuredItem">
                <Link to={this.props.linkTo}>
                    <h2>{this.props.name}</h2>
                    <img src={this.props.image} alt={this.props.name} />
                    <p className="description">
                        {this.props.description}
                        <span className="fade"></span>
                    </p>
                    <p className="price">&pound;{this.props.price}</p>
                    <span>See more</span>
                </Link>
            </div>
        )
    }
}

export default FeaturedItem;
