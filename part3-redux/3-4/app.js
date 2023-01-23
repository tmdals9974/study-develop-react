import { createStore } from "./redux.js";
import { reducer } from "./reducer.js";
import * as Actions from "./actions.js";

const store = createStore(reducer);

store.subscribe(function () {
  console.log(store.getState());
});

store.dispatch(Actions.increase(1));
store.dispatch(Actions.increase(3));
store.dispatch(Actions.decrease(2));
store.dispatch(Actions.reset());
store.dispatch(Actions.increase(10));