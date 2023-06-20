import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './posts.css';

function UserPosts() {
  const [posts, setPosts] = useState(null);
  const [expandedPostId, setExpandedPostId] = useState(null);
  const userName = JSON.parse(localStorage.getItem("username")).name;
  const userId = JSON.parse(localStorage.getItem("username")).id;
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/posts?userId=${userId}`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
      alert('An error occurred while fetching posts');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [userId]);

  const handleClick = async (postId) => {
    navigate(`/users/${userId}/posts/${postId}/comments`);
    setExpandedPostId(postId);
  };

  const handleEdit = async (post) => {
    const newTitle = prompt('Enter the new title:', post.title);
    if (newTitle === null) return; // User clicked cancel

    const updatedPost = { ...post, title: newTitle };

    try {
      const response = await fetch(`http://localhost:3000/posts/${post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
      });

      if (response.ok) {
        // Update the posts state with the updated post
        const updatedPosts = posts.map((p) => (p.id === post.id ? updatedPost : p));
        setPosts(updatedPosts);
        alert('Post updated successfully');
      } else {
        throw new Error('Failed to update the post');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while updating the post');
    }
    
  };

  const handleDelete = async (postId) => {
  
    try {
      const response = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchPosts();
      } else {
        console.error(`Error deleting post with ID ${postId}`);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while deleting the post');
    }
  };

  return (
    <div className='posts'>
      <h2>{userName}'s Posts</h2>
      {posts ? (
        <div className="post-list">
          {posts.map(post => (
            <div className={` ${post.id === expandedPostId ? 'expanded' : 'post-container'}`} key={post.id}>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-body">{post.body}</p>
              <button onClick={() => handleClick(post.id)}>View Comments</button>
              <button onClick={() => handleEdit(post)}>Edit</button>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
}

export default UserPosts;