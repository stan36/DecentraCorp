
 import React, { Component } from 'react';
 import web3 from '../utils/web3';
 import ipfs from '../utils/IPFS_util';
import _CryptoPatentBlockchain from '../ethereum/CryptoPatent';
import './DisplayIPFS.css'

 class DisplayIPFS extends Component {
   constructor(props){
     super(props);

this.state={
  Json: {},
  userAccount: '',
  ProposalId: null,
  hasVoted: false,
  transactionHash: '',
  ProposalProps: []


}

this.onload = this.onload.bind(this);
this.onYes = this.onYes.bind(this);
this.onNo = this.onNo.bind(this);
this.approveIdea = this.approveIdea.bind(this);
}

async  componentDidMount(){
  const { ipfsHash }= this.props;
   const accounts = await web3.eth.getAccounts();
   const userAccount = accounts[0];
   const ProposalId = await _CryptoPatentBlockchain.methods.getPropID(ipfsHash).call();
   const ProposalProps = await _CryptoPatentBlockchain.methods.proposals(ProposalId).call();
   this.setState({  userAccount, ProposalId, ProposalProps });
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
    await _CryptoPatentBlockchain.methods.vote(this.state.ProposalId, true).send({from : this.state.userAccount}, (error, transactionHash) => {
    this.setState({transactionHash, hasVoted: true });
  });
}

  onNo = async (event)=>{
    event.preventDefault();
    console.log('voted no');
    _CryptoPatentBlockchain.methods.vote(this.state.ProposalId, false).send({from : this.state.userAccount}, (error, transactionHash) => {
    this.setState({transactionHash, hasVoted: true });
  });
}

approveIdea = async (event)=>{
  event.preventDefault();
  _CryptoPatentBlockchain.methods.ideaBlockVote(
    this.state.ProposalId,
    this.state.Json.useblockamount,
    this.state.Json.miningTime,
    this.state.Json.royalty,
    this.state.Json.address
  ).send({from : this.state.userAccount}, (error, transactionHash) => {
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
         <h2>Voting is open on this Idea!</h2>
         <h2>The number of votes on this Idea is {ProposalProps.numberOfVotes}</h2>
<form >
   <label htmlFor="ideaName">Idea Name: { Json.ideaName } </label>
   <br/>
   <label htmlFor="applicantName">Inventors Name: { Json.username } </label>
   <br/>
   <label htmlFor="address">Inventors Address: { Json.address } </label>
   <br/>
   <label htmlFor="useblockamount">UseBlock Amount: { Json.useblockamount } </label>
   <br/>
   <label htmlFor="miningTime">Mining Time: { Json.miningTime } </label>
   <br/>
   <label htmlFor="royalty">Inventors Royalty Amount: { Json.royalty } </label>
   <br/>
   <label htmlFor="detailsdetails">Idea Details: </label>
   <br/>
   { Json.details }
   <br/>
   <button onClick={this.onYes}>Vote Yes</button><button onClick={this.onNo}>Vote No</button>
   <br/>
   <button onClick={this.approveIdea}>Click here if this Idea has enough Votes!</button>
</form>
       </div>
     );
   }else if(ProposalProps.proposalPassed){
     return(
       <div className='container'>
       <h2>This Proposal was approved and can no longer be voted on</h2>
       <h2>The number of votes for this Idea is {ProposalProps.numberOfVotes}</h2>
         <form >
            <label htmlFor="ideaName">Idea Name: { Json.ideaName } </label>
            <br/>
            <label htmlFor="applicantName">Inventors Name: { Json.username } </label>
            <br/>
            <label htmlFor="address">Inventors Address: { Json.address } </label>
            <br/>
            <label htmlFor="useblockamount">UseBlock Amount: { Json.useblockamount } </label>
            <br/>
            <label htmlFor="miningTime">Mining Time: { Json.miningTime } </label>
            <br/>
            <label htmlFor="royalty">Inventors Royalty Amount: { Json.royalty } </label>
            <br/>
            <label htmlFor="detailsdetails">Idea Details: </label>
            <br/>
            { Json.details }
            <br/>
            </form>
       </div>
     );
   }else {
     return(
       <div className='container'>
       <h2>This Proposal can no longer be voted on and it was not approved!</h2>
       <h2>The number of votes for this Idea is {ProposalProps.numberOfVotes}</h2>
         <form >
            <label htmlFor="ideaName">Idea Name: { Json.ideaName } </label>
            <br/>
            <label htmlFor="applicantName">Inventors Name: { Json.username } </label>
            <br/>
            <label htmlFor="address">Inventors Address: { Json.address } </label>
            <br/>
            <label htmlFor="useblockamount">UseBlock Amount: { Json.useblockamount } </label>
            <br/>
            <label htmlFor="miningTime">Mining Time: { Json.miningTime } </label>
            <br/>
            <label htmlFor="royalty">Inventors Royalty Amount: { Json.royalty } </label>
            <br/>
            <label htmlFor="detailsdetails">Idea Details: </label>
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
