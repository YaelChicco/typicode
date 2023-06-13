import { useEffect, useState } from 'react';
import {  useNavigate  } from 'react-router-dom';

import './posts.css';


function UserPosts() {
  const [posts, setPosts] = useState(null);
  const[comments,setComments]=useState();
  const [expandedPostId, setExpandedPostId] = useState(null);
  const userName=JSON.parse(localStorage.getItem("username")).name;
  const userId=JSON.parse(localStorage.getItem("username")).id;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
        alert('An error occurred while fetching posts');
      }
    };

    fetchPosts();
  }, [userId]);

  const handleClick = async (postId) => {
    navigate(`/users/${userId}/posts/${postId}/comments`);
    setExpandedPostId(postId);
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
