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
      hashs: []

    }
this.PropHashs = this.PropHashs.bind(this);
  }

  async  componentDidMount(){
     const accounts = await web3.eth.getAccounts();
     const userAccount = accounts[0];
     this.PropHashs();
     this.setState({ userAccount });
     console.log(this.state.userAccount);
   }

   PropHashs = async () => {

      _CryptoPatentBlockchain.events.IdeaProposed({
            fromBlock: '0',
            toBlock: 'latest'
          },function(error, event){ console.log(event.returnValues.IdeaHash); })
     .on('data', function(event){
         const hashs = event.returnValues.IdeaHash;
         return hashs;
       })
       .on((hashs) => {
         this.setState({ hashs });
         console.log( this.state.hashs );
       });

     }




  render() {
    return(
      <div className='IdeaLst'>
        <h2>IdeaList</h2>

      </div>
    );
  }
}

    export default IdeaList;
