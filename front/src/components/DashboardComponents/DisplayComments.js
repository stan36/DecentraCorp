import React, { Component } from 'react';
import DisplayComment from './DisplayComment';
import './DisplayComment.css';


class DisplayComments extends Component {


  render() {


    return(

      <div className='DisplayComment'>
          <h2>Reviews and Comments</h2>

          <div className ="t">
    {this.props.hashArray.map((ipfshash, index) => (
      <div className="f" key ={index + 1}>
        <DisplayComment key={index + 4} ipfsHash={ipfshash} />

          <hr/>
          </div>
    ))}
    </div>
      </div>

      );
    }
  }

    export default DisplayComments;
