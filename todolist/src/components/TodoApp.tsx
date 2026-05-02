import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  date: Date | null;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [dueDate, setDueDate] = useState<Date | null>(new Date());

  const addTask = () => {
    if (newTodo) {
      const newId = crypto.randomUUID();
      const newTodoItem: TodoItem = {
        id: newId,
        text: newTodo,
        completed: false,
        date: dueDate,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };
  const deleteTask = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      // if (todo.id === id) {
      //   return { ...todo, completed: !todo.completed };
      // }
      // return todo;
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>My Todo App</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <div>
        <DatePicker
          selected={dueDate}
          onChange={(date: Date | null) => setDueDate(date)}
        />
      </div>
      <button onClick={addTask}>Add new Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text} : Due on{" "}
              {todo.date ? todo.date.toLocaleDateString() : null}
            </span>

            <button onClick={() => deleteTask(todo.id)}> Delete Todo</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
