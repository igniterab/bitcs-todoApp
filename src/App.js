import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from "./components/TodoList";
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
      switch(status){
          case 'completed':
              setFilteredTodos(todos.filter(todo => todo.completed === true));
              break;
          case 'active':
              setFilteredTodos(todos.filter(todo => todo.completed === false));
              break;
          default:
              setFilteredTodos(todos)
              break;
      }
    };


  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  };

  const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null){
          localStorage.setItem('todos', JSON.stringify([]));
      } else {
          let todoLocal = JSON.parse(localStorage.getItem('todos'));
          setTodos(todoLocal)
      }
  }

  return (

    <div className="todoapp">
        <Form
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
            />
        
        <TodoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
            />
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.filter(todo => todo.completed === false).length} items</strong> left
            </span>
            <ul className="filters">
                <li><button onClick={() => setStatus('all')}>All</button></li>&nbsp;&nbsp;&nbsp;
                <li><button onClick={() => setStatus('active')}>Active</button></li>&nbsp;&nbsp;&nbsp;
                <li><button onClick={() => setStatus('completed')}>Completed</button></li>
            </ul>
            
            <button className={todos.some(e => e.completed === true) ? "clear-completed" : "invisible"}
                onClick={() => setTodos(todos.filter(todo => todo.completed === false))}>
                Clear completed
            </button>
            
            
        </footer>
    </div>
   
  );
}

export default App;
