const Event = require('../models/Event');
const User = require('../models/User');
const Attendee = require('../models/Attendee');

module.exports = (db) => {

  return {

    findAllEvents: () => {
      return new Promise( (resolve, reject) => {
        Event.find()
          .then( (res) => {
            resolve(res);
          })
          .catch( (err) => {
            reject(err);
          });
      });
    },

    findEventById: (id) => {
      return new Promise( (resolve, reject) => {
        Event.findOne({ _id: id })
          .then( (res) => {
            resolve(res);
          })
          .catch( (err) => {
            reject(err);
          });
      })
    },

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
