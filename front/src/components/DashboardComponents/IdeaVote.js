
import React, { Component } from 'react';
import IdeaList from '../IdeaComponents/IdeaList';
import MemDashBoard from './MemDashBoard';

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
