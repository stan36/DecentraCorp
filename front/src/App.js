import React, { Component } from 'react';
import DcWallet from './views/DCWallet';
import IdeaBlockApplication from './views/IdeaBlockApplication'

class App extends Component {



  render() {
    return (
      <div>
      <DcWallet />
      <IdeaBlockApplication />
      </div>
    );
  }
}

export default App;
