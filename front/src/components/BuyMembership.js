import React, { Component } from 'react';
import web3 from '../utils/web3';
import _CryptoPatentBlockchain from '../ethereum/CryptoPatent';
import { Redirect } from 'react-router-dom';
import Loader from "../images/75.gif";

class BuyMembership extends Component {
  constructor(props){
    super(props);


    this.state = {
      userAccount: null,
      IsMember: false,
      loading: false,
      txHahs: null,
      toDashboard: false
     }
this.onReturn = this.onReturn.bind(this);

  }

  async  componentDidMount(){
      this.setState({ loading : true });
     const accounts = await web3.eth.getAccounts();
     const userAccount = accounts[0];
     this.setState({ userAccount, loading: false});
   }

   onSubmit = async (event)=>{
       event.preventDefault();
       this.setState({ loading: true})
       await _CryptoPatentBlockchain.methods.buyMembership().send({
         from: this.state.userAccount,
          gas: '3000000',
					value: web3.utils.toWei(String(1), 'ether')
        }, (error, txHash) => {
        this.setState({txHash});
            });
            this.onReturn();
   };

 onReturn = async => {
   _CryptoPatentBlockchain.once( 'NewMember', {
     filter: {member: this.state.userAccount},
     fromBlock: '0',
     toBlock: 'latest',
   }, function(error, event){
     console.log(event);
   })
   this.setState({ loading: false, toDashboard: true });
 }



  render() {
    if (this.state.toDashboard === true) {
     return <Redirect to='/' />
   }else{
    if(this.state.loading === true){
      return(
        <div className="Loader">
          <h1>Please Wait While Your Purchase is processed by the Blockchain</h1>
        <img src={Loader} alt ="Loader" className="Loader" />
        <h2>You will be redirected to the homepage </h2>
        <h2>once you become a Member.</h2>
        <h3>please reload the homepage once you have been redirected</h3>
        <h3> to view the members Dashboard</h3>
        </div>
      );
    } else {
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
}
}
export default BuyMembership;
