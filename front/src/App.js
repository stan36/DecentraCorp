import React, { Component } from 'react';
import './App.css';
import web3 from './utils/web3';
import _DecentraCorp from './ethereum/DecentraCorp';
import _IdeaCoin from './ethereum/IdeaCoin';
import NavBar from './components/NavComponents/NavBar';
import Footer from './components/NavComponents/Footer';



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
        alert('YOU ARE NOT CONNECTED TO WEB3! MOST FEATURES ON THIS WEBSITE REQUIRE WEB3 AND HAVE BEEN DISABLED! PLEASE INSTALL METAMASK FOR CHROME AND FIREFOX OR CIPHER ON MOBILE!', null, null);

        this.setState({ loading: false });
      }
      const accounts = await web3.eth.getAccounts();
      const userAccount = accounts[0];

      if(userAccount === undefined){
        alert('MOST FEATURES ON THIS WEBSITE REQUIRE YOUR ACCOUNT TO BE UNLOCKED AND HAVE THERE FOR BEEN DISABLED! UNLOCK YOUR WALLET TO RE-ENABLE THEM!', null, null);

      }

      if(userAccount !== undefined){

        const isMember = await _DecentraCorp.methods._checkIfMember(userAccount).call();
        const memberCount = await _DecentraCorp.methods.getMemberCount().call();
        const total = await _IdeaCoin.methods.totalSupply().call();
        const idcTotal = web3.utils.fromWei(total);
        this.setState({ accounts, isMember, memberCount, idcTotal, loading: false });


      }
      this.setState({ loading: false });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));

  }




  render() {
const { isMember, accounts, memberCount, idcTotal} = this.state;
    return (
      <div className="app">
    <NavBar isMember={isMember} accounts={accounts} memberCount={memberCount} idcTotal={idcTotal}/>
      <div>
<Footer />
</div>

      </div>
      );
    }
  }






export default App;
