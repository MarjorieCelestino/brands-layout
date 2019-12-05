import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Brands from './Brands.js';
import Search from './Search.js';


const jsonClients = {
      'brands':[
        {'id': 1, 'name': 'Amorelie'},
        {'id': 2, 'name': 'Daim'},
        {'id': 3, 'name': 'Cadbury'},
        {'id': 4, 'name': 'Marabou'},
        {'id': 5, 'name': 'Under Armour'},
        {'id': 6, 'name': 'M Design'},
        {'id': 7, 'name': 'Henkel'}
      ]
    }

/*
* main component
* passes the json data to Brands.js and Search.js
*/
class App extends React.Component{
  render(){
      return (
            <main>
                <div className="container-fluid search-content">
                  <div className="row">
                    <div className="col-md-3 d-flex align-items-center">
                      <span className="brands-text">Your brands <i className="fa fa-angle-up" style={{color:'#A5A6A8'}}></i></span>
                    </div>
                    <div className="col-md-9 d-flex align-items-center">
                      <Search clientsData={this.props.clients} />
                    </div>
                  </div>
                </div>
                <div className="container-fluid card-content">
                  <Brands clientsData={this.props.clients} />
                </div>
            </main>
    );
  }
  
}

ReactDOM.render(<App clients={jsonClients} />, document.getElementById('root'));