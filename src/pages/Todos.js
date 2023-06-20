/* import { useEffect, useState } from 'react';
import './todos.css';

function UserTodos() {
  const [todos, setTodos] = useState([]);
  const [order, setOrder] = useState('serial');
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoCompleted, setNewTodoCompleted] = useState(false);
  const userId=JSON.parse(localStorage.getItem("username")).id;

  const todosOrderOptions = [
    { value: 'serial', label: 'Serial' },
    { value: 'execution', label: 'Execution' },
    { value: 'alphabetical', label: 'Alphabetical' },
    { value: 'random', label: 'Random' },
  ];

  // Fetch todos from the server or retrieve them from localStorage
  const fetchTodosFromServer = async () => {
    try {
      const response = await fetch(`http://localhost:3000/todos?userId=${userId}`);
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
    });
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleOrderChange = (e) => {
    const selectedOrder = e.target.value;
    setOrder(selectedOrder);
    localStorage.setItem('order', selectedOrder);
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: newTodoTitle,
      completed: newTodoCompleted,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNewTodoTitle('');
    setNewTodoCompleted(false);
  };

  let sortedTodos = todos;

  if (order === 'serial') {
    sortedTodos = todos.sort((a, b) => a.id - b.id);
  } else if (order === 'execution') {
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

      <input
        type="text"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
        placeholder="Enter todo title"
      />
      <label>
        <input
          type="checkbox"
          checked={newTodoCompleted}
          onChange={(e) => setNewTodoCompleted(e.target.checked)}
        />
        Completed
      </label>
      <button onClick={handleAddTodo}>Add Todo</button>

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
 */

import { useEffect, useState } from 'react';
import './todos.css';

function UserTodos() {
  const [todos, setTodos] = useState([]);
  const [order, setOrder] = useState('serial');

  const userId = JSON.parse(localStorage.getItem("username")).id;

  const fetchTodosFromServer = async () => {
    try {
      const response = await fetch(`http://localhost:3000/todos?userId=${userId}`);
      const data = await response.json();
      setTodos(Array.from(data));
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
    });
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleEdit = async (todo) => {
    const newTitle = prompt('Enter the new title:', todo.title);
    if (newTitle === null) return; // User clicked cancel

    const updatedTodo = { ...todo, title: newTitle };

    try {
      const response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodo),
      });

      if (response.ok) {
        // Update the todos state with the updated todo
        const updatedTodos = todos.map((t) => (t.id === todo.id ? updatedTodo : t));
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        alert('Todo updated successfully');
      } else {
        throw new Error('Failed to update the todo');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while updating the todo');
    }
  };
  
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
        localStorage.setItem('todos', JSON.stringify(filteredTodos));
        alert('Todo deleted successfully');
      } else {
        throw new Error('Failed to delete the todo');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while deleting the todo');
    }
  };

  return (
    <div>
      <h2>Todos</h2>

      {todos ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? 'completed' : 'incomplete'}>
              <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
              {todo.title}
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>

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