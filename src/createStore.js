export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = changeCount(state, action);
    render();
    }

    function getState() {
      return state;
    }

    return {
      dispatch,
      getState
    };
  // add your code here
};

function render() {
  const container = document.getElementById('container');
}
