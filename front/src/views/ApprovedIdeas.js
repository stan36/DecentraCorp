import React, { Component } from 'react';
import web3 from '../utils/web3';
import ipfs from '../utils/IPFS_util';
import _CryptoPatentBlockchain from '../ethereum/CryptoPatent';
import  DisplayIPFSName  from '../components/DisplayIPFSName';
import  DisplayIPFS  from '../components/DisplayIPFS';




class ApprovedIdeas extends Component {
  constructor(props){
    super(props);

    this.state = {
      userAccount: '',
      vote: false,
      hashs: [],
      selectedIpfs: ''

    }
this.PropHashs = this.PropHashs.bind(this);
this.onClick = this.onClick.bind(this);
this.stateSetter = this.stateSetter.bind(this);
  }

  async  componentDidMount(){
     const accounts = await web3.eth.getAccounts();
     const userAccount = accounts[0];
     this.setState({ userAccount });
     this.PropHashs();
     console.log(this.state.hashs);

   }

   PropHashs = async () => {

      _CryptoPatentBlockchain.events.IdeaApproved({
            fromBlock: '0',
            toBlock: 'latest'
          },function(error, event){ console.log(event.returnValues[0]); })
     .on('data', (event) => {
         const currentArray = this.state.hashs;
         const hash = event.returnValues[0];
         const newArray = currentArray.push(hash);
         this.setState({ newArray });

        })

     }

onClick = (event) =>{
  event.preventDefault();

}

stateSetter = (ipfshash) =>{
  this.setState({ selectedIpfs: ipfshash})
}

  render() {
if(!this.state.selectedIpfs){
    return(
<div className='container'>
          <div>
          <h1>Select an Idea to view</h1>
          <h2>Approved Ideas</h2>
    {this.state.hashs.map((ipfshash, index) => (
      <div className="prop-detail" key ={index + 1}>
        <DisplayIPFSName key={index + 4} ipfsHash={ipfshash} />
        <p key={index + 5}>IPFS Hash:</p>
        <p key={index}>{ipfshash}</p>
          <button  style={{ color: "red"}} onClick={() => this.stateSetter(ipfshash)} key={index + 2}>Click Here To View This Idea</button>
          <br/>
          <br/>
          <br/>
          </div>
    ))}
    </div>
      </div>
      );
    }else{
      return(
      <DisplayIPFS ipfsHash={this.state.selectedIpfs} />
    );
    }
  }
}
    export default ApprovedIdeas;
