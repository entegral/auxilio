export function errorAction (message) {
  return {
    type: 'UPDATE_ERROR',
    message: message
  };
};