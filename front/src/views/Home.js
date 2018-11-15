import React, { Component } from 'react';

class Home extends Component {
  render() {
    return(
      <div className='container'>
        <h1>Welcome to the DecentraCorp dApp</h1>
        <br/>
        <p>DecentraCorp is the world's first Decentralized Autonomous Corporation</p>
        <p>where the CEO’s and shareholders are the same people who build and maintain </p>
        <p>the machinery.</p>
        <br/>
        <p> DecentraCorp’s goal is to empower the individual </p>
        <p> with the tools and technology to build a better world! </p>
        <br/>
        <p>To reach this goal, DecentraCorp will employ the use of </p>
        <p>Distributed Ledger Technologies, starting with IPFS and </p>
          <p>smart-contracts on the Ethereum Virtual Machine</p>
        <p>(both on and off the Ethereum Mainnet). </p>
        <br/>
        <p> Utilizing these technologies and more, </p>
        <p> DecentraCorp aims to provide the open source and </p>
        <p> makers communities with a framework to help tinkerers and builders </p>
        <p> earn a living for doing what they love while simultaneously helping to better their communities.</p>
        <br/>
        <p> Please Feel Free to explore this dApp During its Early alpha phase!</p>
        <p>You must be connected to the ropsten test network Inorder to use this dApp!</p>
      </div>
    );
  }
}

    export default Home;
