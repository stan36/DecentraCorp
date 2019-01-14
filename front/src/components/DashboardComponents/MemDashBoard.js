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
          <li><Link style={{ textDecoration: 'none', color: "white"}} to='/ProposalVote'>Proposal Voting Booth</Link>
          <hr/></li>
            <li><Link style={{ textDecoration: 'none', color: "white"}} to='/CreateFundingProp'>Create a Proposal for Funding</Link>
            <hr/></li>
              <li><Link style={{ textDecoration: 'none', color: "white"}} to='/CreateFreezeProp'>Create a Proposal to Investigate a Member for Fraud</Link>
              <hr/></li>
                <li><Link style={{ textDecoration: 'none', color: "white"}} to='/CreateTerminateProp'>Create a Proposal to have a Member Terminated</Link>
                <hr/></li>
                  <li><Link style={{ textDecoration: 'none', color: "white"}} to='/Facility'>Facility Upgrades</Link>
                  <hr/></li>
                    <li><Link style={{ textDecoration: 'none', color: "white"}} to='/ProfilSearch'>Member Profile Search</Link>
                    <hr/></li>
          </ol>
        </div>
    );
  }
}

export default MemDashBoard;
