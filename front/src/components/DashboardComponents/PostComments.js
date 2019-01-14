import React, { Component } from 'react';
import ipfs from '../../utils/IPFS_util';
import _DecentraCorp from '../../ethereum/DecentraCorp';
import './PostComment.css';



class PostComments extends Component {

  constructor(props){
    super(props);

    this.state = {
       newComment: []
     }
  }


postComment = async () => {

    var array = this.props.hashArray;
    console.log('array: ' + array);
    array.push(this.state.newComment)
     var buf = Buffer.from(JSON.stringify(array));
     console.log('the buffer is: ' + buf);
      await ipfs.add(buf, (err, ipfsHash) => {
        console.log('new hash for the new array: ' + ipfsHash[0].hash);
        console.log(this.props.Json.Address);
      _DecentraCorp.methods.postComment(
      this.props.Json.Address,
      ipfsHash[0].hash

    )
    .send({
    from : this.props.userAccount}, (error, transactionHash) => {
  });
  },(error, transactionHash) => {
   this.setState({transactionHash});

       });
}

handleSubmit = async (event) => {
  event.preventDefault();
   const formData = new FormData(event.target);
  const fD = formData.entries();
  console.log('form data: ' + fD);
  let jsonObject = {
      ComAd: this.props.userAccount

  };

    for (const [key, value]  of formData.entries()) {
        jsonObject[key] = value;
        }
        console.log('THE JSON MADE:' + jsonObject);


        var buf = Buffer.from(JSON.stringify(jsonObject));
         await ipfs.add(buf, (err, ipfsHash) => {
 this.setState({newComment: ipfsHash[0].hash});
 console.log('comment in state: ' + this.state.newComment);
 this.postComment();
});
      }




  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="Title">Title: </label>
      <br/>
      <input className='Title' id="Title" name="Title" type="Title"/>
      <br/>
       <label htmlFor="comment">Post A Comment: </label>
       <br/>
       <input className='comment' id="comment" name="comment" type="text" placeholder = 'Post a Comment about this Member or their Facility'/>
       <br/>
        <button>Post Comment</button>
        </form>
        </div>
    );
  }
}

export default PostComments;
