import React from 'react';
import './EventDetails.css';

const EventDetails = (props) => {
  return (
    <ul class="list-group">
      <li class="list-group-item">
        <i class="material-icons">people</i>
        Markus Schulz, Cosmic Gate
      </li>
      <li class="list-group-item">
        <i class="material-icons">date_range</i>
        Fri Nov 17, 2017
      </li>
      <li class="list-group-item">
        <i class="material-icons">access_time</i>
        10:00 PM
      </li>
      <li class="list-group-item">
        <i class="material-icons">location_on</i>
        Rebel - 11 Polson St, Toronto, ON M5A 1A4
      </li>
      <iframe className="card-img-bottom" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11549.38230565795!2d-79.3546706!3d43.640978!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x12eae65b79171bda!2sRebel!5e0!3m2!1sen!2sca!4v1510607416302" width="1800" height="600" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
    </ul>
  );
}

export default EventDetails;
