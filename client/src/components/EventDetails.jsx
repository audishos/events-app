import React from 'react';
import { connect } from 'react-redux';

import './EventDetails.css';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBTiAV9GjSBEzbHyk7lTpJYfSM4731ePyE';

const EventDetails = (props) => {
  let { artists, dateTime, venue } = props;
  dateTime = new Date(dateTime);
  const venueSearchString = venue && venue.replace(/ /g, '+');
  console.log(GOOGLE_MAPS_API_KEY);

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <i className="material-icons">people</i>
        {artists && artists.join(', ')}
      </li>
      <li className="list-group-item">
        <i className="material-icons">date_range</i>
        {dateTime && dateTime.toDateString()}
      </li>
      <li className="list-group-item">
        <i className="material-icons">access_time</i>
        {dateTime && dateTime.toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric' })}
      </li>
      <li className="list-group-item">
        <i className="material-icons">location_on</i>
        {venue}
      </li>
        <iframe
          title='map'
          frameBorder='0' style={{border: '0'}}
          className='card-img-bottom'
          width='1800' height='600'
          src={`https://www.google.com/maps/embed/v1/search?key=${GOOGLE_MAPS_API_KEY}&q=${venueSearchString}`}
          allowFullScreen>
        </iframe>
      {/* <iframe className="card-img-bottom" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11549.38230565795!2d-79.3546706!3d43.640978!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x12eae65b79171bda!2sRebel!5e0!3m2!1sen!2sca!4v1510607416302" width="1800" height="600" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe> */}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    artists: state._event.artists,
    dateTime: state._event.dateTime,
    venue: state._event.venue
  };
}

const ConnectedEventDetails = connect(mapStateToProps)(EventDetails);

export default ConnectedEventDetails;
