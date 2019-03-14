import React, { Component } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import './Footer.css';


class Footer extends Component {


  render() {
    const url = "https://now.us7.list-manage.com/subscribe/post?u=401abf674e067e00418a5775b&amp;id=db573f9511";
    return(
      <div className='footer'>
        <div>
      <p>Join our Mailing list for project updates and upcoming promotional campaigns!</p>
</div>
<div className='email'>
  <MailchimpSubscribe url={url}/>
  </div>
      </div>
    );
  }
}
export default Footer;
