import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './appPage.css'
function ApplicationPage() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('username')));
  let navigate=useNavigate();
  
  const handleLogout=()=>{
    localStorage.clear();
    navigate("/login");
  }
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`/users/${user.id}/info`}>Info</Link>
            </li>
            <li>
              <Link to={`/users/${user.id}/todos`}>Todos</Link>
            </li>
            <li>
              <Link to={`/users/${user.id}/posts`}>Posts</Link>
            </li>
            <li>
              <Link to={`/users/${user.id}/albums`}>Albums</Link>
            </li>
            
            <button className="logout" onClick={handleLogout}>Logout</button>

          </ul>
        </nav>

        <h1>Welcome, {user.name}!</h1>
        
      </div>
    );
  }

  export default ApplicationPage;
