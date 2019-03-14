import React, { Component } from 'react';


class CPBStructure extends Component {
  render() {
    return(
<div >
      <div className='CP_Structure'>
        <br/>
        <h2 style={{ color: "pink"}}>Structure of the CryptoPatent Blockchain:</h2>
        <br/>
        <p>The CryptoPatent Blockchain itself consists of four seperate contracts. The first of these Contracts
            is the IdeaBlock Generator(IBG). The IBG is responible for issuing a ERC721 Proof of Idea Ownership(PoIO) token to an inventor
            when an idea is sucessfully patented to the CryptoPatent Blockchain. Each PoIO token is tied to an IPFS hash which stores the Information
            for an idea.</p>
        <br/>
        <p>The second contract in the CryptoPatent Blockchain is the Replication Block Generator(RBG). The RBG is responsible for
           issuing ERC721 Proof of Replication Ownership(PoRO) tokens which represent the ownership of specific replications of an idea. These tokens are used
           to facilitate royalty information used when the replication mines Notio. A stake in Notio is required to activate ALL replications for mining.
           Potential Replicators will first need to stake a wallet before they can activate a replication on the CryptoPatent Blockchain.</p>
        <br/>
        <p>
          The third contract is the Global UseBlock Generator. This contract is responsible for issuing Global UseBlock tokens(GUB) when a replication of an idea has the largest
          Local Use-Weight for that idea within the patents use-mining time. When a GUB token is mined by a replication, the newly mined Notio is split between the inventor of the idea,
          the replicator of the idea and in some cases, even the user of the replication. This is the main incintive to patent and replicate ideas on the CryptoPatent Blockchain.
        </p>
        <br/>
        <p>
          The Final contract is the CryptoPatent Control Contract. This contract governs the other three contracts in regards to token creation through a members only voting mechanism.
          In addition, this contract tracks all membership related information including promotions. This contract is designed to track replication addresses and ensure that only properly
          staked and activated replications are capable of mining Notio. Finally, this contract tracks the local use-weights of every replication.
        </p>
        </div>
      </div>
    );
  }
}

    export default CPBStructure;
