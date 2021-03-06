
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
  toDashboard: false,
  toReplicate: false,
  repAdd: ''
}

this.onload = this.onload.bind(this);
this.onYes = this.onYes.bind(this);
this.onNo = this.onNo.bind(this);
this.replicate = this.replicate.bind(this);
this.handleChange = this.handleChange.bind(this);
}

async  componentDidMount(){
  const { ipfsHash }= this.props;
  this.setState({ loading: true });
   const accounts = await web3.eth.getAccounts();
   const userAccount = accounts[0];
   console.log('this is bullshit' + userAccount)
   const ProposalId = await _CryptoPatentBlockchain.methods.getPropID(ipfsHash).call();
   console.log('this is ProposalId' + ProposalId)
   const ProposalProps = await _CryptoPatentBlockchain.methods.ideaProposals(ProposalId).call();
   console.log('this is ProposalProps' + ProposalProps)
   const voted = await  _CryptoPatentBlockchain.methods.checkIfVotedIdea(userAccount, ProposalId).call();
   console.log('this is voted' + voted)
   this.setState({  userAccount, ProposalId, ProposalProps, voted, loading: false});
   console.log("the proposals properties are:" + this.state.ProposalProps);

 };


onload = async ()=>{
    const { ipfsHash }= this.props;
    const Json =JSON.parse(await ipfs.cat(ipfsHash));
    console.log( );
    this.setState({ Json })
  };

  onYes = async (event)=>{
    event.preventDefault();
    this.setState({ loading: true });
    console.log('voted yes');
    await _CryptoPatentBlockchain.methods.ideaVote(
      this.state.ProposalId,
      true,
      this.state.Json.useblockamount,
      this.state.Json.miningTime,
      this.state.Json.royalty,
      this.state.Json.address,
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
    _CryptoPatentBlockchain.methods.ideaVote(
      this.state.ProposalId,
      false,
      this.state.Json.useblockamount,
      this.state.Json.miningTime,
      this.state.Json.royalty,
      this.state.Json.address,
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

stateSetter2 = async => {
  console.log('eat a dick and work you cunt')
  this.setState({  toReplicate: true });
}

replicate = (event) => {
  event.preventDefault();
    console.log('button push');
  this.stateSetter2();
}

activateReplicate = async(event) => {
  event.preventDefault();
  const ideaId = await _CryptoPatentBlockchain.methods.getID(this.state.Json.inventionAddress).call();
console.log("the Idea ID is: " + this.state.repAdd);
    _CryptoPatentBlockchain.methods.generateReplicationBlock(
      ideaId,
      this.state.repAdd
    ).send({from : this.state.userAccount}, (error, transactionHash) => {
      this.onRepReturn();
    });
}

onRepReturn = () => {
this.setState({toDashboard: true});

}

handleChange (event) {
  this.setState( {[event.target.name]: event.target.value })
  console.log("the Idea ID is: " + this.state.repAdd);
}
   render() {
     const { Json,  ProposalProps, toReplicate}= this.state;
     if (this.state.toDashboard === true) {
      return <Redirect to='/Profile' />
    }
      else if(toReplicate === true ){
       return(
                 <div>
                 <h2>You Must Have a staked account to activate a replication</h2>
                 <p>If you havn't, please visit the Become a Member Page above.</p>
                 <p>A properly assembled replication with an activated EPMS is Required
                 to activate a replications mining status.</p>
               <p>A staking of 100 Notio is also required from the member.</p>
               <p>If you meet these requirements enter the address of the replication produced when you activated its EPMS</p>
               <form>
                 <label htmlFor="repAdd">Replication Address: </label>
                 <br/>
                 <p><input id="repAdd" name="repAdd" type="text" placeholder = 'this will be an ethereum address' onChange={this.handleChange}/></p>
                 <br/>
                 <p>
                 <button  style={{ fontSize: "20px"}} type="button" class="button" onClick={this.activateReplicate}>Activate Replication</button>
                 </p>
               </form>
               </div>
               );
      }
      else if(this.state.loading === true){
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
     } else if(ProposalProps.proposalPassed){
       this.onload();
       return(
         <div className='ideaDisplayer'>
         <h2>This Proposal was approved</h2>
         <h2>The number of votes for this Idea is {ProposalProps.numberOfVotes}</h2>
         <p>Members of DecentraCorp can replicate approved Ideas and use them to mine Notio.</p>
         <div className='ideaDisplay'>
         <img src={"https://ipfs.io/ipfs/" + Json.photo } alt ="No Image" className="ideaPhoto"/>
           <form >
              <label htmlFor="ideaName">Idea Name: { Json.ideaName } </label>
              <br/>
              <label htmlFor="applicantName">Inventors Name: { Json.username } </label>
                <br/>
                <label htmlFor="inventorAddress">Inventors Address: { Json.address } </label>
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
              <p>{ Json.details }</p>
              <br/>
              <p><button style={{ fontSize: "20px"}} type="button" class="button"onClick={this.replicate}>Replicate This Idea</button></p>
              </form>
         </div>
          </div>
       );
     }else if(this.state.voted === true ){
       this.onload();
       return(
         <div className='ideaDisplayer'>
         <h2>You have already voted on this Idea</h2>
         <h2>The number of votes for this Idea is {ProposalProps.numberOfVotes}</h2>
         <div className='ideaDisplay'>
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
              <p>{ Json.details }</p>
              <br/>
              </form>
         </div>
         </div>
       );
     } else if (!ProposalProps.executed){
     this.onload();
     return(
       <div className='ideaDisplayer'>
         <h2>Voting is open on this Idea!</h2>
         <h2>The number of votes on this Idea is {ProposalProps.numberOfVotes}</h2>
         <div className='ideaDisplay'>
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
   <p><button style={{ fontSize: "20px"}} type="button" class="button" onClick={this.onYes}>Vote Yes</button><button style={{ fontSize: "20px"}} type="button" class="button" onClick={this.onNo}>Vote No</button></p>
   <br/>
</form>
       </div>
       </div>
     );
   }else{
     this.onload();
     return(
       <div className='ideaDisplayer'>
       <h2>This Proposal can no longer be voted on and it was not approved!</h2>
       <h2>The number of votes for this Idea is {ProposalProps.numberOfVotes}</h2>
        <div className='ideaDisplay'>
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
          <p>{ Json.details }</p>
            <br/>
            </form>
       </div>
     </div>
     );
   }
   }
 }



     export default DisplayIPFS;
