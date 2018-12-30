import React, { Component } from 'react';
import Info from './Info';

class Members extends Component {
  render() {
    return(
<div className="flex-container">
    <Info />
        <div className='members'>
        <br/>
        <h3 style={{ color: 'purple'}}>
        Members of DecentraCorp:
        </h3>
        <br/>
        <div>
        Most DAO's rely on an internal cryptocurrency to determine membership. This approach will not work for DecentraCorp
        as it would leave both it and the CryptoPatent Blockchain open to attack from any hostile entity with deep enough pockets.
        Instead, the members of DecentraCorp will be the people who have either invented or replicated an idea on the CryptoPatent Blockchain.
        </div>
        </div>
      </div>
    );
  }
}

    export default Members;
