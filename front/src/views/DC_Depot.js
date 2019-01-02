
import React, { Component } from 'react';
import IdeaList from '../components/IdeaList';
import Depot_Nav from '../components/DC_Depot/Depot_Nav';

class DC_Depot extends Component {
  render() {
    return(
          <div className='MemDash'>
        <Depot_Nav />
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

    export default DC_Depot;
