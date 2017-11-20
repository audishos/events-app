import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// import './App.css';
import NavBar from './components/NavBar';
import Event from './components/Event';

class App extends Component {

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
