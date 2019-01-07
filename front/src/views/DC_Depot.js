
import React, { Component } from 'react';

import ItemList from '../components/DC_Depot/ItemList';
import './DC_Depot.css';

class DC_Depot extends Component {
  render() {
    return(
          <div>
        <div className='container'>
        <p style={{color: 'red'}}>
        This feature does not yet work on mobile! Please visit us on a desktop to use the DC Depot.
        </p>
        <ItemList />
      </div>
    </div>
    );
  }
}

    export default DC_Depot;
