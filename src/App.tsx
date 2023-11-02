import React, { useState, useEffect } from 'react';
import ToDo from './ToDo';
import ToDoForm from './TodoForm';
import { iTodo } from './ToDo';
import './index.scss';

let first = true;

function App() {

  // Массив со списком задач
  const [todos, setTodos] = useState<Array<iTodo>>([]);

  // Добавление задачи
  const addTask = (userInput: string) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  };

  // Удаление задачи из массива
  const removeTask = (id: string) => {
    setTodos(todos.filter((todo: { id: string; }) => todo.id !== id))
  };

  // Смена состояния задачи (выполнено/не выполнено)
  const handleToggle = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )
    )
  };

  useEffect(() => {
    const rawTodos = localStorage.getItem('todos');
    if (rawTodos === null) {
      return;
    } else {
      setTodos(JSON.parse(rawTodos));
    }
  }, []);

  useEffect(() => {
    if (first) {
      first = false;
      return
    }
    
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  return (
    <div className="App">
      <header>
        <div className='list_container'>
          <h2>Cписок дел</h2>
          <h2>Количество задач: {todos.length}</h2>
        </div>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo: iTodo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        )
      })}
    </div>
  );
}

export default App;