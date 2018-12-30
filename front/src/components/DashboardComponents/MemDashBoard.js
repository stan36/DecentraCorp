import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MemDashBoard.css'

class MemDashBoard extends Component {


  render() {
    return (
      <div className='SideBar'>
        <ol>
          <li><Link style={{ textDecoration: 'none', color: "white"}} to='/Profile'>Your Profile</Link>
          <hr/></li>
          <li><Link style={{ textDecoration: 'none', color: "white"}} to='/IDC_Wallet'>IdeaCoin Wallet</Link>
          <hr/></li>
          <li><Link style={{ textDecoration: 'none', color: "white"}} to='/UpdateProfile'>Update Profile</Link>
          <hr/></li>
            <li><Link style={{ textDecoration: 'none', color: "white"}} to='/IdeaVote'>IdeaBlock Voting Booth</Link>
            <hr/></li>
          </ol>
        </div>
    );
  }
}

export default MemDashBoard;
