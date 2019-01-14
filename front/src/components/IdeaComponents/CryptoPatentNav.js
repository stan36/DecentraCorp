import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CryptoPatentNav.css'

class CryptoPatentNav extends Component {


  render() {
    return (
      <div className='NavSideBar'>
        <ol>
          <li><Link style={{ textDecoration: 'none', color: "white"}} to='/IdeaBlockApplication'>IdeaBlock Application</Link>
          <hr/></li>
          <li><Link style={{ textDecoration: 'none', color: "white"}} to='/ApprovedIdeas'>View Patents</Link>
          <hr/></li>
          </ol>
        </div>
    );
  }
}

export default CryptoPatentNav;
