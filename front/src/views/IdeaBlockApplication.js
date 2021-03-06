import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import web3 from '../utils/web3';
import ipfs from '../utils/IPFS_util';
import _CryptoPatentBlockchain from '../ethereum/CryptoPatent';
import CryptoPatentNav from '../components/IdeaComponents/CryptoPatentNav';
import './IdeaBlockApplication.css';
import Loader from "../images/75.gif";


class IdeaBlockApplication extends Component {
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
    let jsonObject = {
        photo: this.state.photoHash,
        address: this.state.applicantAddress
    };

      for (const [key, value]  of formData.entries()) {
          jsonObject[key] = value;
          }
          console.log(jsonObject);

    var buf = Buffer.from(JSON.stringify(jsonObject));
    await ipfs.add(buf, (err, ipfsHash) => {
    this.setState({ ipfsHash: ipfsHash[0].hash});
    _CryptoPatentBlockchain.methods.proposeIdea(this.state.ipfsHash).send({from : this.state.applicantAddress}, (error, transactionHash) => {
    this.setState({transactionHash, message: 'Your Idea Has Been Successfully submitted to the CryptoPatent Blockchain! Your transaction hash is:'});
    this.onReturn();
        });
      })

};


onReturn = async => {

  _CryptoPatentBlockchain.once( 'IdeaProposed', {
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

fileSelectedHandler = async (event) => {
  event.preventDefault();
  const file = event.target.files[0];
  const reader = new window.FileReader();
  reader.readAsArrayBuffer(file);
  reader.onloadend = async () => {
    var buf = Buffer(reader.result);
    await ipfs.add(buf, (err, ipfsHash) => {
    this.setState({ photoHash: ipfsHash[0].hash, message: <p>Photo Successfully Uploaded!</p> });
    console.log(this.state.photoHash);
  })
}
};

goHome = () => {
  this.setState({ home: true})
}


  render() {
    const {  message } = this.state;
    if (this.state.home === true) {
    return <Redirect to='/IdeaVote' />
   }else{
    if(this.state.hasApplied === true){
      return(
        <div>
        <div><CryptoPatentNav /></div>
        <div>
      <h1>Thank you for Appying for a</h1>
      <h2>CryptoPatent IdeaBlock!</h2>
      <h3>Yor idea is now pending community approval!</h3>
      <button onClick={this.goHome}>Click Here to view Your IdeaBlock Proposal</button>
        </div>
      </div>
      );
    } else {
    if(this.state.loading === true){
      return(
        <div className="Loader">
          <h3>Thank you for submitting your Idea to the CryptoPatent Blockchain!</h3>
          <h3>Please Wait While the Blockchain Processes Your Application</h3>
        <img src={Loader} alt ="Loader" className="Loader" />
        <p>
          The Application process may take several minutes depending on network congestion.
          All IdeaBlock Applications require 60% of the total DecentraCorp communities approval to
          become IdeaBlocks on the CryptoPatent Blockchain.
        </p>
        </div>
      );
    } else {
    return (
      <div className='container'>
      <div>
      <p className="info">Your Wallet address is:</p>
      <p style={{ fontSize: '12px'}}>{this.state.applicantAddress}</p>
      </div>
      <div>
        <h3 className="info">Welcome to The IdeaBlock Application Page!</h3>
        <p className="info">In it's current state this part of the dApp is capable of
        capturing input and saving it to a json format which is then uploaded to
        IPFS where it receives a Unique hash on the Distributed Web!
        From here the dApp uses the IPFS hash to create an Idea Proposal
        on the CryptoPatent Blockchain!</p>

      </div>
      <div><CryptoPatentNav /></div>
      <div className='application'>
      <label htmlFor="details">Upload Idea Photo: </label>
      <input className='photo' id="photo" name="photo" type='file' onChange={this.fileSelectedHandler}/>
      <div>{message}</div>
      <br/>
      <form onSubmit={this.handleSubmit}>
        <div>
        <div>
       <label htmlFor="name">Applicant Name: </label>
       <br/>
       <input id="username" name="username" type="text" placeholder = 'Optional'/>
       <br/>
       <label htmlFor="ideaName">Name of your Idea: </label>
       <br/>
       <input id="ideaName" name="ideaName" type="text" placeholder = 'The Name of Your Idea' onChange={event => this.handleChange(event)}/>
       <br/>
       <label htmlFor="inventionAddress">Inventions Address:</label>
         <br/>
         <input id="inventionAddress" name="inventionAddress" type="text" placeholder = 'Address of the original invention' onChange={event => this.handleChange(event)}/>
         <br/>
         </div>
         <br/>
         <div>
       <label htmlFor="useblockamount">The amount your Idea should mint upon its Use: </label>
       <br/>
       <input id="useblockamount" name="useblockamount" type="text" placeholder = 'Enter amount as 18 decimals' onChange={event => this.handleChange(event)}/>
       <br/>
        <label htmlFor="miningTime">Enter the time period for mining Global UseBlocks: </label>
        <br/>
        <input id="miningTime" name="miningTime" type="text" placeholder = 'min time between GUB in sec'onChange={event => this.handleChange(event)}/>
        <br/>
        <label htmlFor="royalty">The the percentage amount for your royalty(ex: 10%): </label>
        <br/>
        <input id="royalty" name="royalty" type="text" placeholder = 'no symbols like % please' onChange={event => this.handleChange(event)} />
          <br/>
          <label htmlFor="details">Idea Details: </label>
          <br/>
          <input className='details' id="details" name="details" type="text" placeholder = 'Description of your Idea' onChange={event => this.handleChange(event)} />

        <br/>
        <br/>
       <button>Send data!</button>
       </div>
       </div>
     </form>
   </div>
     <br/>
     <div>
     <p>{this.state.message}</p>
     <br/>
     </div>

     </div>
    );
  }
}
}
}
}
export default IdeaBlockApplication;
