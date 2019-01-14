import React, { Component } from 'react';
import web3 from '../../utils/web3';
import ipfs from '../../utils/IPFS_util';
import _DC_Depot from '../../ethereum/DC_Depot';
import { Redirect } from 'react-router-dom';
import Loader from "../../images/75.gif";
import DepotNav from './DepotNav';
class Sell_Item extends Component {
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
      hashArray: [],
      currentForSalehash: ''
     }
this.updateForSaleHash = this.updateForSaleHash.bind(this);

  }

  async  componentDidMount(){
      this.setState({ loading : true });
     const accounts = await web3.eth.getAccounts();
     const userAccount = accounts[0];
     const currentForSalehash = await _DC_Depot.methods.getForSale().call();
     console.log('current for sale:' + currentForSalehash);
     if(currentForSalehash !== '') {
     const hashArray = JSON.parse(await ipfs.cat(currentForSalehash));
     this.setState({ hashArray });
   }
     this.setState({ userAccount, loading: false ,  currentForSalehash});
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
   this.updateForSaleHash();
     })
};


updateForSaleHash = async (event)=> {
  var array = this.state.hashArray;
  array.push(this.state.ipfsHash);
   var buf = Buffer.from(JSON.stringify(array));
    await ipfs.add(buf, (err, ipfsHash) => {
      this.setState({ currentForSalehash: ipfsHash[0].hash  })
      _DC_Depot.methods.sellItem(this.state.currentForSalehash)
      .send({from : this.state.userAccount,
        gas: '3000000'
      }, (error, transactionHash) => {
       this.setState({transactionHash});
       this.onReturn();
           });
         })
   };

onReturn = async => {

_DC_Depot.once( 'ItemForSale', {
  filter: {itemHash: this.state.ipfsHash},
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
    if (this.state.toDashboard === true) {
     return <Redirect to='/DCDepot' />
   }else{
    if(this.state.loading === true){
      return(
        <div className="Loader">
          <h1>Please Wait While Your item is Uploaded to the Blockchain</h1>
        <img src={Loader} alt ="Loader" className="Loader" />
        <h3>You will be redirected to the For Sale Page
        once the transaction is complete.</h3>
        </div>
      );
    } else {
    return (
      <div>
        <h3>This page allows you to sell your item on the DC Depot</h3>
        <div>
        <DepotNav />
        </div>
          <label htmlFor="details">Upload Profile Picture: </label>
          <input className='photo' id="photo" name="photo" type='file' onChange={this.fileSelectedHandler}/>
          <p>{ this.state.message }</p>
          <br/>
       <form onSubmit={this.handleSubmit}>
    <label htmlFor="itemName">Item Name: </label>
    <br/>
    <input id="itemName" name="itemName" type="text" placeholder = 'Name of your item'/>
    <br/>
      <label htmlFor="SellerAddress">Sellers Wallet address: </label>
      <br/>
      <input id="SellerAddress" name="SellerAddress" type="text" placeholder = 'Your Wallet Address'/>
      <br/>
        <label htmlFor="Price">Asking Price: </label>
        <br/>
        <input id="Price" name="Price" type="text" placeholder = 'The Price in Ether'/>
        <br/>

    <button>List Item</button>
  </form>
     </div>
    );
  }
}
}
}
export default Sell_Item;
