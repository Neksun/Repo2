import { ADD_TODO, LOAD_TODOS, TOGGLE_TODO, DELETE_TODO } from './actions';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodos = [...state.todos, { text: action.payload, completed: false }];
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return {
        ...state,
        todos: newTodos,
      };
    case LOAD_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case TOGGLE_TODO:
      const updatedTodos = state.todos.map((todo, index) =>
        index === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };
    case DELETE_TODO:
      const filteredTodos = state.todos.filter((_, index) => index !== action.payload);
      localStorage.setItem('todos', JSON.stringify(filteredTodos));
      return {
        ...state,
        todos: filteredTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;
