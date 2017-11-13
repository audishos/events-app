import React from 'react';
import './Event.css';

import EventDetails from './EventDetails';
import EventDiscussion from './EventDiscussion';

const Event = (props) => {
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
                  <a className="nav-link active" href="#">Details</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Discussion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Music</a>
                </li>
              </ul>
            </div>
            <div className="card-body">

              {<EventDetails />}
              <EventDiscussion />

            </div>
          </div>
        </div>
      </div>
    </div>
    ]
  )
}

export default Event;
