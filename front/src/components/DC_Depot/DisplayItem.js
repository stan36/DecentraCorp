
 import React, { Component } from 'react';
 import web3 from '../../utils/web3';
 import ipfs from '../../utils/IPFS_util';
import _DC_Depot from '../../ethereum/DC_Depot';


 class DisplayItem extends Component {
   constructor(props){
     super(props);

this.state={
  Json: {},
  userAccount: '',
  itemNumber: null,
  transactionHash: ''
}

this.onload = this.onload.bind(this);
this.onETHPurchase = this.onETHPurchase.bind(this);
this.onIDCPurchase = this.onIDCPurchase.bind(this);

}

async  componentDidMount(){
  const { ipfsHash }= this.props;
   const accounts = await web3.eth.getAccounts();
   const userAccount = accounts[0];
   this.setState({  userAccount});


 };


onload = async ()=>{
    const { ipfsHash }= this.props;
    const Json =JSON.parse(await ipfs.cat(ipfsHash));
    this.setState({ Json })
  };

  onETHPurchase = async (event)=>{
    event.preventDefault();
    console.log('Purchased in ETH');
    await _DC_Depot.methods.purchase(
      false,
      this.state.Json.Price,
      this.props.ipfsHash,
      this.state.Json.SellerAddress

    )
    .send({from : this.state.userAccount,
    value: web3.utils.toWei(String(this.state.Json.Price), 'ether')},
    (error, transactionHash) => {
    this.setState({transactionHash});
  });
}

onIDCPurchase = async (event)=>{
  event.preventDefault();
  console.log('Purchased in IDC');
  await _DC_Depot.methods.purchase(
    true,
    this.state.Json.Price,
    this.props.ipfsHash,
    this.state.Json.SellerAddress

  )
  .send({from : this.state.userAccount}, (error, transactionHash) => {
  this.setState({transactionHash });
});
}


   render() {
     const { ipfsHash }= this.props;
     const { Json  }= this.state;
     this.onload();
     return(
       <div className='container'>
         <h2>Item Number: {this.state.itemNumber}</h2>
          <img src={"https://ipfs.io/ipfs/" + Json.photo } alt ="No Image" className="ideaPhoto"/>
<form >
   <label htmlFor="ideaName">Item Name: { Json.itemName } </label>
   <br/>
   <label htmlFor="SellerAddress">Sellers Address: { Json.SellerAddress } </label>
   <br/>
   <label htmlFor="Price">Item Price: { Json.Price } </label>
   <br/>
   <button onClick={this.onETHPurchase}>Buy In Ether</button>
   <br/>
   <button onClick={this.onIDCPurchase}>Buy In IdeaCoin</button>
</form>
       </div>
     );

   }
   }


     export default DisplayItem;
