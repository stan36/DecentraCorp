import React, { Component } from 'react';
import './App.css';
import web3 from './utils/web3';
import _DecentraCorp from './ethereum/DecentraCorp';
import _IdeaCoin from './ethereum/IdeaCoin';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import MemDashBoard from './views/MemDashBoard';
import IdeaBlockApplication from './views/IdeaBlockApplication';
import BuyMembership from './components/BuyMembership';
import IdeaVote from './views/IdeaVote';
import DecentraCorpLogo from "./images/DecentraCorpLogo.png";
import Loader from "./images/75.gif";
import ChaosCasino from './views/ChaosCasino';
import Entropy21 from './views/Entropy21';
import About from './views/About';
import RoadMap from './views/RoadMap';
import ApprovedIdeas from "./views/ApprovedIdeas";
import Donate from './views/Donate';
import JoinCore from './views/JoinCore';




class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isMember: false,
      accounts: null,
      memberCount: '',
      idcTotal: null,
      windowWidth: window.innerWidth,
      mobileNavVisible: false,
      loading: false
     }
  }

  handleResize() {
  this.setState({windowWidth: window.innerWidth});
}

  async componentDidMount() {
      window.addEventListener('resize', this.handleResize.bind(this));
      this.setState({ loading: true });
      if (typeof window === 'undefined' && typeof window.web3 === 'undefined') {
        alert('YOU ARE NOT CONNECTED TO WEB3! MOST FEATURES ON THIS WEBSITE REQUIRE WEB3 AND HAVE BEEN DISABLED! PLEASE INSTALL METAMASK FOR CHROME AND FIREFOX OR CIPHER ON MOBILE! IF YOU ARE USING A WEB3 ENABLED BROWSER AND STILL SEEING THIS MESSAGE YOU MAY NEED TO UNLOCK YOUR WALLET', null, null);

        this.setState({ loading: false });
      }
      const accounts = await web3.eth.getAccounts();
      const userAccount = accounts[0];
      console.log(userAccount);
      if(userAccount !== undefined){

        const isMember = await _DecentraCorp.methods._checkIfMember(userAccount).call();
        const memberCount = await _DecentraCorp.methods.getMemberCount().call();
        const total = await _IdeaCoin.methods.totalSupply().call();
        const idcTotal = web3.utils.fromWei(total);
        this.setState({ accounts, isMember, memberCount, idcTotal, loading: false });
        console.log(this.state.loading);

      }
      this.setState({ loading: false });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));

  }

  navigationLinks() {
    const {  isMember, accounts } = this.state;
      if(accounts === null){
    return [
      <div class="Navbar">
      <nav class="Navbar__Items">
      <div class="Navbar__Link Navbar__Link-brand">
      <img src={DecentraCorpLogo} alt ="DecentraCorp Dapp" className="DecentraCorpLogo1" style={{ marginBottom: "-100px"}}/>
      <ul>
        <li key={1}><NavLink to='/'>Home</NavLink></li>
        <li key={2}><NavLink to='/About'>About</NavLink></li>
        <li key={3}><NavLink to='/RoadMap'>RoadMap</NavLink></li>
        <li key={4}><NavLink to='/Donate'>Donate</NavLink></li>
        <li key={5}><NavLink to='/JoinCore'>Join the Team</NavLink></li>
      </ul>
      </div>
      </nav>
      <div>
      </div>
      </div>
    ];
  }
  else if(!isMember){
return [
  <div class="Navbar">
  <br/>
  <div>
    <p style={{ fontSize: "14px", color: "red", textAlign: "right"}}>Total DecentraCorp members: { this.state.memberCount } IdeaCoin Total Supply: { this.state.idcTotal }</p>
    </div>
  <nav class="Navbar__Items">
  <div class="Navbar__Link Navbar__Link-brand">
  <img src={DecentraCorpLogo} alt ="DecentraCorp Dapp" className="DecentraCorpLogo1" style={{ marginBottom: "-100px"}}/>
  <ul>
    <li key={1}><NavLink to='/'>Home</NavLink></li>
    <li key={2}><NavLink to='/About'>About</NavLink></li>
    <li key={3}><NavLink to='/RoadMap'>RoadMap</NavLink></li>
    <li key={4}><NavLink to='/ApprovedIdeas'>Approved Ideas</NavLink></li>
    <li key={5}><NavLink to='/Donate'>Donate</NavLink></li>
    <li key={6}><NavLink to='/JoinCore'>Join the Team</NavLink></li>
    <li key={7}><NavLink to='/IdeaBlockApplication'>IdeaBlock Application</NavLink></li>
    <li key={8}><NavLink to='/BuyMembership'>Become a Member!</NavLink></li>
    <li key={9}><NavLink to='/ChaosCasino'>ChaosCasino</NavLink></li>
  </ul>
  </div>
  </nav>
    </div>
];
} else {
return [

  <div class="Navbar">
  <br/>
  <div>
    <p style={{ fontSize: "14px", color: "red", textAlign: "right"}}>Total DecentraCorp members: { this.state.memberCount } IdeaCoin Total Supply: { this.state.idcTotal }</p>
    </div>
  <nav class="Navbar__Items">
  <div class="Navbar__Link Navbar__Link-brand">
<img src={DecentraCorpLogo} alt ="DecentraCorp Dapp" className="DecentraCorpLogo1" style={{ marginBottom: "-100px"}}/>
<ul>
  <li key={1}><NavLink to='/'>Home</NavLink></li>
  <li key={2}><NavLink to='/About'>About</NavLink></li>
  <li key={3}><NavLink to='/RoadMap'>RoadMap</NavLink></li>
  <li key={4}><NavLink to='/ApprovedIdeas'>Approved Ideas</NavLink></li>
  <li key={5}><NavLink to='/Donate'>Donate</NavLink></li>
  <li key={6}><NavLink to='/JoinCore'>Join the Team</NavLink></li>
  <li key={7}><NavLink to='/IdeaBlockApplication'>IdeaBlock Application</NavLink></li>
  <li key={8}><NavLink to='/ChaosCasino'>ChaosCasino</NavLink></li>
  <li key={9}><NavLink to='/IdeaVote'>IdeaBlock Vote</NavLink></li>
  <li key={10}><NavLink to='/MemDashBoard'>DashBoard</NavLink></li>
</ul>
</div>
</nav>
  </div>
];
}
}

navigationLinksMobile() {
  const {  isMember, accounts } = this.state;
    if(accounts === null){

  return [
    <div>
    <nav>
    <div>
    <ul>
      <li key={1}><NavLink to='/'><button onClick={this.closeOnClick.bind(this)}>Home</button></NavLink></li>
      <li key={2}><NavLink to='/About'><button onClick={this.closeOnClick.bind(this)}>About</button></NavLink></li>
      <li key={3}><NavLink to='/RoadMap'><button onClick={this.closeOnClick.bind(this)}>RoadMap</button></NavLink></li>
      <li key={4}><NavLink to='/Donate'><button onClick={this.closeOnClick.bind(this)}>Donate</button></NavLink></li>
      <li key={5}><NavLink to='/JoinCore'><button onClick={this.closeOnClick.bind(this)}>Join the Team</button></NavLink></li>
    </ul>
    </div>
    </nav>
    <div>
    </div>
    </div>
  ];
}
else if(!isMember){
return [
<div class="Navbar">
<br/>
<div>
  <p style={{ fontSize: "14px", color: "red", textAlign: "right"}}>Total DecentraCorp members: { this.state.memberCount } IdeaCoin Total Supply: { this.state.idcTotal }</p>
  </div>
<nav>
<div>
<ul>
  <li key={1}><NavLink to='/'><button onClick={this.closeOnClick.bind(this)}>Home</button></NavLink></li>
  <li key={2}><NavLink to='/About'><button onClick={this.closeOnClick.bind(this)}>About</button></NavLink></li>
  <li key={3}><NavLink to='/RoadMap'><button onClick={this.closeOnClick.bind(this)}>RoadMap</button></NavLink></li>
  <li key={4}><NavLink to='/ApprovedIdeas'><button onClick={this.closeOnClick.bind(this)}>Approved Ideas</button></NavLink></li>
  <li key={5}><NavLink to='/Donate'><button onClick={this.closeOnClick.bind(this)}>Donate</button></NavLink></li>
  <li key={6}><NavLink to='/JoinCore'><button onClick={this.closeOnClick.bind(this)}>Join the Team</button></NavLink></li>
  <li key={7}><NavLink to='/IdeaBlockApplication'><button onClick={this.closeOnClick.bind(this)}>IdeaBlock Application</button></NavLink></li>
  <li key={8}><NavLink to='/BuyMembership'><button onClick={this.closeOnClick.bind(this)}>Become a Member!</button></NavLink></li>
  <li key={9}><NavLink to='/ChaosCasino'><button onClick={this.closeOnClick.bind(this)}>ChaosCasino</button></NavLink></li>
</ul>
</div>
</nav>
  </div>
];
} else {
return [

<div class="Navbar">
<br/>
<div>
  <p style={{ fontSize: "14px", color: "red", textAlign: "right"}}>Total DecentraCorp members: { this.state.memberCount } IdeaCoin Total Supply: { this.state.idcTotal }</p>
  </div>
<nav>
<div>
<ul>
<li key={1}><NavLink to='/'><button onClick={this.closeOnClick.bind(this)}>Home</button></NavLink></li>
<li key={2}><NavLink to='/About'><button onClick={this.closeOnClick.bind(this)}>About</button></NavLink></li>
<li key={3}><NavLink to='/RoadMap'><button onClick={this.closeOnClick.bind(this)}>RoadMap</button></NavLink></li>
<li key={4}><NavLink to='/ApprovedIdeas'><button onClick={this.closeOnClick.bind(this)}>Approved Ideas</button></NavLink></li>
<li key={5}><NavLink to='/Donate'><button onClick={this.closeOnClick.bind(this)}>Donate</button></NavLink></li>
<li key={6}><NavLink to='/JoinCore'><button onClick={this.closeOnClick.bind(this)}>Join the Team</button></NavLink></li>
<li key={7}><NavLink to='/IdeaBlockApplication'><button onClick={this.closeOnClick.bind(this)}>IdeaBlock Application</button></NavLink></li>
<li key={8}><NavLink to='/ChaosCasino'><button onClick={this.closeOnClick.bind(this)}>ChaosCasino</button></NavLink></li>
<li key={9}><NavLink to='/IdeaVote'><button onClick={this.closeOnClick.bind(this)}>IdeaBlock Vote</button></NavLink></li>
<li key={10}><NavLink to='/MemDashBoard'><button onClick={this.closeOnClick.bind(this)}>DashBoard</button></NavLink></li>
</ul>
</div>
</nav>
</div>
];
}
}


  renderMobileNav() {
    if(this.state.mobileNavVisible) {
      return this.navigationLinksMobile();
    }
  }

  handleNavClick() {
    if(!this.state.mobileNavVisible) {
      this.setState({mobileNavVisible: true});
    } else {
      this.setState({mobileNavVisible: false});
    }
  }

  closeOnClick() {
    this.setState({mobileNavVisible: false});
  }

  renderNavigation() {
    if(this.state.windowWidth <= 720) {
      return [
        <div className="mobile_nav">
          <p onClick={this.handleNavClick.bind(this)}><i className="menu">  <div>
             MENU
            </div></i></p>
            <div>
            <br/>
            </div>
          {this.renderMobileNav()}
        </div>
      ];
    } else {
      return [
        <div key={7} className="nav_menu">
        <nav>
          {this.navigationLinks()}
          </nav>
        </div>
      ];
    }
  }


  render() {
    if(this.state.loading === true){
      return(
        <div className="Loader">
        <img src={Loader} alt ="Loader" className="Loader" />
        </div>
      );
    } else {
    return (
      <div className="app">
      <div>
        {this.renderNavigation()}
      </div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/MemDashBoard' component={MemDashBoard}></Route>
          <Route exact path='/IdeaBlockApplication' component={IdeaBlockApplication}></Route>
          <Route exact path='/IdeaVote' component={IdeaVote}></Route>
          <Route exact path='/ChaosCasino' component={ChaosCasino}></Route>
          <Route exact path='/Entropy21' component={Entropy21}></Route>
          <Route exact path='/About' component={About}></Route>
          <Route exact path='/RoadMap' component={RoadMap}></Route>
          <Route exact path='/ApprovedIdeas' component={ApprovedIdeas}></Route>
          <Route exact path='/Donate' component={Donate}></Route>
          <Route exact path='/JoinCore' component={JoinCore}></Route>
          <Route exact path='/BuyMembership' component={BuyMembership}></Route>
      </Switch>
      </div>
      );
    }
  }
}





export default App;
