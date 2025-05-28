import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useGlobalContext } from './context';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

const url = 'https://api.unsplash.com/search/photos?client_id=xH2dss2cIxvpVJ1yiprAgYw0DWIcu3JBtgqVuVT4iaM&per_page=20';

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const [likedImages, setLikedImages] = useState(new Set());

  const { data, isError, isLoading } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${searchTerm}`);
      return response.data;
    },
    keepPreviousData: true,
  });

  const toggleLike = (id) => {
    setLikedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  if (isLoading) {
    return (
      <section className="image-container loading">
        <div className="spinner"></div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h1>Error...</h1>
      </section>
    );
  }

  if (data.results.length === 0) {
    return (
      <section className="image-container">
        <h2>No images found for "{searchTerm}"</h2>
      </section>
    );
  }
const downloadImage = (url, filename = 'downloaded-image.jpg') => {
  
  fetch(url)
    .then(response => response.blob())  
    .then(blob => {

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;

     
      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(blobUrl);
    })
    .catch(() => alert('Rasmni yuklab olishda xatolik yuz berdi!'));
};

  return (
    <section className="image-container">
      {data.results.map(item => {
        const imgUrl = item.urls.regular;
        const liked = likedImages.has(item.id);
        return (
          <div key={item.id} className="img-wrapper">
            <img
              src={imgUrl}
              className="img"
              alt={item.alt_description || 'unsplash image'}
            />
           
            <button
              className={`like-btn top ${liked ? 'liked' : ''}`}
              onClick={() => toggleLike(item.id)}
            >
              {liked ? <BsHeartFill /> : <BsHeart />}
            </button>
     <button
  className="download-btn"
  onClick={() => downloadImage(item.urls.full, `${item.id}.jpg`)}
>
  Download
</button>

           
          </div>
        );
      })}
    </section>
  );
};

export default Gallery;
