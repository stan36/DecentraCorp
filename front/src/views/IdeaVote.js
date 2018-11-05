
import React, { Component } from 'react';
import ipfs from '../utils/IPFS_util';
import IdeaList from '../components/IdeaList';

class IdeaVote extends Component {
  render() {
    return(
      <div className='IdeaVote'>
        <h1>IdeaVote</h1>
        <IdeaList />
      </div>
    );
  }
}

    export default IdeaVote;