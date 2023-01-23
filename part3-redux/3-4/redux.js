export const actionCreator = (type) => (payload) => ({
  type,
  payload,
});

export function createStore(reducer) {
  let state;
  let handlers = [];

  function dispatch(action) {
    state = reducer(state, action);
    handlers.forEach((handler) => handler());
  }

  function getState() {
    return state;
  }

  function subscribe(handler) {
    handlers.push(handler);
  }

  return {
    dispatch,
    getState,
    subscribe,
  };
}
