const express = require('express');
const router = express.Router();

module.exports = (DataHelpers) => {
  /* GET home page. */
  router.get('/', (req, res) => {
    DataHelpers.findAllEvents()
      .then( (response) => {
        res.status(200).json(response);
      })
      .catch( (err) => {
        res.status(500).json(err);
      });
  });

  router.post('/', (req, res) => {
    const newEvent = {
      name: req.body.name,
      description: req.body.description,
      dateTime: req.body.dateTime,
      venue: req.body.venue,
      posterImage: req.body.posterImage,
      artists: req.body.artists,
      mediaLinks: req.body.mediaLinks
    };

    DataHelpers.createEvent(newEvent)
      .then( (response) => {
        res.status(201).json(response);
      })
      .catch( (err) => {
        res.status(err.code).json(err.message);
      })
  });

  router.get('/:id', (req, res) => {
    DataHelpers.findEventById(req.params.id)
      .then( (response) => {
        res.status(200).json(response);
      })
      .catch( (err) => {
        res.status(500).json(err);
      });
  });

  router.post('/:id/comments', (req, res) => {
    const newComment = {
      _userId: req.body.userId, // will come from login session later
      comment: req.body.comment,
      _parentCommentId: req.body.parentCommentId
    }

    DataHelpers.addComment(req.params.id, newComment)
      .then( (response) => {
        res.status(200).json(response);
      })
      .catch( (err) => {
        res.status(err.code).json(err.message);
      });
  });

  return router;

}
