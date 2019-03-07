
import React, { Component } from 'react';
import ProposalList from '../ProposalComponents/ProposalList';

class ProposalVote extends Component {
  render() {
    return(
          <div className='MemDash'>
        <div className='container'>
        <p style={{color: 'red'}}>
        This feature does not yet work on mobile! Please visit us on a desktop to view/vote on ideas.
        </p>
        <ProposalList />
      </div>
    </div>
    );
  }
}

    export default ProposalVote;
