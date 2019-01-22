import React, { Component } from 'react';
import Info from './Info';

class ChaosCasinoInfo extends Component {
  render() {
    return(
<div className="flex-container">
  <Info />

        <div className='ChaosCasino'>
        <h2 style={{ color: "red" }}>
        The ChaosCasino:
        </h2>
        <h3 style={{ color: 'red'}}>
        Playing on the Entropy of the Universe
        </h3>
        <br/>
        <p style={{ color: 'yellow'}}>
        “If the flap of a butterfly’s wings can be instrumental in generating a tornado, it can

        equally well be instrumental in preventing a tornado.”

        — Edward Lorenz
         </p>
      <p>
        The Chaos Casino is a javascript based dApp (Decentralized application) built on the Ethereum
        Virtual Machine (EVM) running DecentraCorp’s Proof of Authority (PoA) network.
        </p>
        <p>
        The ChaosCasino
        allows anyone in the world to gamble their CryptoCurrency in Provably Fair Casino Games powered
        by smart contracts and the CryptoPatent Blockchain. The ChaosCasino is a control contract that will
        start out hosting it's own internal CryptoCurrency: ChaosCoin.
        </p>
        <h3 style={{ color: 'red'}}>
        The ChaosCasino and DecentraCorp.
        </h3>
        <p>
        The Chaos Casino exists to provide individuals the ability to gamble with their cryptocurrency
        as well as to be a source of revenue for DecentraCorp. All earned revenue of the Chaos Casino (aka the
        Houses Cut) will be put under control of the DecentraCorp Contract to be used as the members deem
        necessary. This will namely be things like Facility funding and project funding to develop Ideas for the
        CryptoPatent Blockchain.
        </p>
      </div>
      </div>
    );
  }
}

    export default ChaosCasinoInfo;
