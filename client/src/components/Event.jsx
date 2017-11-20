import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Event.css';

import EventDetails from './EventDetails';
import EventDiscussion from './EventDiscussion';
import { loadEventActionCreator } from '../action-creators';

class Event extends Component {

  componentWillMount() {
    this.props.dispatch(loadEventActionCreator(this.props.match.params.id));
  }

  // this should be handled in the state!!
  handleTabClick = (e) => {
    const tabs = document.querySelectorAll('.card-header-tabs > li > a');
    tabs.forEach( (tab) => {
      tab.classList.remove('active')
    });
    e.target.classList.add('active');
  };

  render() {
    const { name, artists, description, dateTime, location, posterImage } = this.props;

    return (
      [
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img className="img-thumbnail" src={posterImage} />
            </div>
            <div className="col">
              <h1>{name}</h1>
              <p className="lead">{description}</p>
            </div>
          </div>
        </div>
      </div>,

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/events/1/details" onClick={ this.handleTabClick }>Details</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/events/1/discussion" onClick={ this.handleTabClick }>Discussion</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/events/1/music" onClick={ this.handleTabClick }>Music</a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <Switch>
                  <Route path='/events/:id/details' component={EventDetails} />
                  <Route path='/events/:id/discussion' component={EventDiscussion} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
      ]
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state._event
  }
}

const ConnectedEvent = connect(mapStateToProps)(Event)

export default ConnectedEvent;
