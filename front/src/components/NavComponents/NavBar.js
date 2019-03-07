import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';


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
import Info from '../InfoComponents/Info.js';
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
container = React.createRef();
container2 = React.createRef();
  constructor(props){
    super(props);

    this.state = {
       open: false,
       open2: false,
      loading: false
     }

  }

  componentDidMount() {
     document.addEventListener("mousedown", this.handleClickOutside);
   }
   componentWillUnmount() {
     document.removeEventListener("mousedown", this.handleClickOutside);
   }
   handleClickOutside = event => {
     if (this.container.current && !this.container.current.contains(event.target)) {
       this.setState({
         open: false,
       });
     }
   };
   handleButtonClick = () => {
     this.setState(state => {
       return {
         open: !state.open,
       };
     });
   };

   handleClickOutside2 = event => {
     if (this.container2.current && !this.container2.current.contains(event.target)) {
       this.setState({
         open2: false,
       });
     }
   };
   handleButtonClick2 = () => {
     this.setState(state => {
       return {
         open2: !state.open2,
       };
     });
   };

  navigationLinks() {
    const {  isMember, accounts, memberCount, idcTotal } = this.props;
      if(accounts === null){
    return [
      <div class="Navbar">
      <nav class="Navbar__Items">
      <div class="Navbar__Link Navbar__Link-brand">
        <div className="container" ref={this.container}>
        <button type="button" class="button" onClick={this.handleButtonClick}>
                ☰ DecentraCorp
                </button>
                {this.state.open && (
                  <div class="container">
      <ul>
      <li key={1}><NavLink onClick={this.handleButtonClick} to='/'>Home</NavLink></li>
      <li key={2}><NavLink onClick={this.handleButtonClick} to='/Info'>About</NavLink></li>
      <li key={2}><NavLink onClick={this.handleButtonClick} to='/BuyMembership'>Become a Member!</NavLink></li>
      </ul>
      </div>
    )}
    </div>
  </div>
      </nav>
      </div>
    ];
  }
  else if(!isMember){
return [
  <div>
  <nav class="Navbar">
    <div className="container" ref={this.container}>
    <button type="button" class="button" onClick={this.handleButtonClick}>
            ☰ DecentraCorp
            </button>
            {this.state.open && (
              <div class="container">
                  <ul>
    <li key={1}><NavLink onClick={this.handleButtonClick} to='/'>Home</NavLink></li>
    <li key={2}><NavLink onClick={this.handleButtonClick} to='/Info'>About</NavLink></li>
    <li key={3}><NavLink onClick={this.handleButtonClick} to='/ApprovedIdeas'>The CryptoPatent Blockchain</NavLink></li>
    <li key={4}><NavLink onClick={this.handleButtonClick} to='/ChaosCasino'>ChaosCasino</NavLink></li>
    <li key={5}><NavLink onClick={this.handleButtonClick} to='/DCDepot'>DC Depot</NavLink></li>
    <li key={6}><NavLink onClick={this.handleButtonClick} to='/ProfilSearch'>DecentraSearch</NavLink></li>
    <li key={7}><NavLink onClick={this.handleButtonClick} to='/BuyMembership'>Become a Member!</NavLink></li>
  </ul>
  </div>
)}
</div>
  </nav>
  <div>
    <p style={{ fontSize: "14px", color: "red", textAlign: "right"}}>Total DecentraCorp members: { memberCount } IdeaCoin Total Supply: { idcTotal }</p>
    </div>
    </div>
];
} else {
return [

  <div>
  <nav class="Navbar">
     <div className="container" ref={this.container}>
    <button type="button" class="button" onClick={this.handleButtonClick}>
             ☰ DecentraCorp
             </button>
             {this.state.open && (
               <div class="container">
<ul>
  <li key={1}><NavLink onClick={this.handleButtonClick} to='/'>Home</NavLink></li>
  <li key={2}><NavLink onClick={this.handleButtonClick} to='/Info'>About</NavLink></li>
  <li key={3}><NavLink onClick={this.handleButtonClick} to='/ApprovedIdeas'>The CryptoPatent Blockchain</NavLink></li>
  <li key={4}><NavLink onClick={this.handleButtonClick} to='/ChaosCasino'>ChaosCasino</NavLink></li>
  <li key={5}><NavLink onClick={this.handleButtonClick} to='/DCDepot'>DC Depot</NavLink></li>
  <li key={6}><NavLink onClick={this.handleButtonClick} to='/ProfilSearch'>DecentraSearch</NavLink></li>
  <li key={7}><NavLink onClick={this.handleButtonClick} to='/Profile'>DashBoard</NavLink></li>
</ul>
</div>
)}
</div>
<div className="container2" ref={this.container2}>
<button type="button" class="button" onClick={this.handleButtonClick2}>
        <AccountCircle/>
        </button>
        {this.state.open2 && (
          <div class="container2">
<ul>
<li key={1}><NavLink onClick={this.handleButtonClick2} to='/Profile'>Your Profile</NavLink></li>
<li key={2}><NavLink onClick={this.handleButtonClick2} to='/IDC_Wallet'>IdeaCoin Wallet</NavLink></li>
<li key={3}><NavLink onClick={this.handleButtonClick2} to='/UpdateProfile'>Update Profile</NavLink></li>
<li key={4}><NavLink onClick={this.handleButtonClick2} to='/IdeaVote'>IdeaBlock Voting Booth</NavLink></li>
<li key={5}><NavLink onClick={this.handleButtonClick2} to='/ProposalVote'>Proposal Voting Booth</NavLink></li>
<li key={6}><NavLink onClick={this.handleButtonClick2} to='/CreateFundingProp'>Create a Proposal for Funding</NavLink></li>
<li key={7}><NavLink onClick={this.handleButtonClick2} to='/CreateFreezeProp'>Create a Proposal to Investigate a Member for Fraud</NavLink></li>
<li key={8}><NavLink onClick={this.handleButtonClick2} to='/CreateTerminateProp'>Create a Proposal to have a Member Terminated</NavLink></li>
<li key={9}><NavLink onClick={this.handleButtonClick2} to='/Facility'>Facility Upgrades</NavLink></li>
<li key={10}><NavLink onClick={this.handleButtonClick2} to='/ProfilSearch'>Member Profile Search</NavLink></li>
</ul>
</div>
)}
</div>
</nav>
<div>
  <p style={{ fontSize: "14px", color: "red", textAlign: "right"}}>Total DecentraCorp members: { memberCount } IdeaCoin Total Supply: { idcTotal }</p>
  </div>
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
          <Route exact path='/Info' component={Info}></Route>
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
