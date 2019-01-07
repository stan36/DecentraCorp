import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import web3 from '../../utils/web3';
import ipfs from '../../utils/IPFS_util';
import _DecentraCorp from '../../ethereum/DecentraCorp';
import Loader from "../../images/75.gif";


class CreateFundingProp extends Component {
  constructor(props){
    super(props);

    this.state = {
      applicantAddress: '',
      ipfsHash: '',
      transactionHash: '',
      message: '',
      buffer: '',
      photoHash: '',
      loading: false,
      hasApplied: false,
      home: false,
      
     }


  }

  async  componentDidMount(){
    this.setState({ loading : true });
     const accounts = await web3.eth.getAccounts();
     const userAccount = accounts[0];
     this.setState({ applicantAddress: userAccount, loading : false });
   }

   handleChange (event) {
     this.setState( [event.target.name]: event.target.value )
   }



  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading : true });
    const formData = new FormData(event.target);
    let jsonObject

      for (const [key, value]  of formData.entries()) {
          jsonObject[key] = value;
          }
          console.log(jsonObject);

    var buf = Buffer.from(JSON.stringify(jsonObject));
    await ipfs.add(buf, (err, ipfsHash) => {
    this.setState({ ipfsHash: ipfsHash[0].hash});
    _DecentraCorp.methods.createProposal(
      this.state.ipfsHash.returnValues.Address,
      1,
      this.state.ipfsHash,
      this.state.ipfsHash.returnValues.FundingAmount
    ).send({from : this.state.applicantAddress}, (error, transactionHash) => {
    this.setState({transactionHash, message: 'Your Idea Has Been Successfully submitted to the CryptoPatent Blockchain! Your transaction hash is:'});
    this.onReturn();
        });
      })

};


onReturn = async => {

  _DecentraCorp.once( 'ProposalCreated', {
    filter: {IdeaHash: this.state.ipfsHash},
    fromBlock: '0',
    toBlock: 'latest',
  }, (error, event) => {
    console.log(event);
    this.stateSetter();
  })

}

stateSetter = async => {
  this.setState({  loading: false, hasApplied: true });
}



goHome = () => {
  this.setState({ home: true})
}


  render() {
    const { ipfsHash, photoHash,  } = this.state;
    if (this.state.home === true) {
    return <Redirect to='/Profile' />
   }else{
    if(this.state.hasApplied === true){
      return(
        <div>
      <h1>Thank you for Appying for</h1>
      <h2>Funding From DecentraCorp</h2>
      <h3>Yor Proposal is now pending community approval!</h3>
      <button onClick={this.goHome}>Click Here to return to your Profile</button>
        </div>
      );
    } else {
    if(this.state.loading === true){
      return(
        <div className="Loader">
          <h2>Please Wait While the Blockchain Processes Your Funding Application</h2>
        <img src={Loader} alt ="Loader" className="Loader" />
        </div>
      );
    } else {
    return (
      <div className='container'>
      <div>
      <p className="info">Your Wallet address is: {this.state.applicantAddress}</p>
      </div>
      <div>
        <h3 className="info">Welcome to The Funding Application Page!</h3>
        <p className="info">The funding application process allows a
        DecentraCorp Member to petition the community for funding from DecentraCorps
        Community Held Funds. These are funds earned from Membership signups, the ChaosCasino and the
        DC_Depot.</p>

      </div>
      <br/>
      <form onSubmit={this.handleSubmit}>
       <label htmlFor="username">Applicant Name: </label>
       <br/>
       <input id="username" name="username" type="text" placeholder = 'Optional'/>
       <br/>
         <label htmlFor="Address">Funding Recepient Wallet address: </label>
         <br/>
         <input id="Address" name="Address" type="text" placeholder = 'Address that will Receive the funds if approved'/>
         <br/>
       <label htmlFor="ProposalName">Name of your Funding Proposal: </label>
       <br/>
       <input id="ProposalName" name="ProposalName" type="text" placeholder = 'The Name of Your Proposal' onChange={event => this.handleChange(event)}/>
       <br/>
         <br/>
       <label htmlFor="FundingAmount">Funding Amount Being Requested:</label>
         <br/>
         <input id="FundingAmount" name="FundingAmount" type="text" placeholder = 'The Amount in ETH Being requested' onChange={event => this.handleChange(event)}/>
         <br/>
          <label htmlFor="details">Funding Request Details: </label>
          <br/>
          <input className='details' id="details" name="details" type="text" placeholder = 'Explain Your Funding Proposal' onChange={event => this.handleChange(event)} />

        <br/>
        <br/>
       <button>Send data!</button>
     </form>
     <p>{this.state.transactionHash}</p>
     <br/>
     <p>Proposal hash: {ipfsHash}</p>
     <br/>
     </div>
    );
  }
}
}
}
}
export default CreateFundingProp;
