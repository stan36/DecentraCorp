import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Donate from '../InfoComponents/Donate';
import JoinCore from '../InfoComponents/JoinCore';
import Intro from '../InfoComponents/Intro.js';
import WhatIsDAC from '../InfoComponents/WhatIsDAC.js';
import Members from '../InfoComponents/Members.js';
import DFM from '../InfoComponents/DFM.js';
import DC_ContractStructure from '../InfoComponents/DC_ContractStructure.js';
import CPBlockchain from '../InfoComponents/CPBlockchain.js';
import CPBStructure from '../InfoComponents/CPBStructure.js';
import IdeaCoin from '../InfoComponents/IdeaCoin.js';
import EPMS from '../InfoComponents/EPMS.js';
import DCPoA from '../InfoComponents/DCPoA.js';
import ChaosCasinoInfo from '../InfoComponents/ChaosCasinoInfo.js';
import DC_DepotInfo from '../InfoComponents/DC_DepotInfo.js';
import ExternalResources from '../InfoComponents/ExternalResources.js';

import './Info.css';
class Info extends Component {
  render() {
    return(
    <div className='Info'>
      <Intro />
      <hr style={{ height: '20px' , width: 'auto', background: 'black'}}/>
      <WhatIsDAC />
      <hr style={{ height: '20px' , width: 'auto', background: 'black'}}/>
      <Members />
      <hr style={{ height: '20px' , width: 'auto', background: 'black'}}/>
      <DFM />
      <hr style={{ height: '20px' , width: 'auto', background: 'black'}}/>
      <DC_ContractStructure />
      <hr style={{ height: '20px' , width: 'auto', background: 'black'}}/>
      <CPBlockchain />
      <hr style={{ height: '20px' , width: 'auto', background: 'black'}}/>
      <CPBStructure />
      <hr style={{ height: '20px' , width: 'auto', background: 'black'}}/>
      <IdeaCoin />
      <hr style={{ height: '20px' , width: 'auto', background: 'black'}}/>
      <EPMS />
      <hr style={{ height: '20px' , width: 'auto', background: 'black'}}/>
      <DCPoA />
      <hr style={{ height: '20px' , width: 'auto', background: 'black'}}/>
      <ChaosCasinoInfo />
      <hr style={{ height: '20px' , width: 'auto', background: 'black'}}/>
      <DC_DepotInfo />
      <hr style={{ height: '20px' , width: 'auto', background: 'black'}}/>
      <ExternalResources />
      <hr style={{ height: '20px' , width: 'auto', background: 'black'}}/>
      <Donate />
      </div>
    );
  }
}

    export default Info;
