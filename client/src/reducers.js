export const _event = (state = {}, action) => {
  switch(action.type) {
    case 'LOAD_EVENT_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'LOAD_EVENT_SUCCESS':
      return {
        ...state,
        ...action.result,
        loading: false
      }
    case 'LOAD_EVENT_FAILURE':
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
}
