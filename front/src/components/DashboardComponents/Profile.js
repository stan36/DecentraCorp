import React, { Component } from 'react';
import web3 from '../../utils/web3';
import ipfs from '../../utils/IPFS_util';
import _DecentraCorp from '../../ethereum/DecentraCorp';
import PostComments from './PostComments';
import DisplayComments from './DisplayComments';

class Profile extends Component {

  constructor(props){
    super(props);

    this.state = {
       userAccount:'',
       chaosBalance: '',
       userLevel: null,
       Json: {},
       profileHash: "",
       hashArray: []
     }


  }

  async  componentDidMount(){
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
     const userAccount = accounts[0];
     const userLevel =  await _DecentraCorp.methods.getLevel(userAccount).call();
     const profileHash = await  _DecentraCorp.methods.getProfileHash(userAccount).call();
     const currentCommentHash = await  _DecentraCorp.methods.getComment(userAccount).call();
     console.log('the hash is: '+ currentCommentHash );
     if(currentCommentHash !== '') {
     const hashArray = JSON.parse(await ipfs.cat(currentCommentHash));
     console.log(hashArray + ' componentDidMount');
     this.setState({ hashArray });
   }
     const Json =JSON.parse(await ipfs.cat(profileHash));
     this.setState({ userAccount,  userLevel,  profileHash, Json});
   }


  render() {
    const { Json, profileHash, userLevel,  hashArray, userAccount } =this.state;
    return (
      <div>
        <div>
        <div className="memberPhoto">
          <img src={"https://ipfs.io/ipfs/" + Json.photo } alt ="No Image" />
          <div className='Profile'>
          <h3>{Json.username}</h3>
          <p>Membership Level: {userLevel}</p>
              <br/>
              <hr/>
              <p>Facility: { Json.FacilityName }</p>
              <hr/>
              <p>{ Json.PhysicalAddress }</p>
              <p>Contact Email: { Json.FacilityEmail}</p>
              </div>
          </div>
          <div>
            <h3>Profile Information</h3>
            <hr style={{ width: "auto"}}/>
            <p>{Json.About}</p>
              <hr style={{ width: "auto"}}/>
          <p>Your Facility Account Address is: </p>
          <p>{Json.Address}</p>
          <hr style={{ width: "auto"}}/>
          <p>Your Profile Hash is:</p>
          <p>{profileHash}</p>
          <hr style={{ width: "auto"}}/>
          <DisplayComments hashArray={hashArray}/>
          <PostComments hashArray={hashArray} Json={Json} userAccount={userAccount}/>
          </div>
        </div>
</div>
    );
  }
}

export default Profile;
