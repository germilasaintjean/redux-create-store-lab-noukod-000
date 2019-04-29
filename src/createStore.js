export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
    }

    dispatch({ type: '@@INIT'})

    function getState() {
      return state;
    }

    return {
      dispatch,
      getState
    }
}

function changeCount(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };


function render() {
  const container = document.getElementById('container');
}
