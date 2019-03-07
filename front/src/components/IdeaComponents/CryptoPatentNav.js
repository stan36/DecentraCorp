import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CryptoPatentNav extends Component {


  render() {
    return (
      <div>
        <ul>
          <li><Link style={{ textDecoration: 'none', color: "white"}} to='/IdeaBlockApplication'>IdeaBlock Application</Link>
          </li>
          <li><Link style={{ textDecoration: 'none', color: "white"}} to='/ApprovedIdeas'>View Patents</Link>
          </li>
        </ul>
        </div>
    );
  }
}

export default CryptoPatentNav;
