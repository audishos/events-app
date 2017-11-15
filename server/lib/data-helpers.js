const Event = require('../models/Event');
const User = require('../models/User');
const Attendee = require('../models/Attendee');

module.exports = (db) => {

  return {

    createEvent: (event) => {
      return new Promise( (resolve, reject) => {
        const newEvent = new Event(event);
        newEvent.save()
          .then( (res) => {
            resolve(res);
          })
          .catch( (err) => {
            switch(err.name) {
              case 'ValidationError':
                reject({ code: 400, message: err.message });
                break;
              default:
                reject({ code: 500, message: err.message });
                break;
            }
          })
      });
    }
  }
}
