import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Mars from './components/Mars';
// import Select from 'react-select';
import './scss/styles/app.scss';

function App() {
  return (
    <div className="App global-wrapper">
    <BrowserRouter>
      <Header/>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/mars">
          <Mars/>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
