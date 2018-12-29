import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DC_Contract_Structure from "../images/DC_Contract_Structure.gif";
import './About.css';
class About extends Component {
  render() {
    return(
<div className="flex-container">
      <div className='intro'>
        <h3 style={{ color: "green"}}>Thank you for visiting DecentraCorp's dApp in its early alpha phase!</h3>
        <br/>
        <p style={{ color: "red"}}>Links to the whitepapers for this project can be found at the bottom of this page</p>
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
        how ideas create value by incentivizing the free sharing of knowledge.
        </p>
        <br/>
        </div>
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
        A DAO is made up of members, usually those who hold the DAO’s cryptocurrency. The
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
        <div className='members'>
        <br/>
        <h3 style={{ color: 'purple'}}>
        Members of DecentraCorp:
        </h3>
        <br/>
        <div>
        Most DAO's rely on an internal cryptocurrency to determine membership. This approach will not work for DecentraCorp
        as it would leave both it and the CryptoPatent Blockchain open to attack from any hostile entity with deep enough pockets.
        Instead, the members of DecentraCorp will be the people who have either invented or replicated an idea on the CryptoPatent Blockchain.
        </div>
        </div>
        <div className='DFM'>
        <br/>
        <h3 style={{ color: 'silver'}}>
        The Decentralized Facilities Model:
        </h3>
        <br/>
        <div>
        DecentraCorp relies on a first of its kind Decentralized Facility Model where anyone anywhere can start their own DecentraCorp
        Facility. Under this model, there is no rules for creating a facility, they can be anywhere and can produce any product they like.
        The only requirement for a DecentraCorp Facility is that it must create replications of atleast one idea on the CryptoPatent Blockchain.
        </div>
        </div>
        <div className='structure'>
        <br/>
        <h2 style={{ color: "orange" }}>
        DecentraCorps Contract Structure:
        </h2>
        <br/>
        <div>
        <br/>
        <p>The DecentraCorp contract exists on the Ethereum Main chain </p>
        <p>as well as its own private Proof of Authority Network.</p>
        <p>The two contracts are bridged between one another on DecentraCorp's Crosschain Information Bridge.</p>
        <p>The Crosschain Information Bridge(CIB) is responsible for receiving events and firing transactions</p>
        <p>between the seperate chains ensuring both DecentraCorp Contracts remain in sync.</p>
        <p>In addition, the CIB allows members of DecentraCorp to easily transfer over both their IdeaCoin</p>
        <p>and their Proof of Ownership tokens to the Ethereum Main Chain for additional asset security.</p>
        <p>Both The CryptoPatent Blockchain and the ChaosCasino run on </p>
        <p>DecentraCoprs Proof of Authority Network.</p>
        <br/>
          <div>
            <img src={DC_Contract_Structure} alt ="DecentraCorp Structure" className="DC_Contract_Structure"/>
          </div>
          <br/>
        </div>
        </div>
        <div className='CP_Blockchain'>
          <br/>
            <h2 style={{ color: "teal"}}>The CryptoPatent Blockchain:</h2>
            <br/>
              <p>
              The CryptoPatent Blockchain allows any idea with an applicable use case to be
              patented. Once an idea receives community approval, it and replications of it can
              be used to mine IdeaCoin. All ideas patented to the CryptoPatent Blockchain are
              open-source and therefore can be freely replicated by ANYONE!
              </p>
          <br/>
          <p>Idea's are subject to an application approval process in which all aspects of an idea are subject
            to community reveiew. This process allows the DecentraCorp community to evaluate all aspects of an Idea before it is added
            to the CryptoPatent Blockchain. This includes an ideas use case, use-mining reward, and its use-mining time as well as its build in regards to
            both hardware and software. This idea approval process is meant to ensure that ideas designed to abuse the system never make it on chain to begin with.</p>
            <br/>
            <p>While Ideas are free to replicate, a stake in IdeaCoin is required to activate a replication
              on the CryptoPatent Blockchain. Only Properly staked and activated Ideas are capable of mining IdeaCoin.</p>
            <br/>
      </div>
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
           to facilitate royalty information used when the replication mines IdeaCoin. A stake in IdeaCoin is required to activate ALL replications for mining.
           Potential Replicators will first need to stake a wallet before they can activate a replication on the CryptoPatent Blockchain.</p>
        <br/>
        <p>
          The third contract is the Global UseBlock Generator. This contract is responsible for issuing Global UseBlock tokens(GUB) when a replication of an idea has the largest
          Local Use-Weight for that idea within the patents use-mining time. When a GUB token is mined by a replication, the newly mined IdeaCoin is split between the inventor of the idea,
          the replicator of the idea and in some cases, even the user of the replication. This is the main incintive to patent an idea to the CryptoPatent Blockchain.
        </p>
        <br/>
        <p>
          The Final contract is the CryptoPatent Control Contract. This contract governs the other three contracts in regards to token creation through a members only voting mechanism.
          In addition, this contract tracks all membership related information including promotions. This contract is designed to track replication addresses and ensure that only properly
          staked and activated replications are capable of mining IdeaCoin. Finally, this contract tracks the local use-weights of every replication.
        </p>
        </div>
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
        <br/>
        </div>
        <div className='EPMS'>
        <h2 style={{color: "purple"}}>
          The EPMS:
        </h2>
        <h3>
        Embedded Program Mining Software
        </h3>
        <br/>
        <p>
            The EPMS is at the heart of what allows ideas and replications to mine UseBlocks and IdeaCoin. The EPMS is desinged to
            be added to the code of a finished idea. There are two different types of EPMS. A Type-1 EPMS runs on the originally activated
            idea itself. In addition to allowing an Idea to mine, a Type-1 EPMS also acts as a validator on DecentraCorps PoA Network. A Type-2 EPMS allows a replication
            of an idea to mine and does not include the same PoA Networks validator status. A Type-1 EPMS runs a light Client connected to the Ethereum Mainchain and
            both types of EPMS run a full geth node connected to DecentraCorps PoA Network.
        </p>
        <br/>
        </div>
        <div className='PoA'>
        <h2 style={{ color: "red" }}>
        DecentraCorp's Proof of Authority Network:
        </h2>
        <br/>
        <p>
        DecentraCorp's PoA Network is an EVM based Proof of Authority Network with two seperate layers of security. The First Layer of security
        is the Authority layer. The Authority Layer is governed by the DecentraCorp PoA contract which is responsible for maintaining the list of approved
        validators. In a PoA network, validators act as miners would in a Proof of Work based cryptocurrency by adding transactions to blocks and adding those
        blocks to the blockchain.
        </p>
        <p>
        The second security layer is the IdeaBlock layer. This layer is itself the list of all validators as determined by the DecentraCorp PoA contract.
        This list consists of the address of every idea running a Type-1 EPMS. This arrangement means that the only validators on the network are the originally activated
        ideas running a Type-1 EPMS. All other nodes(Type-2 EPMS's) are dummy nodes only capable of mining UseBlocks, not the blocks of the actual underlying PoA network.
        </p>
      </div>
        <div className='papers'>
        <br/>
        <p>
        To view the DecentraCorp WhitePaper
        <a style={{ textDecoration: 'none', color: "red"}} href='https://drive.google.com/open?id=1hhsuQ_JnBz5E0813V-4trPZhiflaTBwr'> Click Here!</a>
        </p>
        </div>
        <br/>
        <div>
        <p>
        To view the WhitePaper for the CryptoPatent Blockchain
        <a style={{ textDecoration: 'none', color: "red"}} href='https://drive.google.com/open?id=1Me8pn45kzBCucV-F1LyjYHv4LLBKWX6w'> Click Here!</a>
        </p>
        </div>
        <br/>
        <div>
        <p>
        To view the ChaosCasino's WhitePaper
        <a style={{ textDecoration: 'none', color: "red"}} href='https://drive.google.com/open?id=12Fw9pM8V9B1zs1QvsQpNDL504ylq84Ic'> Click Here!</a>
        </p>
        </div>
        <br/>
        <br/>
        <div>
        <p>
        To view the code for this project
        <a style={{ textDecoration: 'none', color: "red"}} href='https://github.com/stan36/DecentraCorp'> Click Here!</a>
        </p>
        <br/>
        </div>
        <br/>
        <p>The DecentraCorp Core Development Team can be reached at:</p>
        <br/>
        <p>decentracorp@pm.me</p>
      </div>
    );
  }
}

    export default About;
