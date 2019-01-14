
import React, { Component } from 'react';
import IdeaList from '../IdeaComponents/IdeaList';
import MemDashBoard from './MemDashBoard';

class IdeaVote extends Component {
  render() {
    return(
          <div className='MemDash'>
        <MemDashBoard />

        <IdeaList />

    </div>
    );
  }
}

    export default IdeaVote;
