import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mainEtherAccountQR from "../images/mainEtherAccountQR.png";

class Donate extends Component {
  render() {
    return(
      <div className='container'>
        <h3>Thank you for visiting DecentraCorp's dApp in its early alpha phase!</h3>
        <br/>
        <h3>While DecentraCorp will not hold an ICO, the dev team is accepting donations!</h3>
        <br/>
        <p>Those interested in donating can send ANY ERC20 based token to the following address:</p>
        <div>
          <img src={mainEtherAccountQR} alt ="Dev-Team-QR"/>
        </div>
        <br/>
        <p>0x3b450bDF77FeC6EEC6b11e216c87f4ca6D4464F5</p>
        <br/>
        <div>
        <p>All Donations will be used to fund the further development of Decentracorp</p>
        <p>and its associated projects.</p>
        <br/>
        </div>
    </div>
    );
  }
}

    export default Donate;
