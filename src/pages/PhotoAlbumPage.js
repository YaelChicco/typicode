import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './photoAlbum.css';

function PhotoAlbumPage() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(() => {
    const savedData = localStorage.getItem('photoData');
    if (savedData) {
      const { savedAlbumId, savedIndex } = JSON.parse(savedData);
      if (savedAlbumId === albumId) {
        return savedIndex;
      }
    }
    return 0;
  });

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_start=${currentPhotoIndex}&_limit=1`
        );
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error(error);
        alert('An error occurred while fetching photos');
      }
    };

    fetchPhoto();
    console.log(currentPhotoIndex);
  }, [albumId, currentPhotoIndex]);

  useEffect(() => {
    localStorage.setItem('photoData', JSON.stringify({ savedAlbumId: albumId, savedIndex: currentPhotoIndex }));
  }, [albumId, currentPhotoIndex]);

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => prevIndex - 1);
  };

  const currentPhoto = photos[0];

  return (
    <div className="album-photos">
      <h2>Album Photos</h2>
      {photos.length > 0 ? (
        <>
          <img src={currentPhoto.url} alt={currentPhoto.title} />
          <p>{currentPhoto.title}</p>
          <div className="navigation-buttons">
            <button onClick={handlePreviousPhoto} disabled={currentPhotoIndex === 0}>
              Previous
            </button>
            <button onClick={handleNextPhoto}>Next</button>
          </div>
        </>
      ) : (
        <p>Loading photo...</p>
      )}
      <div className="back-link">
        <Link to={`/users/${albumId}/albums`}>Back to Albums</Link>
      </div>
    </div>
  );
}

export default PhotoAlbumPage;
