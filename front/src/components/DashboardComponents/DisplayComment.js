
 import React, { Component } from 'react';
 import ipfs from '../../utils/IPFS_util';



 class DisplayComment extends Component {
   constructor(props){
     super(props);

this.state={
  Json: {}
}


}


onload = async ()=>{
    const { ipfsHash }= this.props;
    const Json =JSON.parse(await ipfs.cat(ipfsHash));
    this.setState({ Json });
  };

   render() {
     const { Json }= this.state;
     if(Json === {}){
     return(
      ''
     );
   } else {
     this.onload();
     return(
       <div className='DisplayIPFS'>
         <p>Commentors Address:</p>

   <label htmlFor="commentorsAddress">{ Json.ComAd } </label>
   <hr style={{ width:'auto' , color: 'gray' , backgroundColor: 'gray'}}/>
     <label htmlFor="Title">{ Json.Title } </label>
      <hr style={{ width:'auto' , color: 'gray', backgroundColor: 'gray'}}/>
   <label htmlFor="comment">{ Json.comment }</label>

       </div>
     );
   }
   }
 }

     export default DisplayComment;
