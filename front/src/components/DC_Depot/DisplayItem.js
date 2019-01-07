
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
  transactionHash: '',
  hashArray: [],
  currentForSalehash: '',
  IDCDiscountPrice: 0,
  Discount: 0,
  IDCPrice: 0

}

this.onload = this.onload.bind(this);
this.onETHPurchase = this.onETHPurchase.bind(this);
this.onIDCPurchase = this.onIDCPurchase.bind(this);


}

async  componentDidMount(){
   const accounts = await web3.eth.getAccounts();
   const userAccount = accounts[0];
   const currentForSalehash = await _DC_Depot.methods.getForSale().call();
   console.log(currentForSalehash);
   if(currentForSalehash !== '') {
   const hashArray = JSON.parse(await ipfs.cat(currentForSalehash));
   console.log(hashArray);
   this.setState({ hashArray });
 }
   this.setState({  userAccount, currentForSalehash });


 };


onload = async ()=>{
    const { ipfsHash }= this.props;
    const Json =JSON.parse(await ipfs.cat(ipfsHash));
    const price = Json.Price;
    const IDCPrice = parseInt(price) *100;
    const Discount = IDCPrice / 10;
    const  IDCDiscountPrice = IDCPrice - Discount;

    this.setState({ Json, IDCDiscountPrice, Discount, IDCPrice })
  };




  onETHPurchase = async (event)=>{
    event.preventDefault();
      console.log('Purchased in ETH');
    var array = this.state.hashArray;
    console.log(array);
    const newArray = array.filter(item => item !== this.props.ipfsHash);
    console.log('new array:' + newArray);
     var buf = Buffer.from(JSON.stringify(newArray));
      await ipfs.add(buf, (err, ipfsHash) => {
        console.log('new hash for the new array: ' + ipfsHash[0].hash);
    var price = this.state.Json.Price;
        price = parseInt(price) + .001;
        console.log(price);
      _DC_Depot.methods.purchase(
      false,
      this.state.Json.Price,
      0,
      ipfsHash[0].hash,
      this.state.Json.SellerAddress,
      '0x24ac15eF29fC2c39F6d5A7EEc3D6e7F142E6a946',
      this.props.ipfsHash

    )
    .send({
    from : this.state.userAccount,
    value: web3.utils.toWei(String(price), 'ether')}, (error, transactionHash) => {
    this.setState({transactionHash });
    this.setState({ currentForSalehash: ipfsHash[0].hash  });
  });
  },(error, transactionHash) => {
   this.setState({transactionHash});

       });
}



onIDCPurchase = async (event)=>{
  event.preventDefault();
  console.log('Purchased in IDC');
var array = this.state.hashArray;
console.log('the array loaded from state:' + array);
const newArray = array.filter(item => item !== this.props.ipfsHash);
console.log('new array:' + newArray);
 var buf = Buffer.from(JSON.stringify(newArray));
  await ipfs.add(buf, (err, ipfsHash) => {
    console.log('new hash for the new array: ' + ipfsHash[0].hash);
   _DC_Depot.methods.purchase(
    true,
    web3.utils.toWei(String(this.state.IDCPrice)),
    web3.utils.toWei(String(this.state.Discount)),
    ipfsHash[0].hash,
    this.state.Json.SellerAddress,
    '0x24ac15eF29fC2c39F6d5A7EEc3D6e7F142E6a946',
    this.props.ipfsHash
  )
  .send({from : this.state.userAccount}, (error, transactionHash) => {
    this.setState({transactionHash });
    this.setState({ currentForSalehash: ipfsHash[0].hash  });
  });
  },(error, transactionHash) => {
   this.setState({transactionHash});

       });
}


   render() {
     const { ipfsHash }= this.props;
     const { Json, IDCDiscountPrice , IDCPrice }= this.state;
     this.onload();
     return(
       <div className='container'>
         <h2>Current Item Array: {this.state.currentForSalehash}</h2>
          <img src={"https://ipfs.io/ipfs/" + Json.photo } alt ="No Image" className="ideaPhoto"/>
<form >
   <label htmlFor="ideaName">Item Name: { Json.itemName } </label>
   <br/>
   <label htmlFor="SellerAddress">Sellers Address: { Json.SellerAddress } </label>
   <br/>
   <label htmlFor="Price">Item Price: { Json.Price } ETH </label>
   <br/>
  <label htmlFor="IDCPrice">Item Price in IdeaCoin: { IDCDiscountPrice } IDC </label>
    <br/>
   <label htmlFor="IPFS">Item IPFS Hash: { ipfsHash } </label>
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
