import "./todoList.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { ITodo } from "../Interfaces/TodoList";

interface Props {
  todo: ITodo;
  handleDelete(todoNameToDelete: string): void;
}

const TodoTask = ({ todo, handleDelete }: Props) => {
  return (
    <div className="todo-list-container">
      <div className="todo-list">
        <input type="checkbox" className="checkbox" />

        <div className="todo">{todo.todoName}</div>
        <div className="deadline">in {todo.deadline} days</div>
        <button className="delete-todo"  >
          <DeleteIcon className="delete-icon" onClick={()=>handleDelete(todo.todoName)} />
        </button>
      </div>
    </div>
  );
};

export default TodoTask;
