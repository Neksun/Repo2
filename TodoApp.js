import React from 'react';
import { useTODO } from './custom hooks/useTODO'; // Importa el hook personalizado
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import './TodoApp.css';


const initialState = [
  {
    id: new Date().getTime(),
    description: 'Hacer los challenges',
    done: false,
  },
];

export const TodoApp = () => {
  // Usa el hook personalizado para manejar el estado y las funciones de TODO
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    countTodos,
    countPendingTodos,
  } = useTODO(initialState);

  return (
    <>
      <h1>
        countTodos: {countTodos}, <small>countPendingTodos: {countPendingTodos}</small>
      </h1>
      <hr />

      <div className="row">
        {/* Pasa los handlers y el estado de los todos a los componentes hijos */}
        <TodoList todos={todos} handleDelete={handleDeleteTodo} handleToggle={handleToggleTodo} />
        <TodoAdd onNewTodo={handleNewTodo} />
      </div>
    </>
  );
};

export default TodoApp;

