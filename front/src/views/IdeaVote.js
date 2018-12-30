
import React, { Component } from 'react';
import ipfs from '../utils/IPFS_util';
import IdeaList from '../components/IdeaList';
import MemDashBoard from '../components/DashboardComponents/MemDashBoard';

class IdeaVote extends Component {
  render() {
    return(
          <div className='MemDash'>
        <MemDashBoard />
        <div className='container'>
        <p style={{color: 'red'}}>
        This feature does not yet work on mobile! Please visit us on a desktop to view/vote on ideas.
        </p>
        <IdeaList />
      </div>
    </div>
    );
  }
}

    export default IdeaVote;
