import React, { Component } from 'react';
import web3 from '../utils/web3';
import ipfs from '../utils/IPFS_util';


class IdeaBlockApplication extends Component {
  constructor(props){
    super(props);

    this.state = {
      applicantName: '',
      applicantAddress: '',
      ideaName: '',
      globalUseBlockAmount: '',
      miningTime: '',
      royaltyPercentage: '',
      ideaInfo: '',
      ipfsHash: null,
      message: ''

     }
     this.handleSubmit = this.handleSubmit.bind(this);

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
    let jsonObject = {};

      for (const [key, value]  of formData.entries()) {
          jsonObject[key] = value;
          }

    var buf = Buffer.from(JSON.stringify(jsonObject));
    await ipfs.add(buf, (err, ipfsHash) => {
        console.log(err,ipfsHash);
  if (err) { console.log("error")}
   	if (ipfsHash) {
        this.setState({ ipfsHash: ipfsHash[0].hash, message: "the IpfsHash for your Idea Proposal is: " });
      }
});
}

  render() {
    return (
      <div>
      <div>
      <p>Your Wallet address is: {this.state.applicantAddress}</p>
      </div>
      <form onSubmit={this.handleSubmit}>
       <label htmlFor="name">Applicant Name(optional): </label>
       <input id="username" name="username" type="text" />
       <br/>
       <label htmlFor="ideaName">Name of your Idea: </label>
       <input id="ideaName" name="ideaName" type="text" onChange={event => this.handleChange(event)}/>
       <br/>
       <label htmlFor="useblockamount">The amount your Idea should mint upon its Use: </label>
       <input id="useblockamount" name="useblockamount" type="text" onChange={event => this.handleChange(event)}/>
       <br/>
        <label htmlFor="miningTime">Enter the time period for mining Global UseBlocks: </label>
        <input id="miningTime" name="miningTime" type="text" onChange={event => this.handleChange(event)}/>
        <br/>
        <label htmlFor="royalty">The the percentage amount for your royalty(ex: 10%): </label>
        <input id="royalty" name="royalty" type="text"onChange={event => this.handleChange(event)} />
        <br/>
       <button>Send data!</button>
     </form>
     <p>{this.state.message} {this.state.ipfsHash}</p>
     </div>
    );
  }
}

export default IdeaBlockApplication;
