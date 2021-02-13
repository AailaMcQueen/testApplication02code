import {
  SET_LOADING,
  SET_TODOLIST
} from "./types";


export const saveTodo = (todo) => dispatch => {
  dispatch(setLoading(true))
  dispatch(setTodoList(todo))
  dispatch(setLoading(false))
}

export const setLoading = (val) => {
  return {
    type: SET_LOADING,
    payload: val
  };
};

export const setTodoList = (todo) => {
  return {
    type: SET_TODOLIST,
    payload: todo
  };
};
