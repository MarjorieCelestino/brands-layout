import React from 'react';

/*
* searches input value based on clients from json object in App.js
* changes display based on search result
*/
class Search extends React.Component{

	constructor(){
		super();
		this.state = {
			search: ''
		};
	}

	updateInput = event =>{
		this.setState({search: event.target.value});

	}

	searchResult = clients =>{
  	  	const allCards = document.getElementsByClassName("brand");
  	  	
  	  	for(let i=0; i<clients.length; i++){
  	  		let clientId = clients[i].id;
  	  		for(let j=0; j<allCards.length; j++){
  	  			if(allCards[j].id === clientId){
  	  				allCards[j].parentNode.style.display = 'block';
  	  			}
  	  		}
  	  	}
  	}

  	hideAll = () => {
  		const allCards = document.getElementsByClassName("brand");
  		for(let j=0; j<allCards.length; j++){
  			allCards[j].parentNode.style.display = 'none';
   		}
  	}

  	render(){
  	  let filteredClients = this.props.clientsData.brands.filter(
  	  	(brand) => {
  	  		return brand.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
  	  	}
  	  );
  	  
  	  this.hideAll();
  	  this.searchResult(filteredClients);

      return (
      		<form className="form-inline w-100">
	            <div className="input-group">
	              <input type="text" className="form-control right-border-none" placeholder="Search brands..." aria-describedby="basic-addon1"
	              	value={this.state.search} 
	              	onChange={this.updateInput.bind(this)}
	              />
	              <div className="input-group-prepend">
	                <span className="input-group-text left-border-none" id="basic-addon1"><i className="fa fa-search" style={{color:'#A5A6A8'}}></i></span>
	              </div>
	            </div>
          	</form>
      );
    }
}

export default Search;