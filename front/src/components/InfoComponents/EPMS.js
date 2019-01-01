import React, { Component } from 'react';
import Info from './Info';

class EPMS extends Component {
  render() {
    return(
<div className="flex-container">
  <Info />

        <div className='EPMS'>
        <h2 style={{color: "purple"}}>
          The EPMS:
        </h2>
        <h3>
        Embedded Program Mining Software
        </h3>
        <br/>
        <p>
            The EPMS is at the heart of what allows ideas and replications to mine UseBlocks and IdeaCoin.
        </p>
        <p>
          The EPMS is desinged to be added to the code of a finished idea. There are two different types of EPMS.
        </p>
        <p>
           A Type-1 EPMS runs on the originally activated idea itself. In addition to allowing an Idea to mine, a
           Type-1 EPMS also acts as a validator on DecentraCorps PoA Network. This means the Type-1 EPMS is responsible for securing
           the underlying PoA Network.
         </p>
         <p>
           A Type-2 EPMS allows a replication
            of an idea to mine Use Blocks and does not include the same PoA Networks validator status.
          </p>
          <p>
             A Type-1 EPMS runs a light Client connected to the Ethereum Mainchain and
            both types of EPMS run a full geth node connected to DecentraCorps PoA Network.
            Both Types of EPMS run an automated wallet capable of both initiating web3 transactions AND reacting to web3 events.
        </p>
        <br/>
        </div>
      </div>
    );
  }
}

    export default EPMS;
