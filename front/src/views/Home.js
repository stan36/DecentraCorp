import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return(
      <div class="flex-container">
        <div>
          <h2 style={{ color: "gold"}}>Welcome to DecentraCorp</h2>
        <br/>
        <p>DecentraCorp is the world's first Decentralized Autonomous Corporation
        where the CEO’s and shareholders are the same people who build and maintain
        the machinery.</p>
        <br/>
        <p> DecentraCorp’s goal is to empower the individual
         with the tools and technology to build a better world! </p>
        <br/>
        <p>To reach this goal, DecentraCorp will employ the use of
        Distributed Ledger Technologies, starting with IPFS and
          smart-contracts on the Ethereum Virtual Machine
        (both on and off the Ethereum Mainnet). </p>
        <br/>
        <p> Utilizing these technologies and more,
         DecentraCorp aims to provide the open source and
         makers communities with a framework to help tinkerers and builders
         earn a living for doing what they love while simultaneously helping to better their communities.</p>
        <br/>
        <p> Please Feel Free to explore this dApp During its Early alpha phase!
        You must be connected to the ropsten test network Inorder to use this dApp!</p>
      <Link style={{  color: "red"}} to='/intro'> Click Here to visit the Information pages and find links to Our WhitePapers!</Link>
      </div>
      <br/>
    </div>
    );
  }
}

    export default Home;
