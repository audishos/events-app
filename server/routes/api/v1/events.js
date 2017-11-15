const express = require('express');
const router = express.Router();

module.exports = (DataHelpers) => {
  /* GET home page. */
  router.get('/', (req, res) => {

  });

  router.post('/', (req, res) => {
    const newEvent = { name: 'This is a test event!!' };

    DataHelpers.createEvent(newEvent)
      .then( (response) => {
        res.json(response);
      })
      .catch( (err) => {
        res.json(err);
      })
  });

  router.get('/:id', (req, res) => {

  });

  return router;

}
