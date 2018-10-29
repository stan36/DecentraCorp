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
       <form onSubmit={this.onSubmit}>
    <p>To get early access membership to DecentraCorp</p>
    <br/>
    <p> which includes 10,000 IdeaCoin and a Staked Replication Account:</p>
    <button>Buy Membership Now(1 Ether)</button>
  </form>
     </div>
    );
  }
}

export default BuyMembership;
