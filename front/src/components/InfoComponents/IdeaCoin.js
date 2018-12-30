import React, { Component } from 'react';
import Info from './Info';

class IdeaCoin extends Component {
  render() {
    return(
<div className="flex-container">
    <Info />
        <div className='IdeaCoin'>
        <br/>
        <h2 style={{ color: "gold"}}>IdeaCoin:</h2>
        <br/>
        <p>
            IdeaCoin is an ERC20 utility token for DecentraCorp and its associated projects.
            The first DecentraCorp project to utilize IdeaCoin will be the CryptoPatent Blockchain.
            As an ERC20 token, IdeaCoin is capable of existing on ANY blockchain that relies on the Ethereum Virtual Machine(EVM).
            Two seperate IdeaCoin contracts will initially be deployed to the Ethereum Main Chain and the DecentraCorps PoA Chain.
            Both of these contracts will be controlled by their respective chains DecentraCorp Contract and balance information will be bridged between the
            two using the CIB. The IdeaCoin token DOES NOT grant its holder ANYTYPE of Membership status within DecentraCorp, though it can be staked to activate a Replication wallet.
        </p>
      </div>
      </div>
    );
  }
}

    export default IdeaCoin;
