import React, { Component } from 'react';
import web3 from '../utils/web3';
import _IdeaCoin from '../ethereum/IdeaCoin';

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
       transfertoadd: ''
     }
  }

 async  componentDidMount(){
   const accounts = await web3.eth.getAccounts();
   console.log(accounts[0]);
    const tokenName = await _IdeaCoin.methods.name().call();
    const symbol = await _IdeaCoin.methods.symbol().call();
    const userAccount = accounts[0];
    const userBalance = await _IdeaCoin.methods.balanceOf(userAccount).call();

    this.setState({tokenName, symbol, userBalance, userAccount});
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
        <div>
          <h1> DecentraCorp Wallet </h1>
          <p> Token Name:  {this.state.tokenName}</p>
          <br/>
          <p> Token Symbol: {this.state.symbol}</p>
          <br/>
          <p> Your IdeaCoin Balance Is:  {this.state.userBalance} </p>
          <br/>
          <p>Your Account Address is: {this.state.userAccount}</p>
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
            <button>Transfer</button>
            </div>
          </form>
          <hr/>
          <h3>{this.state.message}</h3>
        </div>

    );
  }
}

export default DcWallet;
