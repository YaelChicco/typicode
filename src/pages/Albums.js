import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './albums.css'

//import './albums.css';


function UserAlbums() {
  const [albums, setAlbums] = useState([]);
  
  const userId=JSON.parse(localStorage.getItem("username")).id;

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error(error);
        alert('An error occurred while fetching albums');
      }
    };

    fetchAlbums();
  }, [userId]);


  return (
    <div className='albums'>
      <h2>Albums</h2>
       {albums ? (
        <div className="albums-list">
          {albums.map(album => (
           <div className='album' key={album.id}>
              <Link to={`/users/${userId}/albums/${album.id}/photos`}>{album.title}</Link>
          </div>
          ))}
        </div>
      ) : (
        <p>Loading albums...</p>
      )} 
    </div>
  );
}

export default UserAlbums;
