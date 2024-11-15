import './pagesStyles.css';
import { AddTodoForm } from '../components/AddTodoForm';
import { TodoList } from '../components/TodoList';

export const HomePage = () => {
  return (
    <div className="page-container">
      <h1>Home Page</h1>
      <p>the game</p>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};
