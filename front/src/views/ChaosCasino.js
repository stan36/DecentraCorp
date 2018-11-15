import React, { Component } from 'react';
import web3 from '../utils/web3';
import _ChaosCasino from '../ethereum/ChaosCasino';
import _ChaosCoin from '../ethereum/ChaosCoin';
import Entropy21 from './Entropy21';



class ChaosCasino extends Component {
  constructor(props){
    super(props);

    this.state = {
      userAccount: '',
      userBalance: null,
      exchangeAmount: null,
      exchangeCCAmount: null,
      entropyUnit: ''
     }
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const userAccount = accounts[0];
    const userBalance = await _ChaosCoin.methods.balanceOf(userAccount).call();
    const entropyUnit = await _ChaosCasino.methods.getRandomNum().call();
    this.setState({ userAccount, userBalance, entropyUnit });

  }

  onSubmit = async (event)=>{
      event.preventDefault();
      await _ChaosCasino.methods.buyChaosCoin().send
      ({
        from: this.state.userAccount,
        gas: '3000000',
        value: web3.utils.toWei(String(this.state.exchangeCCAmount), 'ether')
      });
  };

  onClick = async (event) => {
      event.preventDefault();
      await _ChaosCasino.methods.cashOut(this.state.exchangeAmount).send
      ({
        from: this.state.userAccount,
        gas: '3000000'
      });
  }

  render() {
    return (
      <div className='ChaosCasino'>
          <form onSubmit={this.onSubmit}>
        <p>Welecome to the ChaosCasino Home Page!</p>
        <p>Your Account Address is: {this.state.userAccount}</p>
        <p>Your ChaosCoin Balance is: {this.state.userBalance}</p>
        <p>The Current Entropy Unit Is:{this.state.entropyUnit}</p>
        <p>Here you can exchange ether(ropsten test net Only!)</p>
        <p>for ChaosCoin to play in ChaosCasino games!</p>
        <p>The current Entropy Unit is used by the dApp's to determine</p>
        <p>game outcomes like which card is drawn!</p>
        <p>This number should change roughly every ten seconds</p>
        <p>through the ChaosCasino contract!</p>
          <input
            placeholder = 'Amount to buy(1CC=.0001 ETH)'
            exchangeAmount = {this.state.exchangeCCAmount}
            onChange = { event => this.setState({exchangeCCAmount : event.target.value})}
          />
          <br/>
        <button>Buy ChaosCoin</button>
        <br/>
        </form>
        <br/>
        <p>This page can also be used to echange ChaosCoin for Ether!</p>
        <form onClick={this.onClick}>
          <br/>
          <input
            placeholder = 'Amount to Exchange'
            exchangeAmount = {this.state.exchangeAmount}
            onChange = { event => this.setState({exchangeAmount : event.target.value})}
          />
        <br/>
        <button>Exchange ChaosCoin</button>
      </form>
      </div>
      );
  }
}




export default ChaosCasino;
