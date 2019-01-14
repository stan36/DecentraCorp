import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DepotNav.css'

class DepotNav extends Component {


  render() {
    return (
      <div className='NavSideBar'>
        <ol>
          <li><Link style={{ textDecoration: 'none', color: "white"}} to='/Sell_Item'>Sell an Item</Link>
          <hr/></li>
          <li><Link style={{ textDecoration: 'none', color: "white"}} to='/ItemList'>Buy Item</Link>
          <hr/></li>
          </ol>
        </div>
    );
  }
}

export default DepotNav;
