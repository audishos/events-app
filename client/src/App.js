import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// import './App.css';
import NavBar from './components/NavBar';
import Event from './components/Event';
import { loadEventActionCreator } from './action-creators';

class App extends Component {

  componentWillMount() {
    console.log('loading event 5a0c9358ac8f0e0f252852b9...')
    this.props.store.dispatch(loadEventActionCreator('5a0c9358ac8f0e0f252852b9'));
  }

  render() {
    return (
      <Provider store={ this.props.store }>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path='/events/:id' component={Event} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
