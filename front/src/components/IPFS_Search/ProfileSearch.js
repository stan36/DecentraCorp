import React, { Component } from 'react';
import web3 from '../../utils/web3';
import ipfs from '../../utils/IPFS_util';
import _DecentraCorp from '../../ethereum/DecentraCorp';
import PostComments from '../DashboardComponents/PostComments';


class ProfilSearch extends Component {

  constructor(props){
    super(props);

    this.state = {
       userAccount:'',
       chaosBalance: '',
       userLevel: null,
       facilityRank: null,
       Json: {},
       profileHash: "",
       loading:false,
       Searched: false,
       Account:null,
       hashArray: []
     }


  }

async componentDidMount(){
  this.setState({loading:true});
  const accounts = await web3.eth.getAccounts();
  const Account = accounts[0];
  this.setState({ Account, loading: false})
}
  getProfile = async (event) => {
        event.preventDefault();

    const {userAccount} = this.state;
     const userLevel =  await _DecentraCorp.methods.getLevel(userAccount).call();
     const facilityRank = await _DecentraCorp.methods.getRank(userAccount).call();
     const profileHash = await  _DecentraCorp.methods.getProfileHash(userAccount).call();
     const currentCommentHash = await  _DecentraCorp.methods.getComment(userAccount).call();
     if(currentCommentHash !== '') {
     const hashArray = JSON.parse(await ipfs.cat(currentCommentHash));
     console.log(hashArray);
     this.setState({ hashArray });
   }
     const Json =JSON.parse(await ipfs.cat(profileHash));
     this.setState({ userAccount,  userLevel, facilityRank, profileHash, Json});
     this.setState({Searched: true, loading:false})
   }

   handleChange = (event) => {
     this.setState( {userAccount: event.target.value} );
     console.log(event.target.value);
   }

  render() {
    const { Json, profileHash, userLevel, facilityRank,  Searched,Account, hashArray} =this.state;
    if(Searched === false) {
      return(
        <div>
        <p>Your Wallet Address:</p>
        <p style={{ fontSize: '12px'}}> {Account}</p>
<input className='userAccount'id="userAccount" name="userAccount" type="text" placeholder = 'Search a Facility by address' onChange={event => this.handleChange(event)}/>
<button onClick={event => this.getProfile(event)}>Search</button>
<p>
  This Feature allows you to look up a DecentraCorp Members Profile page by their account address.
  This Page will eventually feature a "featured Facilities" section in which members with appropriate facility ratings will be able to
  purchase a spot on the list with IdeaCoin to promote their facility. This search feature is also planned to be tightly integrated into the DC Depot as it will allow
  buyers to select an appropriately ranked facility near them to process their purchase.
</p>
<br/>
<p>
If you would like to try this feature out and see an example of a Membership page, you can view my DecentraCorp Profile at:
</p>
<br/>
<p style={{ fontSize: '12px'}}>0x65305Cf8B2334C95F3650772Aa54c77d6AD2157F</p>
        </div>
      );
    }else{
    return (
      <div>      <div>
            <p>Your Wallet Address: {Account}</p>
    <input className='userAccount'id="userAccount" name="userAccount" type="text" placeholder = 'Search a Facility by address' onChange={event => this.handleChange(event)}/>
    <button onClick={event => this.getProfile(event)}>Search</button>
            </div>
            <div className='MemDash'>
              <div className='ProfileInfo'>
              <div>
                <img src={"https://ipfs.io/ipfs/" + Json.photo } alt ="No Image" className="memberPhoto"/>
                </div>
                <hr/>
                <h3>{Json.username}</h3>
                <p>Membership Level: {userLevel}</p>
                </div>
                <div className='Profile'>
                    <br/>
                    <h3>Facility Information</h3>
                    <hr/>
                    <p>Facility: { Json.FacilityName }</p>
                    <p>Facility Level: {facilityRank}</p>
                    <hr/>
                    <p>{ Json.PhysicalAddress }</p>
                    <p>Contact Email: { Json.FacilityEmail}</p>

                </div>
                <div>
                  <h3>Profile Information</h3>
                  <hr style={{ width: "auto"}}/>
                  <p>{Json.About}</p>
                    <hr style={{ width: "auto"}}/>
                <p>Facility Account Address: </p>
                <p>{Json.Address}</p>
                <hr style={{ width: "auto"}}/>
                <p>Profile Hash:</p>
                <p>{profileHash}</p>
                  <hr style={{ width: "auto"}}/>
                  <PostComments hashArray={hashArray} Json={Json} userAccount={Account}/>
                </div>
              </div>
      </div>
    );
  }
  }
}

export default ProfilSearch;
