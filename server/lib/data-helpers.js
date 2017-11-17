const Event = require('../models/Event');
const User = require('../models/User');
const Attendee = require('../models/Attendee');
const httpResponseHelper = require('./http-response-helper');

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
      });
    },

    createEvent: (event) => {
      return new Promise( (resolve, reject) => {
        const newEvent = new Event(event);
        newEvent.save()
          .then( (res) => {
            resolve(res);
          })
          .catch( (err) => {
            reject(httpResponseHelper(err));
          });
      });
    },

    addComment: (eventId, comment) => {
      return new Promise( (resolve, reject) => {
        Event.findOne({ _id: eventId })
          .then( (event) => {
            event.discussion.push(comment);
            return(event);
          })
          .then( (event) => {
            event.save()
              .then( (res) => {
                resolve(res);
                return;
              })
              .catch( (err) => {
                reject(httpResponseHelper(err));
              });
          })
          .catch( (err) => {
            reject(httpResponseHelper(err));
          });
      });
    }
  }
}
