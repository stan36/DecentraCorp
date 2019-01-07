
 import React, { Component } from 'react';
 import web3 from '../../utils/web3';
 import ipfs from '../../utils/IPFS_util';
import _DecentraCorp from '../../ethereum/DecentraCorp';


 class DisplayIPFS extends Component {
   constructor(props){
     super(props);

this.state={
  Json: {},
  userAccount: '',
  ProposalId: null,
  hasVoted: false,
  transactionHash: '',
  ProposalProps: [],
  voted: false
}

this.onload = this.onload.bind(this);
this.onYes = this.onYes.bind(this);
this.onNo = this.onNo.bind(this);

}

async  componentDidMount(){
  const { ipfsHash }= this.props;
   const accounts = await web3.eth.getAccounts();
   const userAccount = accounts[0];
   const ProposalId = await _DecentraCorp.methods.getPropID(ipfsHash).call();
   const ProposalProps = await _DecentraCorp.methods.proposals(ProposalId).call();
   const voted = await  _DecentraCorp.methods.checkIfVoted(userAccount, ProposalId).call();
   this.setState({  userAccount, ProposalId, ProposalProps,  voted});
   console.log(this.state.ProposalProps);

 };


onload = async ()=>{
    const { ipfsHash }= this.props;
    const Json =JSON.parse(await ipfs.cat(ipfsHash));
    this.setState({ Json })
  };

  onYes = async (event)=>{
    event.preventDefault();
    console.log('voted yes');
    await _DecentraCorp.methods.vote(
      this.state.ProposalId,
      true,
    )
    .send({from : this.state.userAccount}, (error, transactionHash) => {
    this.setState({transactionHash, hasVoted: true });
  });
}

  onNo = async (event)=>{
    event.preventDefault();
    console.log('voted no');
    _DecentraCorp.methods.vote(
      this.state.ProposalId,
      false
    )
    .send({from : this.state.userAccount}, (error, transactionHash) => {
    this.setState({transactionHash, hasVoted: true });
  });
}

   render() {
     const { ipfsHash }= this.props;
     const { Json,  ProposalProps}= this.state;
     if (!ProposalProps.executed){
     this.onload();
     return(
       <div className='container'>
         <h2>Voting is open on this Proposal!</h2>
         <h2>The number of votes on this Proposal is {ProposalProps.numberOfVotes}</h2>
          <img src={"https://ipfs.io/ipfs/" + Json.photo } alt ="No Image" className="ideaPhoto"/>
<form >
   <label htmlFor="ProposalName">Proposal Name: { Json.ProposalName } </label>
   <br/>
   <label htmlFor="username">Applicant Name: { Json.username } </label>
   <br/>
   <label htmlFor="Address">Applicant Address: { Json.inventorAddress } </label>
   <br/>
     <br/>
     <label htmlFor="FundingAmount">Amount Requested: { Json.FundingAmount } </label>
     <br/>
   <label htmlFor="details">Proposal Details: </label>
   <br/>
   { Json.details }
   <br/>
   <button onClick={this.onYes}>Vote Yes</button><button onClick={this.onNo}>Vote No</button>
   <br/>
</form>
       </div>
     );
   }else if(ProposalProps.proposalPassed){
     return(
       <div className='container'>
       <h2>This Proposal was approved and can no longer be voted on</h2>
       <h2>The number of votes for this Proposal is {ProposalProps.numberOfVotes}</h2>
         <form >
           <label htmlFor="ProposalName">Proposal Name: { Json.ProposalName } </label>
           <br/>
           <label htmlFor="username">Applicant Name: { Json.username } </label>
           <br/>
           <label htmlFor="Address">Applicant Address: { Json.inventorAddress } </label>
           <br/>
             <br/>
             <label htmlFor="FundingAmount">Amount Requested: { Json.FundingAmount } </label>
             <br/>
           <label htmlFor="details">Proposal Details: </label>
           <br/>
           { Json.details }
           <br/>
            </form>
       </div>
     );
   }else if(this.state.voted === true ){
     return(
       <div className='container'>
       <h2>You have already voted on this Proposal</h2>
       <h2>The number of votes for this Proposal is {ProposalProps.numberOfVotes}</h2>
         <form >
           <label htmlFor="ProposalName">Proposal Name: { Json.ProposalName } </label>
           <br/>
           <label htmlFor="username">Applicant Name: { Json.username } </label>
           <br/>
           <label htmlFor="Address">Applicant Address: { Json.inventorAddress } </label>
           <br/>
             <br/>
             <label htmlFor="FundingAmount">Amount Requested: { Json.FundingAmount } </label>
             <br/>
           <label htmlFor="details">Proposal Details: </label>
           <br/>
           { Json.details }
           <br/>
            <br/>
            </form>
       </div>
     );
   }else {
     return(
       <div className='container'>
       <h2>This Proposal can no longer be voted on and it was not approved!</h2>
       <h2>The number of votes for this Proposal is {ProposalProps.numberOfVotes}</h2>
        <form >
           <label htmlFor="ProposalName">Proposal Name: { Json.ProposalName } </label>
           <br/>
           <label htmlFor="username">Applicant Name: { Json.username } </label>
           <br/>
           <label htmlFor="Address">Applicant Address: { Json.inventorAddress } </label>
           <br/>
             <br/>
             <label htmlFor="FundingAmount">Amount Requested: { Json.FundingAmount } </label>
             <br/>
           <label htmlFor="details">Proposal Details: </label>
           <br/>
           { Json.details }
           <br/>
            </form>
       </div>
     );
   }
   }
 }

     export default DisplayIPFS;
