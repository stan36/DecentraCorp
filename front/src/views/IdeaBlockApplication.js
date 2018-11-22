import React, { Component } from 'react';
import web3 from '../utils/web3';
import ipfs from '../utils/IPFS_util';
import _CryptoPatentBlockchain from '../ethereum/CryptoPatent';
import './IdeaBlockApplication.css';


class IdeaBlockApplication extends Component {
  constructor(props){
    super(props);

    this.state = {
      applicantAddress: '',
      ipfsHash: '',
      transactionHash: '',
      message: '',
      buffer: '',
      photoHash: ''
     }


  }

  async  componentDidMount(){
     const accounts = await web3.eth.getAccounts();
     const userAccount = accounts[0];
     this.setState({ applicantAddress: userAccount });
   }

   handleChange (event) {
     this.setState( [event.target.name]: event.target.value )
   }



  handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let jsonObject = {
        photo: this.state.photoHash
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
        });
      })
};

fileSelectedHandler = async (event) => {
  event.preventDefault();
  const file = event.target.files[0];
  const reader = new window.FileReader();
  reader.readAsArrayBuffer(file);
  reader.onloadend = async () => {
    var buf = Buffer(reader.result);
    await ipfs.add(buf, (err, ipfsHash) => {
    this.setState({ photoHash: ipfsHash[0].hash});
    console.log(this.state.photoHash);
  })
}
};




  render() {
    const { ipfsHash } = this.state;
    return (
      <div className='container'>
      <div>
      <p>Your Wallet address is: {this.state.applicantAddress}</p>
      </div>
      <div>
        <h3>Welcome to The IdeaBlock Application Page!</h3>
        <p>In it's current state this part of the dApp is capable of</p>
        <p>capturing input and saving it to a json format which is then uploaded to</p>
        <p>IPFS where it receives a Unique hash on the Distributed Web!</p>
        <p>From here the dApp uses the IPFS hash to create an Idea Proposal</p>
        <p>on the CryptoPatent Blockchain!</p>

      </div>
      <label htmlFor="details">Upload Idea Photo: </label>
      <input className='photo' id="photo" name="photo" type='file' onChange={this.fileSelectedHandler}/>
      <br/>
      <form onSubmit={this.handleSubmit}>
       <label htmlFor="name">Applicant Name: </label>
       <br/>
       <input id="username" name="username" type="text" placeholder = 'Optional'/>
       <br/>
         <label htmlFor="address">Applicant Wallet address: </label>
         <br/>
         <input id="address" name="address" type="text" placeholder = 'Address that will hold the patent'/>
         <br/>
       <label htmlFor="ideaName">Name of your Idea: </label>
       <br/>
       <input id="ideaName" name="ideaName" type="text" placeholder = 'The Name of Your Idea' onChange={event => this.handleChange(event)}/>
       <br/>
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
     </form>

     <br/>
     <p>{this.state.message}</p>
     <br/>
     <p>{this.state.transactionHash}</p>
     </div>
    );
  }
}

export default IdeaBlockApplication;
