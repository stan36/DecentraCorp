import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DC_Contract_Structure from "../images/DC_Contract_Structure.gif";

class About extends Component {
  render() {
    return(
      <div className='container'>
        <h3>Thank you for visiting DecentraCorp's dApp in its early alpha phase!</h3>
        <br/>
        <p>Links to the whitepapers for this project can be found below</p>
        <br/>
        <h3>DecentraCorps Contract Structure</h3>
        <div>
          <img src={DC_Contract_Structure} alt ="DecentraCorp Structure"/>
        </div>
        <div>
        <p>The DecentraCorp contract exists on the Ethereum Main chain </p>
        <p>as well as its private Proof of Authority Network</p>
        <p>The two contracts are bridged between one another on DecentraCorp's EPMS</p>
        <p>This part of the EPMS is responsible for receiving events and firing transactions</p>
        <p>between the seperate chains ensuring both DecentraCorp Contracts remain in sync.</p>
        <p>Both The CryptoPatent Blockchain and the ChaosCasino run on </p>
        <p>DecentraCoprs Proof of Authority Network.</p>
        </div>
        <div>
        <br/>
        <p>
        To view the DecentraCorp WhitePaper
        <Link style={{ textDecoration: 'none', color: "red"}} to='//drive.google.com/open?id=1FmpDDemav9hAQC_gSNjwgy67miVea6ZUBFyaJ2U5g1w'> Click Here!</Link>
        </p>
        </div>
        <br/>
        <div>
        <p>
        To view the WhitePaper for the CryptoPatent Blockchain
        <Link style={{ textDecoration: 'none', color: "red"}} to='//drive.google.com/open?id=1317gPC_vxfGfadaQA0JMaeDmZiWSLxVTp6bFogx1-K4'> Click Here!</Link>
        </p>
        </div>
        <br/>
        <div>
        <p>
        To view the ChaosCasino's WhitePaper
        <Link style={{ textDecoration: 'none', color: "red"}} to='//drive.google.com/open?id=13G99kDtj_7Bu663NlNUft9Pfo9pOPXXRfwW7_9cluxE'> Click Here!</Link>
        </p>
        </div>
      </div>
    );
  }
}

    export default About;
