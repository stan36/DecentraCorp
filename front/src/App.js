import React, { Component } from 'react';
import './App.css';
import web3 from './utils/web3';
import _CryptoPatentBlockchain from './ethereum/CryptoPatent'
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import DCWallet from './views/DCWallet';
import IdeaBlockApplication from './views/IdeaBlockApplication';
import BuyMembership from './components/BuyMembership';
import IdeaList from './components/IdeaList';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isMember: false
     }
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const userAccount = accounts[0];
    const isMember = await _CryptoPatentBlockchain.methods.checkIfMember(userAccount).call()
    this.setState({ isMember })

  }

  render() {
    const {  isMember } = this.state;

if(!isMember) {
    return (
      <div className='app'>
        <h1>DecentraCorp Dapp</h1>
          <nav>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/IdeaBlockApplication'>IdeaBlock Application</NavLink></li>
              <li><NavLink to='/BuyMembership'>Become a DecentraCorp Member!</NavLink></li>
          </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/IdeaBlockApplication' component={IdeaBlockApplication}></Route>
            <Route exact path='/BuyMembership' component={BuyMembership}></Route>
        </Switch>

      </div>
    );
  } else {
    return(
    <div className='app'>
      <h1>DecentraCorp Dapp</h1>
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/wallet'>DC Wallet</NavLink></li>
            <li><NavLink to='/IdeaBlockApplication'>IdeaBlock Application</NavLink></li>
            <li><NavLink to='/IdeaList'>IdeaBlock Vote</NavLink></li>

          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/wallet' component={DCWallet}></Route>
          <Route exact path='/IdeaBlockApplication' component={IdeaBlockApplication}></Route>
          <Route exact path='/IdeaList' component={IdeaList}></Route>
      </Switch>
      </div>
      );
    }
  }
}




export default App;
