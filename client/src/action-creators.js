import Resource from './models/resource';
const eventStore = Resource('events');

export const loadEventActionCreator = (id) => {
  return {
    types: ['LOAD_EVENT_REQUEST', 'LOAD_EVENT_SUCCESS', 'LOAD_EVENT_FAILURE'],
    promise: () => {
      return new Promise((resolve, reject) => {
        eventStore.find(id)
          .then( (res) => {
            resolve(res);
          })
          .catch( (err) => {
            console.error(err);
            reject(err);
          });
      })
    }
  }
}

export const submitCommentActionCreator = (id, comment) => {
  const eventCommentStore = Resource(`events/${id}/comments`);

  return {
    types: ['SUBMIT_COMMENT_REQUEST', 'SUBMIT_COMMENT_SUCCESS', 'SUBMIT_COMMENT_FAILURE'],
    promise: () => {
      return new Promise((resolve, reject) => {
        eventCommentStore.create({
          userId: '5a16f9ff6cd7602b7e0972d9',
          comment: comment
        })
          .then( res => resolve(res.data))
          .catch( err => reject(err));
      });
    }
  }
}
