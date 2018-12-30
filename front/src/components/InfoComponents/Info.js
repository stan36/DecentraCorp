import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './Info.css';
class Info extends Component {
  render() {
    return(
    <div className='SideBar'>
      <ol>
        <li><Link style={{ textDecoration: 'none', color: "white"}} to='/Intro'>Introduction to DecentraCorp</Link>
        <hr/></li>
        <li><Link style={{ textDecoration: 'none', color: "white"}} to='/WhatIsDAO'>What is a DAO?</Link>
        <hr/></li>
        <li><Link style={{ textDecoration: 'none', color: "white"}} to='/Members'>Who are the Members of DecentraCorp?</Link>
        <hr/></li>
        <li><Link style={{ textDecoration: 'none', color: "white"}} to='/DFM'>The Decentralized Facility Model</Link>
        <hr/></li>
        <li><Link style={{ textDecoration: 'none', color: "white"}} to='/DC_ContractStructure'>The DecentraCorp Contract Structure</Link>
        <hr/></li>
        <li><Link style={{ textDecoration: 'none', color: "white"}} to='/CPBlockchain'>The CryptoPatent Blockchain</Link>
        <hr/></li>
        <li><Link style={{ textDecoration: 'none', color: "white"}} to='/CPBStructure'>Structure of the CryptoPatent Blockchain</Link>
        <hr/></li>
        <li><Link style={{ textDecoration: 'none', color: "white"}} to='/IdeaCoin'>IdeaCoin: The Currency of Ideas</Link>
        <hr/></li>
        <li><Link style={{ textDecoration: 'none', color: "white"}} to='/EPMS'>Embedded Program Mining Software</Link>
        <hr/></li>
        <li><Link style={{ textDecoration: 'none', color: "white"}} to='/DCPoA'>DC's Proof of Authority Network(PoA)</Link>
        <hr/></li>
        <li><Link style={{ textDecoration: 'none', color: "white"}} to='/ExternalResources'>External Resources</Link>
        <hr/></li>
        </ol>
      </div>

    );
  }
}

    export default Info;
