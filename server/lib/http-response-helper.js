module.exports = (error) => {
  switch(error.name) {
    case 'ValidationError':
      return({ code: 400, message: error.message });
      break;
    default:
      return({ code: 500, message: error.message });
      break;
  }
}
