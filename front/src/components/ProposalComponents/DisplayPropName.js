
 import React, { Component } from 'react';
 import ipfs from '../../utils/IPFS_util';



 class DisplayPropName extends Component {
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
    console.log(this.state.Json )
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
<div>
<form >
   <label htmlFor="ProposalName">Proposal Name: { Json.ProposalName } </label>
   <br/>

</form>
       </div>
     );
   }
   }
 }

     export default DisplayPropName;
