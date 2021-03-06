import React, { Component } from 'react';
import web3 from '../utils/web3';
import CryptoPatentNav from '../components/IdeaComponents/CryptoPatentNav';
import _CryptoPatentBlockchain from '../ethereum/CryptoPatent';
import  DisplayIPFSName  from '../components/IdeaComponents/DisplayIPFSName';
import  DisplayIPFS  from '../components/IdeaComponents/DisplayIPFS';
import Loader from "../images/75.gif";
import './ApprovedIdeas.css';



class ApprovedIdeas extends Component {
  constructor(props){
    super(props);

    this.state = {
      userAccount: '',
      vote: false,
      hashs: [],
      selectedIpfs: '',
      loading:false

    }
this.PropHashs = this.PropHashs.bind(this);
this.onClick = this.onClick.bind(this);
this.stateSetter = this.stateSetter.bind(this);

  }

  async  componentDidMount(){
    this.setState({ loading : true });
     const accounts = await web3.eth.getAccounts();
     const userAccount = accounts[0];
     this.setState({ userAccount });
     this.PropHashs();
     console.log(this.state.hashs);
     this.setState({ loading: false})
   }

   PropHashs = async () => {

      await _CryptoPatentBlockchain.events.IdeaApproved({
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
    if(this.state.loading === true){
      return(
        <div className="Loader">
        <img src={Loader} alt ="Loader" className="Loader" />
        </div>
      );
    } else {
if(!this.state.selectedIpfs){
    return(
      <div>
        <div><CryptoPatentNav /></div>

      <div className='ItemList'>
          <h1>Select an Idea to view</h1>
            <p style={{ fontSize: '15px', color: 'red'}}>
              None of the Ideas seen here are operational yet. Some images where pulled from a google image search.
            </p>
            <p style={{ fontSize: '15px', color: 'red'}}>
              Partnerships with existing Open-Source solutions will be sought before an in-house solution for an idea is built
            </p>
            <div className='item'>
            <div className ="item-details">
    {this.state.hashs.map((ipfshash, index) => (
      <div className="prop-detail" key ={index + 1}>
        <DisplayIPFSName key={index + 4} ipfsHash={ipfshash} />
        <p key={index + 5}>IPFS Hash:</p>
        <p style={{ fontSize: '10px'}}className='ipfsHash'  key={index}>{ipfshash}</p>
          <button  style={{ color: "red"}} onClick={() => this.stateSetter(ipfshash)} key={index + 2}>Click Here To View This Idea</button>
          <br/>
          <br/>
          <br/>
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
}
    export default ApprovedIdeas;
