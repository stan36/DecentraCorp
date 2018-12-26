import React, { Component } from 'react';
import web3 from '../utils/web3';
import ipfs from '../utils/IPFS_util';
import _CryptoPatentBlockchain from '../ethereum/CryptoPatent';
import _DecentraCorp from '../ethereum/DecentraCorp';
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
      toDashboard: false,
      ipfsHash: '',
      photoHash: ''
     }


  }

  async  componentDidMount(){
      this.setState({ loading : true });
     const accounts = await web3.eth.getAccounts();
     const userAccount = accounts[0];
     this.setState({ userAccount, loading: false});
   }





 handleSubmit = async (event) => {
   event.preventDefault();
   this.setState({ loading : true });
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
  _CryptoPatentBlockchain.methods.buyMembership(this.state.ipfsHash)
  .send({from : this.state.userAccount,
    gas: '3000000',
    value: web3.utils.toWei(String(1), 'ether')
  }, (error, transactionHash) => {
   this.setState({transactionHash, loading: false});
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
    this.setState({ photoHash: ipfsHash[0].hash });
    console.log(this.state.photoHash);
  })
}
};

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
          <p>To get early (alpha)access membership to DecentraCorp</p>
          <br/>
          <p> which includes 10,000 IdeaCoin and a Staked Replication Account, fill out the form below:</p>
          <label htmlFor="details">Upload Profile Picture: </label>
          <input className='photo' id="photo" name="photo" type='file' onChange={this.fileSelectedHandler}/>
          <br/>
       <form onSubmit={this.handleSubmit}>
    <label htmlFor="name">Applicant Name: </label>
    <br/>
    <input id="username" name="username" type="text" placeholder = 'Optional'/>
    <br/>
      <label htmlFor="address">Main Wallet address: </label>
      <br/>
      <input id="Address" name="Address" type="text" placeholder = 'Address that will hold the patent'/>
      <br/>
    <button>Buy Membership Now(1 Ropsten Test Ether)</button>
  </form>
     </div>
    );
  }
}
}
}
export default BuyMembership;
