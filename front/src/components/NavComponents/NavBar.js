import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

//Views:
import Home from '../../views/Home';
import DCDepot from '../../views/DCDepot';
import RoadMap from '../../views/RoadMap';
import ChaosCasino from '../../views/ChaosCasino';
import ApprovedIdeas from "../../views/ApprovedIdeas";
import IdeaBlockApplication from '../../views/IdeaBlockApplication';

//Chaos Components:
import Entropy21 from '../ChaosComponents/Entropy21';

//DashBoardComponents:
import Profile from '../DashboardComponents/Profile';
import IDC_Wallet from '../DashboardComponents/IDC_Wallet';
import UpdateProfile from '../DashboardComponents/UpdateProfile';
import Facility from '../DashboardComponents/Facility';
import BuyMembership from '../DashboardComponents/BuyMembership'
import IdeaVote from '../DashboardComponents/IdeaVote';
import CreateFreezeProp from '../DashboardComponents/CreateFreezeProp';
import CreateFundingProp from '../DashboardComponents/CreateFundingProp';
import CreateTerminateProp from '../DashboardComponents/CreateTerminateProp';
import ProposalVote from '../DashboardComponents/ProposalVote';




//DC_Depot Components:
import Sell_Item from '../DC_Depot/Sell_Item';
import ItemList from '../DC_Depot/ItemList';

//InfoComponents:
import Donate from '../InfoComponents/Donate';
import JoinCore from '../InfoComponents/JoinCore';
import Intro from '../InfoComponents/Intro.js';
import WhatIsDAC from '../InfoComponents/WhatIsDAC.js';
import Members from '../InfoComponents/Members.js';
import DFM from '../InfoComponents/DFM.js';
import DC_ContractStructure from '../InfoComponents/DC_ContractStructure.js';
import CPBlockchain from '../InfoComponents/CPBlockchain.js';
import CPBStructure from '../InfoComponents/CPBStructure.js';
import IdeaCoin from '../InfoComponents/IdeaCoin.js';
import EPMS from '../InfoComponents/EPMS.js';
import DCPoA from '../InfoComponents/DCPoA.js';
import ChaosCasinoInfo from '../InfoComponents/ChaosCasinoInfo.js';
import DC_DepotInfo from '../InfoComponents/DC_DepotInfo.js';
import ExternalResources from '../InfoComponents/ExternalResources.js';

//Search Components:
import ProfilSearch from '../IPFS_Search/ProfileSearch';

//images and css:
import './NavBar.css';
import DecentraCorpLogo from "../../images/DecentraCorpLogo.png";
import Loader from "../../images/75.gif";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      mobileNavVisible: false,
      loading: false
     }
  }


  navigationLinks() {
    const {  isMember, accounts, memberCount, idcTotal } = this.props;
      if(accounts === null){
    return [
      <div class="Navbar">
      <nav class="Navbar__Items">
      <div class="Navbar__Link Navbar__Link-brand">
      <img src={DecentraCorpLogo} alt ="DecentraCorp Dapp" className="DecentraCorpLogo1" style={{ marginBottom: "-100px"}}/>
      <ul>
      <li key={1}><NavLink to='/'>Home</NavLink></li>
      <li key={2}><NavLink to='/Intro'>About</NavLink></li>
      <li key={2}><NavLink to='/BuyMembership'>Become a Member!</NavLink></li>
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
    <p style={{ fontSize: "14px", color: "red", textAlign: "right"}}>Total DecentraCorp members: { memberCount } IdeaCoin Total Supply: { idcTotal }</p>
    </div>
  <nav class="Navbar__Items">
  <div class="Navbar__Link Navbar__Link-brand">
  <img src={DecentraCorpLogo} alt ="DecentraCorp Dapp" className="DecentraCorpLogo1" style={{ marginBottom: "-100px"}}/>
  <ul>
    <li key={1}><NavLink to='/'>Home</NavLink></li>
    <li key={2}><NavLink to='/Intro'>About</NavLink></li>
    <li key={3}><NavLink to='/ApprovedIdeas'>The CryptoPatent Blockchain</NavLink></li>
    <li key={4}><NavLink to='/ChaosCasino'>ChaosCasino</NavLink></li>
    <li key={5}><NavLink to='/DCDepot'>DC Depot</NavLink></li>
    <li key={6}><NavLink to='/ProfilSearch'>DecentraSearch</NavLink></li>
    <li key={7}><NavLink to='/BuyMembership'>Become a Member!</NavLink></li>
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
    <p style={{ fontSize: "14px", color: "red", textAlign: "right"}}>Total DecentraCorp members: { memberCount } IdeaCoin Total Supply: { idcTotal }</p>
    </div>
  <nav class="Navbar__Items">
  <div class="Navbar__Link Navbar__Link-brand">
<img src={DecentraCorpLogo} alt ="DecentraCorp Dapp" className="DecentraCorpLogo1" style={{ marginBottom: "-100px"}}/>
<ul>
  <li key={1}><NavLink to='/'>Home</NavLink></li>
  <li key={2}><NavLink to='/Intro'>About</NavLink></li>
  <li key={3}><NavLink to='/ApprovedIdeas'>The CryptoPatent Blockchain</NavLink></li>
  <li key={4}><NavLink to='/ChaosCasino'>ChaosCasino</NavLink></li>
  <li key={5}><NavLink to='/DCDepot'>DC Depot</NavLink></li>
  <li key={6}><NavLink to='/ProfilSearch'>DecentraSearch</NavLink></li>
  <li key={7}><NavLink to='/Profile'>DashBoard</NavLink></li>
</ul>
</div>
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
        {this.navigationLinks()}
      </div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Profile' component={Profile}></Route>
          <Route exact path='/IdeaBlockApplication' component={IdeaBlockApplication}></Route>
          <Route exact path='/IdeaVote' component={IdeaVote}></Route>
          <Route exact path='/DCDepot' component={DCDepot}></Route>
          <Route exact path='/ChaosCasino' component={ChaosCasino}></Route>
          <Route exact path='/Entropy21' component={Entropy21}></Route>
          <Route exact path='/RoadMap' component={RoadMap}></Route>
          <Route exact path='/ApprovedIdeas' component={ApprovedIdeas}></Route>
          <Route exact path='/Donate' component={Donate}></Route>
          <Route exact path='/JoinCore' component={JoinCore}></Route>
          <Route exact path='/BuyMembership' component={BuyMembership}></Route>
          <Route exact path='/Intro' component={Intro}></Route>
          <Route exact path='/WhatIsDAC' component={WhatIsDAC}></Route>
          <Route exact path='/Members' component={Members}></Route>
          <Route exact path='/DFM' component={DFM}></Route>
          <Route exact path='/DC_ContractStructure' component={DC_ContractStructure}></Route>
          <Route exact path='/CPBlockchain' component={CPBlockchain}></Route>
          <Route exact path='/CPBStructure' component={CPBStructure}></Route>
          <Route exact path='/IdeaCoin' component={IdeaCoin}></Route>
          <Route exact path='/EPMS' component={EPMS}></Route>
          <Route exact path='/DCPoA' component={DCPoA}></Route>
          <Route exact path='/IDC_Wallet' component={IDC_Wallet}></Route>
          <Route exact path='/UpdateProfile' component={UpdateProfile}></Route>
          <Route exact path='/ChaosCasinoInfo' component={ChaosCasinoInfo}></Route>
          <Route exact path='/DC_DepotInfo' component={DC_DepotInfo}></Route>
          <Route exact path='/ExternalResources' component={ExternalResources}></Route>
          <Route exact path='/Sell_Item' component={Sell_Item}></Route>
          <Route exact path='/ItemList' component={ItemList}></Route>
          <Route exact path='/Facility' component={Facility}></Route>
          <Route exact path='/CreateFreezeProp' component={CreateFreezeProp}></Route>
          <Route exact path='/CreateFundingProp' component={CreateFundingProp}></Route>
          <Route exact path='/CreateTerminateProp' component={CreateTerminateProp}></Route>
          <Route exact path='/ProposalVote' component={ProposalVote}></Route>
          <Route exact path='/ProfilSearch' component={ProfilSearch}></Route>
    </Switch>
      </div>
      );
    }
  }
}





export default App;
