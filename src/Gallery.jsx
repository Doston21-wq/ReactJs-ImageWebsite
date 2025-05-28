import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useGlobalContext } from './context';

const url = 'https://api.unsplash.com/search/photos?client_id=xH2dss2cIxvpVJ1yiprAgYw0DWIcu3JBtgqVuVT4iaM';

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const { data, isError, isLoading } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${searchTerm}`);
      return response.data;
    }
  });

  if (isLoading) {
    return (
      <section className='image-container'>
        <h1>Loading...</h1>
      </section>
    );
  }

  if (isError) {
    return (
      <section className='image-container'>
        <h1>Error...</h1>
      </section>
    );
  }

  return (
    <section className='image-container'>
      {data.results.map((item) => {
        const imgUrl = item?.urls?.regular;
        return (
          <img
            key={item.id}
            src={imgUrl}
            className='img'
            alt={item.alt_description || 'unsplash image'}
          />
        );
      })}
    </section>
  );
};

export default Gallery;
