import React, { Component } from 'react';
import './App.css';
import web3 from './utils/web3';
import _DecentraCorp from './ethereum/DecentraCorp';
import NavBar from './components/NavComponents/NavBar';
import Footer from './components/NavComponents/Footer';
import Loader from "./images/75.gif";


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isMember: false,
      accounts: null,
      memberCount: '',
      idcTotal: null,
      loading: false
     }
  }



  async componentDidMount() {

      this.setState({ loading: true });
      if (typeof window === 'undefined' || typeof window.web3 === 'undefined') {
        alert('YOU ARE NOT CONNECTED TO WEB3! MOST FEATURES ON THIS WEBSITE REQUIRE WEB3 AND HAVE BEEN DISABLED! SEE Become a Member for more information ', null, null);

        this.setState({ loading: false });
      }
      const accounts = await web3.eth.getAccounts();
      const userAccount = accounts[0];

      if(userAccount === undefined){
        alert(' MOST FEATURES ON THIS WEBSITE REQUIRE YOUR ACCOUNT TO BE UNLOCKED AND HAVE THERE FOR BEEN DISABLED! UNLOCK YOUR WALLET TO RE-ENABLE THEM!', null, null);

      }


     this.updateInterface();
      this.setState({ loading: false });
  }



updateInterface = async() => {
  const accounts = await web3.eth.getAccounts();
  const userAccount = accounts[0];
  if(userAccount !== undefined){
  const isMember = await _DecentraCorp.methods._checkIfMember(userAccount).call();
  const memberCount = await _DecentraCorp.methods.getMemberCount().call();
  const total = await _DecentraCorp.methods.totalSupply().call();
  const idcTotal = web3.utils.fromWei(total);
  this.setState({ accounts, isMember, memberCount, idcTotal, loading: false });
}

}



  render() {
const { isMember, accounts, memberCount, idcTotal} = this.state;
if(this.state.loading === true){
  return(
    <div className="Loader">
    <img src={Loader} alt ="Loader" className="Loader" />
    </div>
  );
} else {
    return (
      <div>
        <NavBar isMember={isMember} accounts={accounts} memberCount={memberCount} idcTotal={idcTotal}/>
      <div className="app">
      <div>
        <hr style={{ height: '20px' , width: 'auto', background: 'black'}}/>
        <Footer />
      </div>
    </div>
      </div>
      );
    }
  }
}






export default App;
