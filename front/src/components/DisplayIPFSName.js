
 import React, { Component } from 'react';
 import ipfs from '../utils/IPFS_util';



 class DisplayIPFSName extends Component {
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
   <label htmlFor="ideaName">Idea Name: { Json.ideaName } </label>
   <br/>

</form>
       </div>
     );
   }
   }
 }

     export default DisplayIPFSName;
