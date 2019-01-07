import React, { Component } from 'react';
import web3 from '../../utils/web3';
import _CryptoPatentBlockchain from '../../ethereum/CryptoPatent';
import  DisplayIPFSName  from './DisplayIPFSName';
import  DisplayIPFS  from './DisplayIPFS';
import './IdeaList.css';



class IdeaList extends Component {
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

   }

   PropHashs = async () => {

      _CryptoPatentBlockchain.events.IdeaProposed({
            fromBlock: '0',
            toBlock: 'latest'
          },function(error, event){ console.log(""); })
     .on('data', (event) => {
         const currentArray = this.state.hashs;
         const hash = event.returnValues.IdeaHash;
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
      <div className='IdeaList'>
        <div>
          <h1>Select an Idea to view</h1>
          <h2>IdeaList</h2>
          <div className ="idea-details">
    {this.state.hashs.map((ipfshash, index) => (
      <div className="prop-detail" key ={index + 1}>
        <DisplayIPFSName key={index + 4} ipfsHash={ipfshash} />
        <p key={index + 5}>IPFS Hash:</p>
        <p className='ipfsHash' key={index}>{ipfshash}</p>
          <button  style={{ color: "red"}} onClick={() => this.stateSetter(ipfshash)} key={index + 2}>Click Here To View This Idea</button>
          <br/>
          <br/>
          <br/>
          </div>
    ))}
    </div>
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
    export default IdeaList;
