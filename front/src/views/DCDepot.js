
import React, { Component } from 'react';
import DepotNav from '../components/DC_Depot/DepotNav';
import ItemList from '../components/DC_Depot/ItemList';
import './Depot.css';

class DCDepot extends Component {
  render() {
    return(
          <div>
      <DepotNav />
      <br/>
        <ItemList />
      </div>


    );
  }
}

    export default DCDepot;
