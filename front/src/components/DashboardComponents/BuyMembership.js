import React, { Component } from 'react';
import web3 from '../../utils/web3';
import ipfs from '../../utils/IPFS_util';
import _DecentraCorp from '../../ethereum/DecentraCorp';
import { Redirect } from 'react-router-dom';
import Loader from "../../images/75.gif";
import downloadMetamask from '../../images/download-metamask.png';

class BuyMembership extends Component {
  constructor(props){
    super(props);


    this.state = {
      userAccount: null,
      IsMember: false,
      loading: false,
      txHahs: null,
      toDashboard: false,
      ipfsHash: '',
      photoHash: '',
      message: "",
     }


  }

  async  componentDidMount(){
      this.setState({ loading : true });
      if (typeof window === 'undefined' || typeof window.web3 === 'undefined') {
        this.setState({ loading: false, userAccount: 'undefined'});
      }

      const accounts = await web3.eth.getAccounts();
      const userAccount = accounts[0];
      if(userAccount === undefined){
        this.setState({ loading: false, userAccount: 'undefined' });
      }else {


     this.setState({ userAccount, loading: false});
   }
}




 handleSubmit = async (event) => {
   event.preventDefault();
   this.setState({ loading : true });
   const formData = new FormData(event.target);
   let jsonObject = {
       photo: this.state.photoHash
   };

     for (const [key, value]  of formData.entries()) {
         jsonObject[key] = value;
         }
         console.log(jsonObject);

   var buf = Buffer.from(JSON.stringify(jsonObject));
   await ipfs.add(buf, (err, ipfsHash) => {
   this.setState({ ipfsHash: ipfsHash[0].hash});
  _DecentraCorp.methods.buyMembership(this.state.userAccount, this.state.userAccount, this.state.ipfsHash)
  .send({
    from : this.state.userAccount
  }, (error, transactionHash) => {
   this.setState({transactionHash});
   this.onReturn();
       });
     })
};

onReturn = async => {

_DecentraCorp.once( 'NewMember', {
  filter: {member: this.state.userAccount},
  fromBlock: '0',
  toBlock: 'latest',
}, (error, event) => {
  console.log(event);
  this.stateSetter();
})

}

stateSetter = async => {
  this.setState({  toDashboard: true });
}

fileSelectedHandler = async (event) => {
  event.preventDefault();
  const file = event.target.files[0];
  const reader = new window.FileReader();
  reader.readAsArrayBuffer(file);
  reader.onloadend = async () => {
    var buf = Buffer(reader.result);
    await ipfs.add(buf, (err, ipfsHash) => {
    this.setState({ photoHash: ipfsHash[0].hash, message: 'upload complete!' });
    console.log(this.state.photoHash);
  })
}
};

  render() {
    if(this.state.userAccount === 'undefined') {
      return(
        <div>
          <p>You are not connected to web3. If you would like to become a member of DecentraCorp Please INSTALL
          Metamask</p>
        <p>
          The final version of this dApp will have internal account management and will not depend on metamask.
          MetaMask is used to connect to a local parity node synced to DecentraCorp's Proof of Authority Network.
        </p>
              <button  type="button" class="button"><a style={{ textDecoration: 'none', color: "red"}} href='http://metamask.io'>
            Click Here to Install Metamask
          </a></button>
          <p>Running a local parity node is currently the ONLY way to connect to DecentraCorps PoA Network</p>
            <button  type="button" class="button"><a style={{ textDecoration: 'none', color: "red"}} href='https://github.com/DecentraCorp/DecentraCorpPoA'>
          Click Here for Instructions on setting up a PoA node
        </a></button>
      <p>Once you have metamask connected to a PoA node you can revisit this page and become a member.
        Memberships are currently free and come with a 10,000 mining of Notio. When this project goes live, Memberships
        Will be sold as a way for DecentraCorp to raise initial funding. All funds earned will be put under the control of
        The DecentraCorp Contract.
      </p>
        </div>
      );
    }
    if (this.state.toDashboard === true) {
     return <Redirect to='/Profile' />
   }else{
    if(this.state.loading === true){
      return(
        <div className="Loader">
          <h1>Please Wait While Your Purchase is processed by the Blockchain</h1>
        <img src={Loader} alt ="Loader" className="Loader" />
        <h3>You will be redirected to the Members Dashboard </h3>
        <h3>once you become a Member.</h3>
        <p>This process may take several minutes due to its nature. Your DecentraCorp Profile
        is built using two seperate file uploads to the InterPlanetary File System(IPFS). Once
      this upload is complete, the IPFS Hash that represents your profile is then stored to the Blockchain.
    </p>
        </div>
      );
    } else {
    return (
      <div>
        <h3>Welcome to the DecentraCorp Membership Portal!</h3>
        <p>You are Currently Connected To DecentraCorps Proof of Authority Network</p>
        <p>It is important to note that while a membership is necissary to use this dApp</p>
        <p>to its full capabilities, becoming a member now </p>
        <p style={{  color: "red"}}>DOES NOT</p>
        <p>Guaruntee anytype of membership when Decentracorp Goes Live!
          Once Your Profile is
         on the Blockchain, it
       </p>
       <p style={{ colour: 'red'}}>CANNOT</p>
       <p> be taken down by anyone but you!</p>
          <p>To get early (alpha)access membership to DecentraCorp</p>
          <br/>
          <p> which includes 10,000 Notio and a Staked Replication Account, fill out the form below:</p>
          <label htmlFor="details">Upload Profile Picture: </label>
          <input className='photo' id="photo" name="photo" type='file' onChange={this.fileSelectedHandler}/>
          <p>{ this.state.message }</p>
          <br/>
            <form onSubmit={this.handleSubmit}>
              <div className='outterC'>
              <div className='C1'>
                    <label htmlFor="username">Your  Name: </label>
         <br/>
         <input id="username" name="username" type="text" placeholder = 'Optional'/>
         <br/>
           <label htmlFor="Address">Facility Owners address: </label>
           <br/>
           <input id="Address" name="Address" type="text" placeholder = 'Address of the facility owner'/>
           <br/>
             <label htmlFor="FacilityName">Facility Name: </label>
             <br/>
             <input id="FacilityName" name="FacilityName" type="text" placeholder = 'The name of your Facility'/>
             <br/>
               <label htmlFor="PhysicalAddress">Facility Physical Address: </label>
               <br/>
               <input id="PhysicalAddress" name="PhysicalAddress" type="text" placeholder = 'Optional'/>
               <br/>
             </div>
             <br/>
             <div className='C2'>

                 <label htmlFor="FacilityEmail">Facility Email Address: </label>
                 <br/>
                 <input id="FacilityEmail" name="FacilityEmail" type="text" placeholder = 'Optional'/>
                 <br/>
                   <label htmlFor="About">Your About Section: </label>
                   <br/>
                   <input className='About' id="About" name="About" type="text" placeholder = 'Tell Us About Yourself'/>
                   <br/>
         <button>Become a Member!</button>
         </div>
         </div>
       </form>
     </div>
    );
  }
}
}
}
export default BuyMembership;
