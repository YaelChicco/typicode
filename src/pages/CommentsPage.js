import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CommentsPage.css'

function CommentsPage() {
  const {  postId } = useParams();
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error(error);
        alert('An error occurred while fetching comments');
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <div className="comments-container">
      <h2>Comments</h2>
      {comments ? (
        <ul className="comments-list">
          {comments.map(comment => (
            <li key={comment.id} className="comment-item">
              <h3 className="comment-name">{comment.name}</h3>
              <p className="comment-body">{comment.body}</p>
              <div className="comment-buttons">
                <button className="comment-like-btn">Like</button>
                <button className="comment-unlike-btn">Unlike</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading comments...</p>
      )}
    </div>
  );
}

export default CommentsPage;
