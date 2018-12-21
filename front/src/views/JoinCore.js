import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mainEtherAccountQR from "../images/mainEtherAccountQR.png";

class JoinCore extends Component {
  render() {
    return(
      <div className='container'>
        <h3>Thank you for visiting DecentraCorp's dApp in its early alpha phase!</h3>
        <br/>
        <h3>We are looking for talented developers to help build DecentraCorp!</h3>
        <br/>
        <p>Those interested in becoming apart of DecentraCorps Core Development Team</p>
        <p>can send their resumes too:</p>
        <p>decentracorp@protonmail.com</p>
        <p>Anyone with React, Python, and or Solidity expereince is encouraged to apply</p>
        <p>regardless of experience!</p>
        <br/>
        <p>In additon to developers DecentraCorp is also looking to recruit:</p>
        <p>A Graphic Designer</p>
        <p>Director of Project Marketing and Relations</p>
        <br/>
        <p>The only requirements for application are an understanding of the projects white papers found</p>
        <Link style={{  color: "red"}} to='/About'>on our About Page Here!</Link>
        </div>
    );
  }
}

    export default JoinCore;
