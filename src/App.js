import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import Bottom from './components/Bottom';

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Switch>
            <Route path='/' exact>
              <Login />
            </Route>
            <Route path='/home'>
              <AppBody>
                <Header />
                <Bottom />
              </AppBody>
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;
`



