import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isDesktop: false
      };

      this.updatePredicate = this.updatePredicate.bind(this);
 }
 componentDidMount() {
   this.updatePredicate();
   window.addEventListener("resize", this.updatePredicate);
 }

 componentWillUnmount() {
   window.removeEventListener("resize", this.updatePredicate);
 }

 updatePredicate() {
   this.setState({ isDesktop: window.innerWidth > 1450 });
 }


  render() {
    const isDesktop = this.state.isDesktop;
    return(
      <div>
       {isDesktop ? (
      <div className="flex-container">
        <div>
          <h2 style={{ color: "gold"}}>Welcome to DecentraCorp</h2>
        <br/>
        <p>DecentraCorp is the world's first Decentralized Autonomous Corporation (DAC)
        where the CEO’s and shareholders are the same people who build and maintain
        the machinery. DecentraCorp is built using smart-contracts which are chunks of
       code that live on the blockchain. As opposed to a normal Corporation,
       DecentraCorp relies on every member to act as Its CEO by allowing them to vote on decesions
       the corporation makes.
      </p>
        <br/>
        <p>
          Like-wise, the employees of DecentraCorp are its Members as well. members seeking to earn an
          income can freely do so by replicating the Ideas patented on the CryptoPatent Blockchain.
          Replications on the CryptoPatent Blockchain can be used to mine IdeaCoin, DecentraCorps CryptoCurrency.
        </p>
        <br/>
        <p> DecentraCorp’s goal is to empower the individual
         with the tools and technology to build a better world! </p>
        <br/>
        <p>To reach this goal, DecentraCorp will employ the use of
        Distributed Ledger Technologies, starting with IPFS and
          smart-contracts on the Ethereum Virtual Machine
        (both on and off the Ethereum Mainnet). </p>
        <br/>
        <p> Utilizing these technologies and more,
         DecentraCorp aims to provide the open source and
         makers communities with a framework to help tinkerers and builders
         earn a living for doing what they love while simultaneously helping to better their communities.</p>
        <br/>
        <p> Please feel free to explore this dApp During its Early alpha phase!
        You must be connected to the ropsten test network Inorder to use this dApp!</p>
      <Link style={{  color: "red"}} to='/intro'> Click Here to visit the Information pages and find links to Our WhitePapers!</Link>
      <br/>
      <p>Please report a description of any bugs, glitches, or mistakes you find to decentracorp@pm.me.</p>
      <p>Your help is Greatly appreciated!</p>
      </div>
    </div>
  ) : (
       <div  className="flex-container">
<h1>This dApp Does Not Yet work on mobile</h1>
<p>We appologize for the inconvenience and will be updating the site for mobile once it has been migrated to DecentraCorps
Proof of Authority Network. If you would like to learn More about DecentraCorp but cannot visit us on a desktop,
please feel free to read our WhitePapers and sign up for our mailing list.</p>
<div>
<p>To view the Introductory WhitePaper for DecentraCorp and its associated projects</p>
<p><a style={{ textDecoration: 'none', color: "red"}} href='https://drive.google.com/open?id=1hhsuQ_JnBz5E0813V-4trPZhiflaTBwr'> Click Here!</a></p>
<br/>
</div>
<div>
<p>To view the WhitePaper for the CryptoPatent Blockchain</p>
<p><a style={{ textDecoration: 'none', color: "red"}} href='https://drive.google.com/open?id=1Me8pn45kzBCucV-F1LyjYHv4LLBKWX6w'> Click Here!</a></p>
<br/>
</div>
<div>
<p>To view the WhitePaper for the ChaosCasino's</p>
<p><a style={{ textDecoration: 'none', color: "red"}} href='https://drive.google.com/open?id=12Fw9pM8V9B1zs1QvsQpNDL504ylq84Ic'> Click Here!</a>
</p>
<br/>
</div>
<div>
<p>To view the code for this project on Github</p>
<p><a style={{ textDecoration: 'none', color: "red"}} href='https://github.com/stan36/DecentraCorp'> Click Here!</a>
</p>
<br/>
<br/>
</div>

       </div>
     )}
   </div>
    );
  }
}

    export default Home;
