import React, { Component } from 'react';
import web3 from '../utils/web3';
import ipfs from '../utils/IPFS_util';
import _IdeaCoin from '../ethereum/IdeaCoin';
import _CryptoPatentBlockchain from '../ethereum/CryptoPatent';
import _DecentraCorp from '../ethereum/DecentraCorp';
import _ChaosCoin from '../ethereum/ChaosCoin';
import './MemDashBoard.css'

class MemDashBoard extends Component {

  constructor(props){
    super(props);

    this.state = {
      tokenName : '',
       symbol:'',
       userBalance: '',
       userAccount:'',
       message: '',
       transferamount: null,
       transfertoadd: '',
       ownedIdeas: [],
       chaosBalance: '',
       userRank: null,
       facilityLevel: null,
       Json: {},
       profileHash: ""
     }


  }

 async  componentDidMount(){
   const accounts = await web3.eth.getAccounts();
   console.log(accounts[0]);
    const tokenName = await _IdeaCoin.methods.name().call();
    const symbol = await _IdeaCoin.methods.symbol().call();
    const userAccount = accounts[0];
    const balance = await _IdeaCoin.methods.balanceOf(userAccount).call();
    const userBalance = web3.utils.fromWei(balance);
    const Ideas = await _CryptoPatentBlockchain.methods.getIdeasOwner().call();
    const chaostoken = await _ChaosCoin.methods.balanceOf(userAccount).call();
    const chaosBalance = web3.utils.fromWei(chaostoken);
    const userRank =  await _DecentraCorp.methods.getRank(userAccount).call();
    const facilityLevel = await _DecentraCorp.methods.getLevel(userAccount).call();
    const profileHash = await  _DecentraCorp.methods.getProfileHahs(userAccount).call();
    const Json =JSON.parse(await ipfs.cat(profileHash));
    this.setState({tokenName, symbol, userBalance, userAccount, ownedIdeas: Ideas, chaosBalance, userRank, facilityLevel, profileHash, Json});
    console.log(symbol, this.state.ownedIdeas);
  }


  onSubmit = async (event)=>{
      event.preventDefault();
      const address = this.state.transfertoadd;
      const bAmount = this.state.transferamount;
      const amount = web3.utils.toWei(bAmount.toString());
      this.setState({message: 'Approving through the IdeaCoin smart contract ..... Mining in process ! '});
      await _IdeaCoin.methods.transfer( address, amount).send({from: this.state.userAccount});
      this.setState({message: 'Smart Contract approved the Transfer'});
  };



  render() {
    const { Json, userBalance, symbol, chaosBalance, message, profileHash, userRank, facilityLevel } =this.state;
    return (
      <div className='container'>
        <h1> DecentraCorp </h1>
        <h2>Member DashBoard</h2>
        <hr/>
      <div className='MemDash'>
        <div className='ProfileInfo'>
          <img src={"https://ipfs.io/ipfs/" + Json.photo } alt ="No Image" className="memberPhoto"/>
          <hr/>
          <h3>{Json.username}</h3>
          <hr/>
          <p>Your Profile Hash is:</p>
          <p>{profileHash}</p>
          <hr/>
          </div>
          <div className='Profile'>
              <br/>
              <p>Your Current Account Address is: </p>
              <p>{Json.Address}</p>
              <hr/>
              <p>Membership Level: {userRank}</p>
              <hr/>
              <p>Facility Level is: {facilityLevel}</p>
              <hr/>
          </div>
          <div className='DCWallet'>
          <p> Your IdeaCoin Balance Is: {userBalance} {symbol}</p>
          <hr/>
          <p> Your ChaosCoin Balance Is: {chaosBalance} ChaosCoin</p>
          <hr/>
          <form onSubmit={this.onSubmit}>
            <h3>Transfer IdeaCoin</h3>
            <div>
              <input
                placeholder = 'Amount of IDC to Transfer'
                transferamount = {this.state.transferamount}
                onChange = { event => this.setState({transferamount : event.target.value})}
              />
              <input
                placeholder = 'Address of IDC to Transfer to'
                transfertoadd = {this.state.transfertoadd}
                onChange = { event => this.setState({transfertoadd : event.target.value})}
              />
            <button>Transfer IdeaCoin</button>
            </div>
          </form>
          <hr/>
          <h3>{message}</h3>
          </div>
        </div>
</div>
    );
  }
}

export default MemDashBoard;
