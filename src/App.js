import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import AccountProfile from './components/accounts/AccountProfile';
import Navbar from './components/shared/Navbar';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' render={ () => <div>Home Page</div> } />
        <Route exact path='/account/profile' component={AccountProfile} />
      </Switch>
    </Container>
  </>
)

export default App;
