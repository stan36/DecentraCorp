
 import React, { Component } from 'react';
 import { Redirect } from 'react-router-dom';
 import web3 from '../../utils/web3';
 import ipfs from '../../utils/IPFS_util';
import _CryptoPatentBlockchain from '../../ethereum/CryptoPatent';
import Loader from "../../images/75.gif";

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
  voted: false,
  loading: false,
  toDashboard: false
}

this.onload = this.onload.bind(this);
this.onYes = this.onYes.bind(this);
this.onNo = this.onNo.bind(this);

}

async  componentDidMount(){
  const { ipfsHash }= this.props;
  this.setState({ loading: true });
   const accounts = await web3.eth.getAccounts();
   const userAccount = accounts[0];
   const ProposalId = await _CryptoPatentBlockchain.methods.getPropID(ipfsHash).call();
   const ProposalProps = await _CryptoPatentBlockchain.methods.proposals(ProposalId).call();
   const voted = await  _CryptoPatentBlockchain.methods.checkIfVoted(userAccount, ProposalId).call();
   this.setState({  userAccount, ProposalId, ProposalProps, voted, loading: false});
   console.log(this.state.ProposalProps);

 };


onload = async ()=>{
    const { ipfsHash }= this.props;
    const Json =JSON.parse(await ipfs.cat(ipfsHash));
    this.setState({ Json })
  };

  onYes = async (event)=>{
    event.preventDefault();
    this.setState({ loading: true });
    console.log('voted yes');
    await _CryptoPatentBlockchain.methods.vote(
      this.state.ProposalId,
      true,
      this.state.Json.useblockamount,
      this.state.Json.miningTime,
      this.state.Json.royalty,
      this.state.Json.inventorAddress,
      this.state.Json.inventionAddress
    )
    .send({from : this.state.userAccount}, (error, transactionHash) => {
    this.setState({transactionHash, hasVoted: true });
    this.onReturn();
  });
}

  onNo = async (event)=>{
    event.preventDefault();
    this.setState({ loading: true });
    console.log('voted no');
    _CryptoPatentBlockchain.methods.vote(
      this.state.ProposalId,
      false,
      this.state.Json.useblockamount,
      this.state.Json.miningTime,
      this.state.Json.royalty,
      this.state.Json.inventorAddress,
      this.state.Json.inventionAddress
    )
    .send({from : this.state.userAccount}, (error, transactionHash) => {
    this.setState({transactionHash, hasVoted: true });
    this.onReturn();
  });
}

goHome = () => {
  this.setState({ toDashboard: true})
}

onReturn = async => {

  _CryptoPatentBlockchain.once( 'Voted', {
    filter: {_voter: this.state.userAccount},
    fromBlock: '0',
    toBlock: 'latest',
  }, (error, event) => {
    console.log(event);
    this.stateSetter();
  })

}

stateSetter = async => {
  this.setState({  loading: false, toDashboard: true  });
}

   render() {
     const { Json,  ProposalProps}= this.state;
     if (this.state.toDashboard === true) {
      return <Redirect to='/Profile' />
    }else{
     if(this.state.loading === true){
       return(
         <div className="Loader">
           <h1>Please Wait While Your Vote is processed by the Blockchain</h1>
         <img src={Loader} alt ="Loader" className="Loader" />
         <h3>You will be redirected to the Members Dashboard </h3>
         <h3>once your vote is processed.</h3>
         <p>
           The Application process may take several minutes depending on network congestion.
           All IdeaBlock Applications require 60% of the total DecentraCorp communities approval to
           become IdeaBlocks on the CryptoPatent Blockchain.
     </p>
         </div>
       );
     } else {
     if (!ProposalProps.executed){
     this.onload();
     return(
       <div className='container'>
         <h2>Voting is open on this Idea!</h2>
         <h2>The number of votes on this Idea is {ProposalProps.numberOfVotes}</h2>
          <img src={"https://ipfs.io/ipfs/" + Json.photo } alt ="No Image" className="ideaPhoto"/>
<form >
   <label htmlFor="ideaName">Idea Name: { Json.ideaName } </label>
   <br/>
   <label htmlFor="applicantName">Inventors Name: { Json.username } </label>
   <br/>
   <label htmlFor="inventorAddress">Inventors Address: { Json.inventorAddress } </label>
   <br/>
     <br/>
     <label htmlFor="inventionAddress">Invention Address: { Json.inventionAddress } </label>
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
</form>
       </div>
     );
   }else if(ProposalProps.proposalPassed){
     return(
       <div className='container'>
       <h2>This Proposal was approved and can no longer be voted on</h2>
       <h2>The number of votes for this Idea is {ProposalProps.numberOfVotes}</h2>
       <img src={"https://ipfs.io/ipfs/" + Json.photo } alt ="No Image" className="ideaPhoto"/>
         <form >
            <label htmlFor="ideaName">Idea Name: { Json.ideaName } </label>
            <br/>
            <label htmlFor="applicantName">Inventors Name: { Json.username } </label>
              <br/>
              <label htmlFor="inventorAddress">Inventors Address: { Json.inventorAddress } </label>
              <br/>
                <br/>
                <label htmlFor="inventionAddress">Invention Address: { Json.inventionAddress } </label>
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
   }else if(this.state.voted === true ){
     return(
       <div className='container'>
       <h2>You have already voted on this Idea</h2>
       <h2>The number of votes for this Idea is {ProposalProps.numberOfVotes}</h2>
         <button onClick={this.goHome}>Click Here to return to The Member Dashboard</button>
       <img src={"https://ipfs.io/ipfs/" + Json.photo } alt ="No Image" className="ideaPhoto"/>
         <form >
            <label htmlFor="ideaName">Idea Name: { Json.ideaName } </label>
            <br/>
            <label htmlFor="applicantName">Inventors Name: { Json.username } </label>
              <br/>
              <label htmlFor="inventorAddress">Inventors Address: { Json.inventorAddress } </label>
              <br/>
                <br/>
                <label htmlFor="inventionAddress">Invention Address: { Json.inventionAddress } </label>
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
       <img src={"https://ipfs.io/ipfs/" + Json.photo } alt ="No Image" className="ideaPhoto"/>
         <form >
            <label htmlFor="ideaName">Idea Name: { Json.ideaName } </label>
            <br/>
            <label htmlFor="applicantName">Inventors Name: { Json.username } </label>
              <br/>
              <label htmlFor="inventorAddress">Inventors Address: { Json.inventorAddress } </label>
              <br/>
                <br/>
                <label htmlFor="inventionAddress">Invention Address: { Json.inventionAddress } </label>
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
}
}

     export default DisplayIPFS;
