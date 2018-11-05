import React, { Component } from 'react';
import web3 from '../utils/web3';
import ipfs from '../utils/IPFS_util';
import _CryptoPatentBlockchain from '../ethereum/CryptoPatent';
import  DisplayIPFS  from '../components/DisplayIPFS';

class IdeaList extends Component {
  constructor(props){
    super(props);

    this.state = {
      userAccount: '',
      vote: false,
      hashs: [],
      hash: ''

    }
this.PropHashs = this.PropHashs.bind(this);

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
         console.log( this.state.hash );
         console.log(this.state.hashs);
        })

     }



  render() {

    return(
      <div className='IdeaLst'>
        <h2>IdeaList</h2>
        <div>
    {this.state.hashs.map((ipfshash, index) => (
        <p key={index}>{ipfshash}</p>
    ))}
    </div>
      </div>
    );
  }
}

    export default IdeaList;
