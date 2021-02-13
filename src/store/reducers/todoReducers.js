import {
    SET_TODOLIST,
    SET_LOADING,
} from "../actions/types";
  const initialState = {
    toDoList: [],
    loadingState: false
  };
  const todoReducers = (state = initialState, action) => {
    switch (action.type) {
      case SET_TODOLIST:
        return {
          ...state,
          toDoList: [...state.toDoList, action.payload]
        };
      case SET_LOADING:
        return {
          ...state,
          loadingState: action.payload
        };
      default:
        return state;
    }
  }

  export default todoReducers;