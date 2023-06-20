import { useEffect, useState } from 'react';
import './todos.css';

function UserTodos() {
  const [todos, setTodos] = useState([]);
  const [order, setOrder] = useState('serial');
  const [newTodo, setNewTodo] = useState('');

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
  
  const handleAddTodo = async () => {
    try {
      const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, title: newTodo, completed: false }),
      });
      const data = await response.json();
      console.log('New Todo:', data);
      setNewTodo('');
      // Fetch updated todos from the server
      fetchTodosFromServer();
    } catch (error) {
      console.error(error);
      alert('An error occurred while adding the todo');
    }
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
      <div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );

}

export default UserTodos;