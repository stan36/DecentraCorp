import React, { Component } from 'react';
import DC_Contract_Structure from "../../images/DC_Contract_Structure.gif";


class DC_ContractStructure extends Component {
  render() {
    return(
<div>
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
      </div>
    );
  }
}

    export default DC_ContractStructure;
