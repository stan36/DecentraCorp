import React, { Component } from 'react';
import web3 from '../utils/web3';
import ipfs from '../utils/IPFS_util';
import _CryptoPatentBlockchain from '../ethereum/CryptoPatent';
import  DisplayIPFSName  from '../components/DisplayIPFSName';
import  DisplayIPFS  from '../components/DisplayIPFS';



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



  render() {
if(!this.state.selectedIpfs){
    return(
      <div className='IdeaLst'>
        <h2>IdeaList</h2>
        <div>
    {this.state.hashs.map((ipfshash, index) => (
      <div className="prop-detail" key ={index + 1}>


      <button  onClick={() => this.setState({ selectedIpfs: ipfshash})} key={index + 2}>
        <DisplayIPFSName key={index + 4} ipfsHash={ipfshash} />
        <p key={index}>{ipfshash}</p>
        <p key={index + 3}>Click Here to View This Idea</p>
        </button>

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
    export default IdeaList;
