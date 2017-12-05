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
    const { name, description, posterImage } = this.props;
    const eventId = this.props.match.params.id;

    return (
      [
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img className="img-thumbnail" src={posterImage} alt='poster' />
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
                    <Link className="nav-link active" to={`/events/${eventId}/details`} onClick={ this.handleTabClick }>Details</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={`/events/${eventId}/discussion`} onClick={ this.handleTabClick }>Discussion</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={`/events/${eventId}/music`} onClick={ this.handleTabClick }>Music</Link>
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
    name: state._event.name,
    description: state._event.description,
    posterImage: state._event.posterImage
  };
}

const ConnectedEvent = connect(mapStateToProps)(Event);

export default ConnectedEvent;
