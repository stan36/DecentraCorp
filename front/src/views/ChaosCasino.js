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
      exchangeCCAmount: null
     }
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const userAccount = accounts[0];
    const userBalance = await _ChaosCoin.methods.balanceOf(userAccount).call();
    this.setState({ userAccount, userBalance });

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
        <p>Your Account Address is: {this.state.userAccount}</p>
        <p>Your ChaosCoin Balance is: {this.state.userBalance}</p>
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
