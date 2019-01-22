import React, { Component } from 'react';
import CIB_EPMS from "../../images/CIB_EPMS_Diagram.gif";
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
          The EPMS is desinged to be added to the code of a finished idea.
        </p>
        <br/>
        <img src={CIB_EPMS} alt ="CIB and the EPMS" className="CIB_EPMS"/>
        <p>There are two different types of EPMS.
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
        <h3>The CrossChain Information Bridge</h3>
        <p>The CrossChain Information Bridge(CIB) allows specific transactions like token withdrawls to be made from one Blockchain to another.
        The CIB is designed to fire transactions to One DecentraCorp Smart-Contract on one Blockchain when it receives events from its counter-part.
         With this set Up being locked to a specific account that has elevated permissions on both contracts, information like mebership status can trustlessly be
         passed back and forth between the two.
       </p>
       <p>
         The Account running the CIB is a seperate account from the Account used by an EPMS and will be locked down to all end users.
       The CIB account will be run in its own docker container and will hold a privledged position on both DecentraCorp contracts which allow it
        to call protected functions on each contract.</p>
        </div>
      </div>
    );
  }
}

    export default EPMS;
