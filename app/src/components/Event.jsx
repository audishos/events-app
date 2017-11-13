import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './Event.css';

import EventDetails from './EventDetails';
import EventDiscussion from './EventDiscussion';

const Event = (props) => {

  // this should be handled in the state!!
  const handleTabClick = (e) => {
    const tabs = document.querySelectorAll('.card-header-tabs > li > a');
    tabs.forEach( (tab) => {
      tab.classList.remove('active')
    });
    e.target.classList.add('active');
  };

  return (
    [
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img className="img-thumbnail" src="https://i.ticketweb.com/i/00/07/29/33/19_Original.jpg?v=4" />
          </div>
          <div className="col">
            <h1>Markus Schulz & Cosmic Gate</h1>
            <p className="lead">Rebel</p>
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
                  <Link className="nav-link active" to="/events/1/details" onClick={ handleTabClick }>Details</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/events/1/discussion" onClick={ handleTabClick }>Discussion</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/events/1/music" onClick={ handleTabClick }>Music</a>
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

export default Event;
