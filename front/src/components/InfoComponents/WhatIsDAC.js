import React, { Component } from 'react';
import Info from './Info';

class WhatIsDAC extends Component {
  render() {
    return(
<div className="flex-container">
  <Info />
        <div className='What_is_DAO'>
        <h3 style={{ color: "red" }}>
        What is a Decentralized Autonomous Corporation?
        </h3>
        <br/>
        <p>
        A Decentralized Autonomous Corporation (DAC) is an extension of the Decentralized
        Autonomous Organization (DAO) concept.
        </p>
        <br/>
        <p styles={{ color: "red"}}>
        Wikipedia defines a DAO as:
        </p>
        <p style={{ color: "silver" }}>
        “A decentralized autonomous organization (DAO), sometimes labeled a decentralized
        autonomous corporation (DAC), is an organization that is run through rules encoded as computer
        programs called smart contracts. A DAO's financial transaction record and program rules are
        maintained on a blockchain.”
        </p>
        <br/>
        <p>
        A DAO is made up of members usually those who hold the DAO’s cryptocurrency. The
        members of the DAO vote on decisions the DAO makes; things like what to do with its funding, who
        qualifies as a member, how it’s internal cryptocurrency operates, and even the rules for a virtual society
        or community.
        </p>
        <br/>
        <p>
        DecentraCorp seeks to separate the two terms by first defining a Decentralized Autonomous
        Corporation as a DAO (as defined above). We then add to this definition that a DAC is a DAO that
        possesses a product or products; invented, manufactured, marketed and maintained by its community
        members. The Members of a DAC act as its employees as well as its CEO's. They manufacture and sell DecentraCorp products
        and vote on DecentraCorp decisions. There is no top down structure and there is no one "in charge". Members are only ranked
        by how much they participate within the company by inventing and replicating products(ideas) on the CryptoPatent Blockchain.
        </p>
        <br/>
        <h3 style={{ color: "silver"}}>
        A DAC is a business!
        </h3>
        </div>
      </div>
    );
  }
}

    export default WhatIsDAC;
