
import React, { Component } from 'react';
import web3 from '../../utils/web3';
import ipfs from '../../utils/IPFS_util';
import _DC_Depot from '../../ethereum/DC_Depot';
import _DecentraCorp from '../../ethereum/DecentraCorp';
import { Redirect } from 'react-router-dom';
import Loader from "../../images/75.gif";

class Facility extends Component {
  constructor(props){
    super(props);


    this.state = {
      userAccount: null,
      IsUpgraded: false,
      userLevel: null,
      facilityRank: null,
      loading: false,
      txHahs: null,
      toDashboard: false,
      ItemsToProcess: []
     }


  }

  async  componentDidMount(){
      this.setState({ loading : true });
     const accounts = await web3.eth.getAccounts();
     const userAccount = accounts[0];
     const IsUpgraded =  await _DC_Depot.methods.CheckIfApproved(userAccount).call();
     console.log(IsUpgraded);
     const userLevel =  await _DecentraCorp.methods.getLevel(userAccount).call();
     const facilityRank = await _DecentraCorp.methods.getRank(userAccount).call();
     this.setState({ userAccount, loading: false, IsUpgraded, userLevel, facilityRank });
   }





 handleSubmit = async (event) => {
   event.preventDefault();
   this.setState({ loading : true });
  await _DC_Depot.methods.applyForProcessingFacility(this.state.userAccount)
  .send({from : this.state.userAccount,
    gas: '3000000',
  }, (error, transactionHash) => {
   this.setState({transactionHash});
       });
this.setState({ toDashboard : true });
};

onLoad = async => {
let ipfs = [];

_DC_Depot.events.ItemInEscrow({
  filter: {ProcessingFaility: this.state.userAccount},
  fromBlock: '0',
  toBlock: 'latest',
}, (error, event) => {
  console.log(event);
  console.log(event.returnValues[0]);
   ipfs.push(event.returnValues[2]);
   this.setState({ ItemsToProcess: event.returnValues[2] });


})
}





  render() {
    if (this.state.toDashboard === true ) {
       return <Redirect to='/Profile' />
       }


    if (this.state.IsUpgraded === true ) {
      this.onLoad();
     return (
       <div>
          <h2>Your Facility Has been Successfully Upgraded</h2>
          <h3>Below is a list of all Items in escrow for you to process</h3>
          <p>{this.state.ItemsToProcess}</p>
       </div>
     );
   }else{
    if(this.state.loading === true){
      return(
        <div className="Loader">
          <h1>Please Wait While Your Purchase is processed by the Blockchain</h1>
        <img src={Loader} alt ="Loader" className="Loader" />
        <h2>You will be redirected to the Members Dashboard once your Facility is upgraded</h2>
        </div>
      );
    } else {
    return (
      <div>
        <h3>Welcome to the DecentraCorp Facility Upgrade Page!</h3>
        <p>Your Membership Level is {this.state.userLevel}</p>
        <p>Your Facility Ranking is {this.state.facilityRank}</p>

        <p>As of right now DecentraCorp is ONLY live on the Ropsten TestNet!</p>
        <p>Facility Upgrades allow a DecentraCorp Facility to act as a DC Depot</p>
        <p>Processing Facility</p>
        <p>A DC Depot Processing Facility Arbitrates Purchases made through the DC Depot</p>
        <p>A Facility Operator Earns IdeaCoin for ensuring the conditions of an escrow are met</p>
        <p>You must have a Membership Level AND Facility Ranking of 100 to Upgrade your Facility</p>
          <hr/>
       <form onSubmit={this.handleSubmit}>
    <button>Stake Facility Upgrade(100 IdeaCoin)</button>
  </form>
     </div>
    );
  }
}
}
}
export default Facility;
