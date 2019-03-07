import React, { Component } from 'react';
import web3 from '../../utils/web3';
import _IdeaCoin from '../../ethereum/IdeaCoin';
import _ChaosCoin from '../../ethereum/ChaosCoin';



class IDC_Wallet extends Component {

  constructor(props){
    super(props);

    this.state = {
      tokenName : '',
       symbol:'',
       userBalance: '',
       userAccount:'',
       transferamount: null,
       transfertoadd: '',
       ownedIdeas: [],
       chaosBalance: '',
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
     const chaostoken = await _ChaosCoin.methods.balanceOf(userAccount).call();
     const chaosBalance = web3.utils.fromWei(chaostoken);
     this.setState({tokenName, symbol, userBalance, userAccount, chaosBalance});
     console.log(symbol, this.state.ownedIdeas);
   }
 onSubmit = async (event)=>{
     event.preventDefault();
     const address = this.state.transfertoadd;
     const bAmount = this.state.transferamount;
     const amount = web3.utils.toWei(bAmount.toString());
     await _IdeaCoin.methods.transfer( address, amount).send({from: this.state.userAccount});
 };

  render() {
    const { userBalance, symbol, chaosBalance } =this.state;
    return (
      <div>
      <div className='MemDash'>
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
      </div>
      </div>
</div>
    );
  }
}

export default IDC_Wallet;
