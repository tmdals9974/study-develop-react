import * as ActionType from "./action-type.js";

const InitializedState = { count : 0 };

export function reducer(state = InitializedState, action) {
  switch (action.type) {
    case ActionType.INCREASE:
      return { ...state, count: state.count + (action.payload || 1) };
    case ActionType.DECREASE:
      return { ...state, count: state.count - (action.payload || 1) };
    case ActionType.RESET:
      return { ...state, count: 0 };
    default:
      return { ...state };
  }
}
