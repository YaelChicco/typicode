import { useEffect, useState } from 'react';
import './todos.css';
 
function UserTodos() {
  const [todos, setTodos] = useState([]);
  const [order, setOrder] = useState('serial');

  const todosOrderOptions = [
    { value: 'serial', label: 'Serial' },
    { value: 'execution', label: 'Execution' },
    { value: 'alphabetical', label: 'Alphabetical' },
    { value: 'random', label: 'Random' },
  ];

  const userId=JSON.parse(localStorage.getItem("username")).id;

  const fetchTodosFromServer = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
      const data = await response.json();
      setTodos(data);
      localStorage.setItem('todos', JSON.stringify(data));
    } catch (error) {
      console.error(error);
      alert('An error occurred while fetching todos');
    }
  };


  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    const savedOrder = localStorage.getItem('order');
    if (savedTodos && savedTodos.length) {
      setTodos(savedTodos);
    } else {
      fetchTodosFromServer();
    }

    if (savedOrder) {
      setOrder(savedOrder);
    }
  }, []);


  
  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const updatedTodo = { ...todo, completed: !todo.completed };
        return updatedTodo;
      }
      return todo;
    } )
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };
  

  const handleOrderChange = (e) => {
    const selectedOrder = e.target.value;
    setOrder(selectedOrder);
    localStorage.setItem('order', selectedOrder);
  };


  let sortedTodos = todos;

  if (order === 'serial') {
    sortedTodos = todos.sort((a, b) => a.id - b.id);
  }else if(order === 'execution') {
    sortedTodos = todos.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? -1 : 1));
  } else if (order === 'alphabetical') {
    sortedTodos = todos.sort((a, b) => a.title.localeCompare(b.title));
  } else if (order === 'random') {
    sortedTodos = todos.sort(() => Math.random() - 0.5);
  }

  return (
    <div>
      <h2>Todos</h2>
      
      <label>Order by:</label>
      <select value={order} onChange={handleOrderChange}>
        {todosOrderOptions.map((option) => (
        <option key={option.value} value={option.value}>
        {option.label}
        </option>
        ))}
      </select>

       {todos ? (
        <ul>
           {sortedTodos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : 'incomplete'}>
            <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
            {todo.title}
          </li>
        ))}

        </ul>
      ) : (
        <p>Loading todos...</p>
      )} 
    </div>
  );
}

export default UserTodos;
