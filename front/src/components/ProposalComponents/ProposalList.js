import React, { Component } from 'react';
import web3 from '../../utils/web3';
import _DecentraCorp from '../../ethereum/DecentraCorp';
import  DisplayPropName  from './DisplayPropName';
import  DisplayProp  from './DisplayProp';




class ProposalList extends Component {
  constructor(props){
    super(props);

    this.state = {
      userAccount: '',
      vote: false,
      hashs1: [],
      hashs2: [],
      hashs3: [],
      selectedIpfs: '',
      newArray1: [],
      newArray2: [],
      newArray3: []
    }
this.PropHashs = this.PropHashs.bind(this);
this.onClick = this.onClick.bind(this);
this.stateSetter = this.stateSetter.bind(this);
  }

  async  componentDidMount(){
     const accounts = await web3.eth.getAccounts();
     const userAccount = accounts[0];
     this.setState({ userAccount });
     this.PropHashs();

   }

   PropHashs = async () => {

      _DecentraCorp.events.ProposalCreated({
        filter: {PropCode: 1},
            fromBlock: '0',
            toBlock: 'latest'
          },function(error, event){ console.log(""); })
     .on('data', (event) => {
         const currentArray = this.state.hashs1;
         const hash = event.returnValues.VoteHash;
         const newArray1 = currentArray.push(hash);
         this.setState({ newArray1 });

        })

        _DecentraCorp.events.ProposalCreated({
          filter: {PropCode: 2},
              fromBlock: '0',
              toBlock: 'latest'
            },function(error, event){ console.log(""); })
       .on('data', (event) => {
           const currentArray = this.state.hashs2;
           const hash = event.returnValues.VoteHash;
           const newArray2 = currentArray.push(hash);
           this.setState({ newArray2 });

          })
          _DecentraCorp.events.ProposalCreated({
            filter: {PropCode: 3},
                fromBlock: '0',
                toBlock: 'latest'
              },function(error, event){ console.log(""); })
         .on('data', (event) => {
             const currentArray = this.state.hashs3;
             const hash = event.returnValues.VoteHash;
             const newArray3 = currentArray.push(hash);
             this.setState({ newArray3 });

            })
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
      <div className='IdeaList'>
        <div>
          <h3>Select a Funding Proposal to view</h3>
          <div className ="idea-details">
    {this.state.hashs1.map((ipfshash, index) => (
      <div className="prop-detail" key ={index + 1}>
        <DisplayPropName key={index + 4} ipfsHash={ipfshash} />
        <p key={index + 5}>IPFS Hash:</p>
        <p className='ipfsHash' key={index}>{ipfshash}</p>
          <button  style={{ color: "red"}} onClick={() => this.stateSetter(ipfshash)} key={index + 2}>Click Here To View This Idea</button>
          <br/>
          <br/>
          <br/>
          </div>
    ))}
    </div>
      </div>
      <div>
        <h3>Select a Membership Investigration Proposal to view</h3>
        <div className ="idea-details">
  {this.state.hashs2.map((ipfshash, index) => (
    <div className="prop-detail" key ={index + 1}>
      <DisplayPropName key={index + 4} ipfsHash={ipfshash} />
      <p key={index + 5}>IPFS Hash:</p>
      <p className='ipfsHash' key={index}>{ipfshash}</p>
        <button  style={{ color: "red"}} onClick={() => this.stateSetter(ipfshash)} key={index + 2}>Click Here To View This Idea</button>
        <br/>
        <br/>
        <br/>
        </div>
  ))}
  </div>
    </div>
    <div>
      <h3>Select a Membership Termination Proposal to view</h3>
      <div className ="idea-details">
{this.state.hashs3.map((ipfshash, index) => (
  <div className="prop-detail" key ={index + 1}>
    <DisplayPropName key={index + 4} ipfsHash={ipfshash} />
    <p key={index + 5}>IPFS Hash:</p>
    <p className='ipfsHash' key={index}>{ipfshash}</p>
      <button  style={{ color: "red"}} onClick={() => this.stateSetter(ipfshash)} key={index + 2}>Click Here To View This Idea</button>
      <br/>
      <br/>
      <br/>
      </div>
))}
</div>
  </div>
      </div>
      );
    }else{
      return(
      <DisplayProp ipfsHash={this.state.selectedIpfs} />
    );
    }
  }
}
    export default ProposalList;
