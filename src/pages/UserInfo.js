/* import { useState, useEffect  } from "react";
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
      <div>
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

      </div>
    );
  }
  
  
  export default UserInfo; */



  import React, { useState, useEffect } from "react";
import './userinfo.css';

function UserInfo() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('username'));

    if (storedUserData) {
      setUser(storedUserData);
    }
  }, []);

  const handleFieldClick = (field) => {
    setIsEditing(true);
    setEditedUser({ ...user, [field]: user[field] });
  };

  const handleFieldChange = (e, field) => {
    setEditedUser((prevUser) => ({ ...prevUser, [field]: e.target.value }));
  };

  const handleSave = async () => {
    // Save the edited user information to localStorage or an API
    // Here, we are just updating the state for demonstration purposes
    try {
      const response = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedUser),
      });

      if (response.ok) {
        setUser(editedUser);
        setIsEditing(false);
        localStorage.setItem('username', JSON.stringify(editedUser));
        alert('Info updated successfully');
      } else {
        throw new Error('Failed to update the info');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while updating the info');
    }

  };

  return (
    <div>
      <div className="user-info-container">
        {user ? (
          <div>
            <h2>{user.name}</h2>
            <h3>Contact Information</h3>
            <p onClick={() => handleFieldClick("email")}>
              Email: {isEditing ? (
                <input
                  type="text"
                  value={editedUser.email}
                  onChange={(e) => handleFieldChange(e, "email")}
                />
              ) : (
                user.email
              )}
            </p>
            <p onClick={() => handleFieldClick("phone")}>
              Phone: {isEditing ? (
                <input
                  type="text"
                  value={editedUser.phone}
                  onChange={(e) => handleFieldChange(e, "phone")}
                />
              ) : (
                user.phone
              )}
            </p>
            <p onClick={() => handleFieldClick("website")}>
              Website: {isEditing ? (
                <input
                  type="text"
                  value={editedUser.website}
                  onChange={(e) => handleFieldChange(e, "website")}
                />
              ) : (
                user.website
              )}
            </p>
            <h3>Address</h3>
            <p onClick={() => handleFieldClick("street")}>
              Street: {isEditing ? (
                <input
                  type="text"
                  value={editedUser.street}
                  onChange={(e) => handleFieldChange(e, "street")}
                />
              ) : (
                user.street
              )}
            </p>
            <p onClick={() => handleFieldClick("suite")}>
              Suite: {isEditing ? (
                <input
                  type="text"
                  value={editedUser.suite}
                  onChange={(e) => handleFieldChange(e, "suite")}
                />
              ) : (
                user.suite
              )}
            </p>
            <p onClick={() => handleFieldClick("city")}>
              City: {isEditing ? (
                <input
                  type="text"
                  value={editedUser.city}
                  onChange={(e) => handleFieldChange(e, "city")}
                />
              ) : (
                user.city
              )}
            </p>
            <h3>Company</h3>
            <p onClick={() => handleFieldClick("company_name")}>
              Company Name: {isEditing ? (
                <input
                  type="text"
                  value={editedUser.company_name}
                  onChange={(e) => handleFieldChange(e, "company_name")}
                />
              ) : (
                user.company_name
              )}
            </p>
          </div>
        ) : (
          <p className="loading-message">Loading user data...</p>
        )}
      </div>
      {isEditing && (
        <button onClick={handleSave}>Save</button>
      )}
    </div>
  );
}

export default UserInfo;
