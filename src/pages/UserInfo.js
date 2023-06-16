import { useState, useEffect  } from "react";
import './userinfo.css'

function UserInfo() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const storedUserData = JSON.parse(localStorage.getItem('username'));

      if (storedUserData) {
        setUser(storedUserData);
      }
    }, []);

  
    return (
      <div className="user-info-container">
        {user ? (
          <div>
            <h2>{user.name}</h2> 
            <h3>Contact Information</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <h3>Address</h3>
            <p>Street: {user.street}</p>
            <p>Suite: {user.suite}</p>
            <p>City: {user.city}</p>
            <h3>Company</h3>
            <p>Company Name: {user.company_name}</p>
          </div>
        ) : (
          <p className="loading-message">Loading user data...</p>
        )}
      </div>
    );
  }
  
  
  export default UserInfo;