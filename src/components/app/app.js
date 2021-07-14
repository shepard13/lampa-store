import React from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom';
import { CartPage, HomePage } from '../pages';
import Header from '../header/header';

const App = () => {
  return (
    <main role='main' className='container'>
      <Header numItems={5} total={250} />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/cart'>
          <CartPage />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
