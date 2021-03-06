import React, { Component } from 'react';


class DCPoA extends Component {
  render() {
    return(
<div>
        <div className='PoA'>
        <h2 style={{ color: "red" }}>
        DecentraCorp's Proof of Authority Network:
        </h2>
        <br/>
        <p>
        DecentraCorp's PoA Network is an EVM based Proof of Authority Network with two seperate layers of security.
      </p>
      <p>
        The First Layer of security
        is the Authority layer. The Authority Layer is governed by the DecentraCorp PoA contract which is responsible for maintaining the list of approved
        validators. In a PoA network, validators act as miners would in a Proof of Work based cryptocurrency by adding transactions to blocks and adding those
        blocks to the blockchain.
        </p>
        <p>
        The second security layer is the IdeaBlock layer. This layer is itself the list of all validators as determined by the DecentraCorp PoA contract.
        This list consists of the address of every idea running a Type-1 EPMS. This arrangement means that the only validators on the network are the originally activated
        ideas running a Type-1 EPMS. All other nodes(Type-2 EPMS's) are dummy nodes only capable of mining UseBlocks which are technically transactions on the PoA network, not the blocks of the actual underlying PoA network.
        This arrangement means that the only accounts capable of adding new transactions to the blockchain are the automated Type-1 EPMS accounts.
        </p>
        <p>
          The arrangement of DecentraCorps Proof of Authority network ensures that the people with the most incintive to be honest
          (the inventors) also have the most responsibility.
        </p>
      </div>
      </div>
    );
  }
}

    export default DCPoA;
