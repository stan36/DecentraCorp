import React, { Component } from 'react';
import './App.css';
import web3 from './utils/web3';
import _CryptoPatentBlockchain from './ethereum/CryptoPatent'
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import DCWallet from './views/DCWallet';
import IdeaBlockApplication from './views/IdeaBlockApplication';
import BuyMembership from './components/BuyMembership';
import IdeaVote from './views/IdeaVote';
import DecentraCorpLogo from "./images/DecentraCorpLogo.png";
import ChaosCasino from './views/ChaosCasino';
import Entropy21 from './views/Entropy21';



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
      <div>
        <img src={DecentraCorpLogo} alt ="DecentraCorp Dapp" className="DecentraCorpLogo1"/>
      </div>
          <nav>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/IdeaBlockApplication'>IdeaBlock Application</NavLink></li>
              <li><NavLink to='/BuyMembership'>Become a DecentraCorp Member!</NavLink></li>
              <li><NavLink to='/ChaosCasino'>ChaosCasino</NavLink></li>
              <li><NavLink to='/Entropy21'>Entropy21</NavLink></li>
          </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/IdeaBlockApplication' component={IdeaBlockApplication}></Route>
            <Route exact path='/BuyMembership' component={BuyMembership}></Route>
            <Route exact path='/ChaosCasino' component={ChaosCasino}></Route>
            <Route exact path='/Entropy21' component={Entropy21}></Route>
        </Switch>

      </div>
    );
  } else {
    return(
    <div className='app'>
      <div>
        <img src={DecentraCorpLogo} alt ="DecentraCorp Dapp" className="DecentraCorpLogo1"/>
      </div>
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/wallet'>DC Wallet</NavLink></li>
            <li><NavLink to='/IdeaBlockApplication'>IdeaBlock Application</NavLink></li>
            <li><NavLink to='/IdeaVote'>IdeaBlock Vote</NavLink></li>
            <li><NavLink to='/ChaosCasino'>ChaosCasino</NavLink></li>
            <li><NavLink to='/Entropy21'>Entropy21</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/wallet' component={DCWallet}></Route>
          <Route exact path='/IdeaBlockApplication' component={IdeaBlockApplication}></Route>
          <Route exact path='/IdeaVote' component={IdeaVote}></Route>
          <Route exact path='/ChaosCasino' component={ChaosCasino}></Route>
          <Route exact path='/Entropy21' component={Entropy21}></Route>
      </Switch>
      </div>
      );
    }
  }
}




export default App;
