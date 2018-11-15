import React, { Component } from 'react';
import web3 from '../utils/web3';
import _IdeaCoin from '../ethereum/IdeaCoin';
import _CryptoPatentBlockchain from '../ethereum/CryptoPatent';
import _ChaosCoin from '../ethereum/ChaosCoin';
import './DCWallet.css'

class DcWallet extends Component {

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
       chaosBalance: ''
     }


  }

 async  componentDidMount(){
   const accounts = await web3.eth.getAccounts();
   console.log(accounts[0]);
    const tokenName = await _IdeaCoin.methods.name().call();
    const symbol = await _IdeaCoin.methods.symbol().call();
    const userAccount = accounts[0];
    const userBalance = await _IdeaCoin.methods.balanceOf(userAccount).call();
    const Ideas = await _CryptoPatentBlockchain.methods.getIdeasOwner().call();
    const chaosBalance = await _ChaosCoin.methods.balanceOf(userAccount).call();
    console.log(tokenName, Ideas);
    this.setState({tokenName, symbol, userBalance, userAccount, ownedIdeas: Ideas, chaosBalance});
    console.log(symbol, this.state.ownedIdeas);
  }


  onSubmit = async (event)=>{
      event.preventDefault();
      const address = this.state.transfertoadd;
      const amount = this.state.transferamount;
      this.setState({message: 'Approving through the IdeaCoin smart contract ..... Mining in process ! '});
      await _IdeaCoin.methods.transfer( address, amount).send({from: this.state.userAccount});
      this.setState({message: 'Smart Contract approved the Transfer'});
  };



  render() {

    return (
      <div className='DCWallet'>
        <div className='container'>
          <h1> DecentraCorp Wallet </h1>
          <p> Token Name: </p>
          <p> {this.state.tokenName}</p>
          <br/>
          <p> Token Symbol: </p>
          <p>{this.state.symbol}</p>
          <br/>
          <p> Your IdeaCoin Balance Is: </p>
          <p> {this.state.userBalance} </p>
          <br/>
          <p> Your ChaosCoin Balance Is: </p>
          <p> {this.state.chaosBalance} </p>
          <br/>
          <p>Your Account Address is: </p>
          <p>{this.state.userAccount}</p>
          <hr/>
          <form onSubmit={this.onSubmit}>
            <h3>Transfer IdeaCoin</h3>
            <div>
              <input
                placeholder = 'Amount to Transfer'
                transferamount = {this.state.transferamount}
                onChange = { event => this.setState({transferamount : event.target.value})}
              />
              <input
                placeholder = 'Address to Transfer to'
                transfertoadd = {this.state.transfertoadd}
                onChange = { event => this.setState({transfertoadd : event.target.value})}
              />
            <button>Transfer IdeaCoin</button>
            </div>
          </form>
          <hr/>
          <h3>{this.state.message}</h3>
        </div>
</div>
    );
  }
}

export default DcWallet;
