import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from "../constants/ActionTypes";

const Todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case EDIT_TODO:
      return state.map(
        todo => todo.id === action.id ? { ...todo, text: action.text } : todo
      );

    case COMPLETE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case COMPLETE_ALL:
      const marked = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !marked
      }));

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
}


export default Todos;