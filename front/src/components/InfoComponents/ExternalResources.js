import React, { Component } from 'react';
import Info from './Info';

class ExternalResources extends Component {
  render() {
    return(
<div className="flex-container">
  <Info />
        <div className='papers'>
          <div>
        <p>To view the DecentraCorp WhitePaper</p>
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
        <div>
        <p>The DecentraCorp Core Development Team can be reached at:</p>
        <br/>
        <p>decentracorp@pm.me</p>
        </div>
      </div>
    </div>
    );
  }
}

    export default ExternalResources;
