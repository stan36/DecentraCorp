
 import React, { Component } from 'react';
 import ipfs from '../utils/IPFS_util';



 class DisplayIPFS extends Component {
   constructor(props){
     super(props);

this.state={
  Json: {}
}

this.onload = this.onload.bind(this);
}


onload = async ()=>{

    const { ipfsHash }= this.props;
    const Json =JSON.parse(await ipfs.cat(ipfsHash));
    console.log(Json);
    this.setState({ Json })

  };

   render() {
     const { ipfsHash }= this.props;
     const { Json }= this.state;
     if(!ipfsHash){
     return(
      ''
     );
   } else {
     this.onload();
     return(
       <div className='DisplayIPFS'>
<form >
  <label htmlFor="ideaHash">Idea Hash: { ipfsHash } </label>
  <br/>
   <label htmlFor="ideaName">Idea Name: { Json.ideaName } </label>
   <br/>
   <label htmlFor="applicantName">Inventors Name: { Json.username } </label>
   <br/>
   <label htmlFor="useblockamount">UseBlock Amount: { Json.useblockamount } </label>
   <br/>
   <label htmlFor="miningTime">Mining Time: { Json.miningTime } </label>
   <br/>
   <label htmlFor="royalty">Inventors Royalty Amount: { Json.royalty } </label>
   <br/>
   <label htmlFor="detailsdetails">Idea Details: </label>
   <br/>
   { Json.details }
</form>
       </div>
     );
   }
   }
 }

     export default DisplayIPFS;
