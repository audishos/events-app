const Event = require('../models/Event');
const User = require('../models/User');
const Attendee = require('../models/Attendee');

module.exports = (db) => {

  return {

    createEvent: (event) => {
      return new Promise( (resolve, reject) => {
        const newEvent = new Event();
        console.log(newEvent);
        newEvent.save()
          .then( (res) => {
            resolve(res);
          })
          .catch( (err) => {
            reject(err);
          })
      });
    }

  }

}
