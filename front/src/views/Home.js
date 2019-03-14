import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DecentraCorpLogo from "../images/DecentraCorpCube.png";
import smart_contract from "../images/smart_contract.png";
import Notio from "../images/Notio.png";

class Home extends Component {
  render() {
    return(
      <div>
      <div className='DecentraCorpLogo'>
      <img src={DecentraCorpLogo} alt ="No Image"/>
      </div>
      <p style={{ fontSize: '25px'}}>DecentraCorp is the world's first Decentralized Autonomous Corporation (DAC)!</p>
      <p>
        In DecentraCorp the CEO’s and shareholders are the same people who build and maintain
        the machinery.
      </p>
      <p>
       DecentraCorp is built using smart-contracts which are programs that live on a blockchain. Smart-Contracts allow
       for a new type of corporation, one that is completely transparent and accountable to both its members and the general public.
       Every action DecentraCorp takes is trustlessly stored for the world to see on an immutable blockchain.
      </p>
      <div className='smart_contract'>
      <img src={smart_contract} alt ="No Image"/>
      </div>
      <p>
        As opposed to a normal Corporation,
        DecentraCorp relies on every member to act as Its Board of Directors by allowing them to vote on decesions
        the corporation makes. Decisions including what to do with shared funds or what products the company manufactures.
        <br/>
        As an employee, members seeking to earn an
        income can freely do so by replicating the Ideas patented on the CryptoPatent Blockchain.
        Replications on the CryptoPatent Blockchain can be used to mine Notio, DecentraCorps internal CryptoCurrency.
        <br/>
        DecentraCorp aims to provide the open source and
        makers communities with a framework to help tinkerers and builders
        earn a living doing what they love.
      </p>
      <div className='DecentraCorpLogo'>
      <img src={Notio} alt ="No Image"/>
      </div>
      <p style={{ fontSize: "25px", color: 'gold'}}>
        DecentraCorp wants YOUR open-source idea to mine Notio on the CryptoPatent Blockchain! </p>
      <p>
        We Want to help YOUR idea change the World!
      </p>
      <p>
        DecentraCorp’s goal is to empower the individual
        with the tools and technology to build a better world!
      </p>
        <p>
           Please feel free to explore this dApp During its Early alpha phase!
        You must be connected to DecentraCorps Proof of Authority Network to use this dApp!
      </p>
        <p>Please report a description of any bugs, glitches and/or mistakes you find to decentracorp@pm.me.
        Your help is Greatly appreciated!</p>
        <div className='papers'>
          <div>
            <p>
          <button  style={{ fontSize: "20px"}} type="button" class="button"><a style={{ textDecoration: 'none', color: "red"}} href='https://drive.google.com/open?id=1hhsuQ_JnBz5E0813V-4trPZhiflaTBwr'>To view the Introductory WhitePaper for DecentraCorp and its associated projects Click Here!</a></button>
          </p>
      <br/>
        </div>
        <div>
          <p>
          <button  style={{ fontSize: "20px"}} type="button" class="button"><a style={{ textDecoration: 'none', color: "red"}} href='https://drive.google.com/open?id=1Me8pn45kzBCucV-F1LyjYHv4LLBKWX6w'>To view the WhitePaper for the CryptoPatent Blockchain Click Here!</a></button>
          </p>
      </div>
        <div>
          <p>
          <button  style={{ fontSize: "20px"}} type="button" class="button"><a style={{ textDecoration: 'none', color: "red"}} href='https://drive.google.com/open?id=12Fw9pM8V9B1zs1QvsQpNDL504ylq84Ic'>To view the WhitePaper for the ChaosCasino's Click Here!</a></button>
          </p>
    </div>
      <div>
        <p>
      <button  style={{ fontSize: "20px"}} type="button" class="button"><a style={{ textDecoration: 'none', color: "red"}} href='https://github.com/DecentraCorp/DecentraCorpPoA'>For instructions on how to set up a parity node and connect to DecentraCorps
      Proof of Authority Network(PoA) please visit its GitHub page and see the Read.Me file Click Here!</a></button>
      </p>
    </div>
    <p>
          <button  style={{ fontSize: "20px"}} type="button" class="button"><a style={{ textDecoration: 'none', color: "red"}} href='https://github.com/DecentraCorp/DecentraCorpContracts'>To view the Smart-Contract code for this project Click Here!</a></button>
        </p>
        </div>
      </div>
    );
  }
}

    export default Home;
