import { FC, useState, ChangeEvent } from "react";
import { ITodo } from "./Interfaces/TodoList";
import "./App.css";
import TodoTask from "./components/TodoTask";

const App: FC = () => {
  const [todoName, setTodoName] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTodoName(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const handleAddTask = (): void => {
    if (todoName.length > 3) {
      const newTodo = { todoName, deadline };
      setTodoList([...todoList, newTodo]);
      setTodoName("");
      setDeadline(0);
    }
  };

  const handleDelete = (todoNameToDelete: string): void => {
    setTodoList(
      todoList.filter((todo) => {
        return todoNameToDelete !== todo.todoName  ;
      })
    );
  };

  return (
    <div className="app">
      <div className="todo-container">
        <div className="header">
          <input
            type="text"
            placeholder="Task..."
            autoComplete="off"
            maxLength={20}
            value={todoName}
            name="task"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in days)"
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
          <button className="add-task" onClick={handleAddTask}>
            Add Task
          </button>
        </div>

        {todoList.map((todo: ITodo, key: number) => {
          return <TodoTask key={key} todo={todo} handleDelete={handleDelete} />;
        })}
      </div>
    </div>
  );
};

export default App;
