import React from 'react';

/*
* create each card for a client brand from json object in App.js
* gets the brand from Brands.js
*/
class Card extends React.Component{
  	render(){
      return (
      		<div className="col-6 col-md-4 col-lg-3">
			  <div id={this.props.brand.id} className="card shadow-sm brand">
			    <div className="card-body text-center d-flex justify-content-center">
			      <img className="card-img" alt="" src={process.env.PUBLIC_URL + '/img/'  + this.props.brand.name.toLowerCase() + '.jpg'} />
			    </div>
			  </div>
			</div>
      );
    }
}

export default Card;