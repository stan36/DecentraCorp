import React, { Component } from 'react';
import web3 from '../../utils/web3';
import ipfs from '../../utils/IPFS_util';
import _DC_Depot from '../../ethereum/DC_Depot';
import Depot_Nav from './Depot_Nav';
import  DisplayItemName  from './DisplayItemName';
import  DisplayItem  from './DisplayItem';
import './ItemList.css';



class ItemList extends Component {
  constructor(props){
    super(props);

    this.state = {
      userAccount: '',
      forSale: '',
      hashs: [],
      selectedIpfs: ''

    }

this.onClick = this.onClick.bind(this);
this.stateSetter = this.stateSetter.bind(this);
  }

  async  componentDidMount(){
     const accounts = await web3.eth.getAccounts();
     const userAccount = accounts[0];
     const forSale = await _DC_Depot.methods.getForSale().call();
     console.log("for sale:" , {forSale});
     if(forSale !== '') {
     const hashs  =JSON.parse(await ipfs.cat(forSale));
     this.setState({ hashs})
   }

     this.setState({ userAccount , forSale, });


   }



onClick = (event) =>{
  event.preventDefault();

}

stateSetter = (ipfshash) =>{
  this.setState({ selectedIpfs: ipfshash})
}


  render() {
if(!this.state.selectedIpfs){
    return(
      <div className='MemDash'>
    <Depot_Nav />
      <div className='IdeaList'>
        <div>
          <h1>Select an Item to view</h1>
          <h2>For Sale</h2>
          <div className ="item-details">
    {this.state.hashs.map((ipfshash, index) => (
      <div className="prop-detail" key ={index + 1}>
        <DisplayItemName key={index + 4} ipfsHash={ipfshash} />
        <p key={index + 5}>IPFS Hash:</p>
        <p className='ipfsHash' key={index}>{ipfshash}</p>
          <button  style={{ color: "red"}} onClick={() => this.stateSetter(ipfshash)} key={index + 2}>Click Here To View This Item</button>
          <br/>
          <br/>
          <br/>
          </div>
    ))}
    </div>
      </div>
      </div>
    </div>
      );
    }else{
      return(
      <DisplayItem ipfsHash={this.state.selectedIpfs} />
    );
    }
  }
}
    export default ItemList;
