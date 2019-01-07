
 import React, { Component } from 'react';
 import ipfs from '../../utils/IPFS_util';



 class DisplayItemName extends Component {
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
    this.setState({ Json });
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
         <img src={"https://ipfs.io/ipfs/" + Json.photo } alt ="No Image" className="ideaPhoto"/>
<form >
   <label htmlFor="itemName">Item Name: { Json.itemName } </label>
   <br/>
   <label htmlFor="itemPrice">Item Price: { Json.Price } ETH</label>
</form>
       </div>
     );
   }
   }
 }

     export default DisplayItemName;
