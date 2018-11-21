
import React, { Component } from 'react';
import ipfs from '../utils/IPFS_util';
import IdeaList from '../components/IdeaList';

class IdeaVote extends Component {
  render() {
    return(
      <div className='container'>
        
        <IdeaList />
      </div>
    );
  }
}

    export default IdeaVote;
