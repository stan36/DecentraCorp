import React, { Component } from 'react';
import web3 from '../../utils/web3';
import _CryptoPatentBlockchain from '../../ethereum/CryptoPatent';
import  DisplayIPFSName  from './DisplayIPFSName';
import  DisplayIPFS  from './DisplayIPFS';




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
         const hash = event.returnValues.IPFS;
         const newArray = currentArray.push(hash);
         this.setState({ newArray });

        })

     }

onClick = (event) =>{
  event.preventDefault();

}

stateSetter = (ipfshash) =>{
  console.log(ipfshash)
  this.setState({ selectedIpfs: ipfshash})
}

  render() {
if(!this.state.selectedIpfs){
    return(
      <div className='ItemList'>
        <div>
          <h1>Select an Idea to view</h1>
          <p style={{ fontSize: '15px', color: 'red'}}>
            None of the Ideas seen here are operational yet. some images where pulled from a google image search.
          </p>
          <h2>IdeaList</h2>
            <div className='item'>
            <div className ="item-details">
    {this.state.hashs.map((ipfshash, index) => (
      <div className="prop-detail" key ={index + 1}>
        <DisplayIPFSName key={index + 4} ipfsHash={ipfshash} />
        <div>
        <p key={index + 5}>IDea IPFS Hash:</p>
        <p style={{ maxWidth: "600px",  fontSize: "10px"}}className='ipfsHash' key={index}>{ipfshash}</p>
          <button  style={{ color: "red", fontSize: "10px"}} onClick={() => this.stateSetter(ipfshash)} key={index + 2}>Click Here To View This Idea</button>
        </div>
          </div>
    ))}
    </div>
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
