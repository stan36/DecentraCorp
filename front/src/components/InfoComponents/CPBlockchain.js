import React, { Component } from 'react';
import Info from './Info';

class CPBlockchain extends Component {
  render() {
    return(
<div className="flex-container">
  <Info />

        <div className='CP_Blockchain'>
          <br/>
            <h2 style={{ color: "teal"}}>The CryptoPatent Blockchain:</h2>
            <br/>
              <p>
              The CryptoPatent Blockchain allows any idea with an applicable use case to be
              patented. Once an idea receives community approval, it and replications of it can
              be used to mine IdeaCoin. All ideas patented to the CryptoPatent Blockchain are
              open-source and therefore can be freely replicated by ANYONE!
              </p>
          <br/>
          <p>Idea's are subject to an application approval process in which all aspects of an idea are subject
            to community reveiew. This process allows the DecentraCorp community to evaluate all aspects of an Idea before it is added
            to the CryptoPatent Blockchain. This includes an ideas use case, use-mining reward, and its use-mining time as well as its build in regards to
            both hardware and software. This idea approval process is meant to ensure that ideas designed to abuse the system never make it on chain to begin with.</p>
            <br/>
            <p>While Ideas are free to replicate, a stake in IdeaCoin is required to activate a replication
              on the CryptoPatent Blockchain. Only Properly staked and activated Ideas are capable of mining IdeaCoin.</p>
            <br/>
      </div>
      </div>
    );
  }
}

    export default CPBlockchain;
