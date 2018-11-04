import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import DCWallet from './views/DCWallet';
import IdeaBlockApplication from './views/IdeaBlockApplication';

export const Navigation = () => (
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/wallet'>DC Wallet</NavLink></li>
          <li><NavLink to='/IdeaBlockApplication'>IdeaBlock Application</NavLink></li>
        </ul>
      </nav>
    );

export const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/wallet' component={DCWallet}></Route>
    <Route exact path='/IdeaBlockApplication' component={IdeaBlockApplication}></Route>
  </Switch>
);

const Home = () => (
      <div className='home'>
        <h1>Welcome to the DecentraCorp Dapp</h1>
        <p> This project is still in its early alpha phase.</p>
      </div>
    );
