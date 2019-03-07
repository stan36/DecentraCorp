import React, { Component } from 'react';



class IdeaCoin extends Component {
  render() {
    return(
<div>

        <div className='IdeaCoin'>
        <p>
            IdeaCoin is an ERC20 utility token for DecentraCorp and its associated projects.
            The first DecentraCorp project to utilize IdeaCoin will be the CryptoPatent Blockchain.
            IdeaCoin will be mined on the CryptoPatent Blockchain both when a new Idea is added AND when a replication is used to mine a Global Use Block.
          </p>
          <p>
            As an ERC20 token, IdeaCoin is capable of existing on ANY blockchain that relies on the Ethereum Virtual Machine(EVM).
            Two seperate IdeaCoin contracts will initially be deployed, one to the Ethereum Main Chain and the other to DecentraCorps PoA Chain.
          </p>
          <p>
            Both of these contracts will be controlled by their respective chains DecentraCorp Contract and balance information will be bridged between the
            two using the CIB. The IdeaCoin token DOES NOT grant its holder ANYTYPE of Membership status within DecentraCorp, though it can be staked to activate a Replication wallet.
        </p>
        <p>
          The second DecentraCorp Project to utilize IdeaCoin will be the DC Depot. The DC Depot will be able to offer a discount on ANY item sold on it in IdeaCoin.
          Items sold on the DC Depot will be sold at a price set by the owner in any accepted Cryptocurrency(starting with Ether and IdeaCoin). When an Item is purchased with IdeaCoin
          the DC Depot mints up the price difference from the IdeaCoin Discount to the seller, ensuring they receive their asking price while the buyer receives a discount.
        </p>
      </div>
      </div>
    );
  }
}

    export default IdeaCoin;
