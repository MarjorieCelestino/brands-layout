import React from 'react';
import Card from './Card.js';

/*
* gets clientsData from App.js json object
* maps each client to Card component
*/
class Brands extends React.Component{
  	render(){
      return (

      	<div className="row">
      		<div className="col-3">
	          <div id='0' className="card shadow-sm">
	            <div className="card-body">
	              <div className="list-group">
	                <a href="!#" className="list-group-item list-group-item-action text-center">All Phases</a>
	                <a href="!#" className="list-group-item list-group-item-action text-center">Monitoring</a>
	                <a href="!#" className="list-group-item list-group-item-action text-center">Amazon cases</a>
	                <a href="!#" className="list-group-item list-group-item-action text-center">
	                  <span className="badge badge-pill pill-orange">
	                  Dashboard
	                  </span>
	                </a>
	                <a href="!#" className="list-group-item list-group-item-action text-center">
	                  <span className="badge badge-pill pill-transparent">
	                  Product Catalog
	                  </span>
	                </a>
	              </div>
	            </div>
	          </div>
	        </div>

      		{ 
      			this.props.clientsData.brands.map((client) => {
      			return <Card brand={client} key={client.id}/>
      			})
      		}
      	</div>
      );
    }
}

export default Brands;
