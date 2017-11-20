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
