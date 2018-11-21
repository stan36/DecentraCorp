import React, { Component } from 'react';
import web3 from '../utils/web3';
import _CryptoPatentBlockchain from '../ethereum/CryptoPatent'


class BuyMembership extends Component {
  constructor(props){
    super(props);


    this.state = {
      userAccount: null,
      IsMember: false
     }


  }

  async  componentDidMount(){
     const accounts = await web3.eth.getAccounts();
     const userAccount = accounts[0];
     this.setState({ userAccount });
   }

   onSubmit = async (event)=>{
       event.preventDefault();
       await _CryptoPatentBlockchain.methods.buyMembership().send({
         from: this.state.userAccount,
          gas: '3000000',
					value: web3.utils.toWei(String(1), 'ether')
        });
   };




  render() {
    return (
      <div>
        <h3>Welcome to the DecentraCorp Membership Portal!</h3>
        <p>As of right now DecentraCorp is ONLY live on the Ropsten TestNet!</p>
        <p>It is important to note that while a membership is necissary to use this dApp</p>
        <p>to its full capabilities, buying a membership now</p>
        <p style={{  color: "red"}}>DOES NOT</p>
        <p>Guaruntee anytype of membership when Decentracorp Goes Live!</p>
       <form onSubmit={this.onSubmit}>
    <p>To get early (alpha)access membership to DecentraCorp</p>
    <br/>
    <p> which includes 10,000 IdeaCoin and a Staked Replication Account Click Here:</p>
    <div style={{ textAlign: "center"}}>
    <button>Buy Membership Now(1 Ropsten Test Ether)</button>
    </div>
  </form>
     </div>
    );
  }
}

export default BuyMembership;
