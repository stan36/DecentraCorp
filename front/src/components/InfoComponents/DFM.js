import React, { Component } from 'react';
import Info from './Info';

class DFM extends Component {
  render() {
    return(
<div className="flex-container">
  <Info />

        <div className='DFM'>
        <br/>
        <h3 style={{ color: 'silver'}}>
        The Decentralized Facilities Model:
        </h3>
        <br/>
        <div>
        DecentraCorp relies on a first of its kind Decentralized Facility Model where anyone anywhere can start their own DecentraCorp
        Facility. Under this model, there is no rules for creating a facility, they can be anywhere and can produce any product they like.
        The only requirement for a DecentraCorp Facility is that it must create replications of atleast one idea on the CryptoPatent Blockchain.
        </div>
        </div>
      </div>
    );
  }
}

    export default DFM;
