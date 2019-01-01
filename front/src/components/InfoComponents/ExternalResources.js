import React, { Component } from 'react';
import Info from './Info';
import JoinCore from './JoinCore';

class ExternalResources extends Component {
  render() {
    return(
<div className="flex-container">
  <Info />
        <div className='papers'>
          <JoinCore />
          <div>
        <p>To view the Introductory WhitePaper for DecentraCorp and its associated projects</p>
        <p><a style={{ textDecoration: 'none', color: "red"}} href='https://drive.google.com/open?id=1hhsuQ_JnBz5E0813V-4trPZhiflaTBwr'> Click Here!</a></p>
        <br/>
        </div>
        <div>
        <p>To view the WhitePaper for the CryptoPatent Blockchain</p>
        <p><a style={{ textDecoration: 'none', color: "red"}} href='https://drive.google.com/open?id=1Me8pn45kzBCucV-F1LyjYHv4LLBKWX6w'> Click Here!</a></p>
        <br/>
        </div>
        <div>
        <p>To view the WhitePaper for the ChaosCasino's</p>
        <p><a style={{ textDecoration: 'none', color: "red"}} href='https://drive.google.com/open?id=12Fw9pM8V9B1zs1QvsQpNDL504ylq84Ic'> Click Here!</a>
        </p>
        <br/>
      </div>
      <div>
        <p>To view the code for this project on Github</p>
        <p><a style={{ textDecoration: 'none', color: "red"}} href='https://github.com/stan36/DecentraCorp'> Click Here!</a>
        </p>
        <br/>
        <br/>
        </div>
      </div>
    </div>
    );
  }
}

    export default ExternalResources;
