
 import React, { Component } from 'react';
 import web3 from '../utils/web3';
 import ipfs from '../utils/IPFS_util';
import _CryptoPatentBlockchain from '../ethereum/CryptoPatent';


 class DisplayIPFS extends Component {
   constructor(props){
     super(props);

this.state={
  Json: {},
  userAccount: '',
  ProposalId: null,
  hasVoted: false,
  transactionHash: ''


}

this.onload = this.onload.bind(this);
this.onYes = this.onYes.bind(this);
this.onNo = this.onNo.bind(this);
}

async  componentDidMount(){
  const { ipfsHash }= this.props;
   const accounts = await web3.eth.getAccounts();
   const userAccount = accounts[0];
   const ProposalId = await _CryptoPatentBlockchain.methods.getPropID(ipfsHash).call();
   this.setState({  userAccount, ProposalId });
   console.log(this.state.ProposalId);

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
   render() {
     const { ipfsHash }= this.props;
     const { Json }= this.state;
     if(!ipfsHash){
     return(
      ''
     );
   } else {
     this.onload();
     return(
       <div className='DisplayIPFS'>
<form >
   <label htmlFor="ideaName">Idea Name: { Json.ideaName } </label>
   <br/>
   <label htmlFor="applicantName">Inventors Name: { Json.username } </label>
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
</form>
       </div>
     );
   }
   }
 }

     export default DisplayIPFS;
