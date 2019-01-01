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
        how ideas create value by incentivizing the free sharing and use of knowledge.
        </p>
        <br/>
        <p>
          To reach these goals DecentraCorp employs the use of Distributed Ledger Technologies(DLT's). This
          starts with the Inter Planetary File System (IPFS) and smart contracts on the Ethereum Virtual Machine(EVM)
          both on and off the Ehereum Mainnet.
        </p>
        <p> Utilizing these technologies and more DecentraCorp aims to
          provide the open source and makers communities with a new framework for innovation. We aim to
          help tinkerers and builders earn a living for doing what they love while simultaneously helping to better
          their communities.
        </p>
        <br/>
        <p>
          DecentraCorp’s first project; The CryptoPatent Blockchain, creates a platform for garage
          tinkerers and backyard inventors to turn their hobby into a source of revenue. The CryptoPatent
          Blockchain will serve as the basis for DecentraCorp’s decentralized facilities model(DFM). Under the DFM
          anyone with the drive to be their own boss will have a ready made business and a platform of products
          they can easily build themselves.
        </p>
        <p>
          The CryptoPatent Blockchain allows physical replications of the ideas patented to it to mine
          IdeaCoin, the cryptocurrency of DecentraCorp. Seeking to be a revenue source for open-source
          developers (both hardware and software) as well as a driving force in open source innovation.
        </p>
        <p>
          DecentraCorp will revolutionize what a corporation is and what it means to be enployed!
        </p>
        </div>
      </div>
    );
  }
}

    export default Intro;
