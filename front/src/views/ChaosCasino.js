import React, { Component } from 'react';
import web3 from '../utils/web3';
import { Link } from 'react-router-dom';
import _ChaosCasino from '../ethereum/ChaosCasino';
import _ChaosCoin from '../ethereum/ChaosCoin';
import Entropy21 from '../components/ChaosComponents/Entropy21';



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
    const balance = await _ChaosCoin.methods.balanceOf(userAccount).call();
    const userBalance = web3.utils.fromWei(balance);
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

  onExchange = async (event) => {
      event.preventDefault();
      const amount = web3.utils.toWei(String(this.state.exchangeAmount));
      await _ChaosCasino.methods.cashOut(amount).send
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
        <p>Your Account Address is:</p>
          <p style={{fontSize: '12px'}}> {this.state.userAccount}</p>
        <p>Your ChaosCoin Balance is:</p>
         <p>{this.state.userBalance}</p>
        <p>The Current Entropy Unit Is:</p>
        <p>{this.state.entropyUnit}</p>
        <p>Here you can exchange ether(ropsten test net Only!)</p>
        <p>for ChaosCoin to play in ChaosCasino games!</p>
        <p>The current Entropy Unit is used by the dApp's to determine</p>
        <p>game outcomes like which card is drawn!</p>
        <p>This number should change roughly every twenty seconds</p>
        <p>through the ChaosCasino contract!</p>
        <p>Entropy 21 and the other ChaosCasino Games are still under development and DO NOT currently employ
        most planned features.</p>
        <div style={{ textAlign: "center"}}>
        <Link style={{ textDecoration: 'none', color: "red"}} to='/Entropy21'>Click Here to Play Entropy21</Link>
        </div>
        <br/>
        <br/>
        <div style={{ textAlign: "center"}}>
          <input
            placeholder = 'Amount to buy(1CC=.0001 ETH)'
            exchangeAmount = {this.state.exchangeCCAmount}
            onChange = { event => this.setState({exchangeCCAmount : event.target.value})}
          />
          <br/>
        <button>Buy ChaosCoin</button>
        <br/>
        </div>
        </form>
        <br/>
        <p>This page can also be used to echange ChaosCoin for Ether!</p>
        <form onClick={this.onClick}>
          <br/>
          <div style={{ textAlign: "center"}}>
          <input
            placeholder = 'Amount to Exchange'
            exchangeAmount = {this.state.exchangeAmount}
            onChange = { event => this.setState({exchangeAmount : event.target.value})}
          />
        <br/>
        <button onClick={this.onExchange}>Exchange ChaosCoin</button>
        </div>
      </form>


      </div>
      );
  }
}




export default ChaosCasino;
