import React from 'react';
import './Event.css';

import EventDetails from './EventDetails';

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
            <h1 className="display-3">Markus Schulz & Cosmic Gate</h1>
            <p className="lead">Rebel</p>
          </div>
        </div>
      </div>
    </div>,

    <EventDetails />
    ]
  )
}

export default Event;
