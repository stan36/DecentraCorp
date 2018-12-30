import React, { Component } from 'react';
import Info from './Info';

class Intro extends Component {
  render() {
    return(
<div className="flex-container">
  <Info />
      <div className='intro'>
        <h3 style={{ color: "green"}}>Thank you for visiting DecentraCorp's dApp in its early alpha phase!</h3>
        <br/>
        <p style={{ color: "red"}}>Links to the whitepapers for this project can be found at the bottom of this page</p>
        <br/>
        <h3 style={{ color: "gold"}}>
          DecentraCorp:
        </h3>
        <h3 style={{ color: "silver" }}>
        The Worlds First Decentralized Autonomous Corporation
        </h3>
        <br/>
        <p>
        DecentraCorp seeks to revolutionize the corporate structure
        through the ideals of voluntary cooperation and open-source.
        <br/>
        With the CryptoPatent Blockchain, DecentraCorp aims to redefine
        how ideas create value by incentivizing the free sharing of knowledge.
        </p>
        <br/>
        </div>
      </div>
    );
  }
}

    export default Intro;
