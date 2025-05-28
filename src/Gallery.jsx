import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
const url='https://api.unsplash.com/search/photos?client_id=xH2dss2cIxvpVJ1yiprAgYw0DWIcu3JBtgqVuVT4iaM&query=cat'
const Gallery = () => {
  const {data, isError, isLoading} = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const results = axios.get(url)
      return (await results).data
    }
  })
  if(isLoading){
    return 
    <section className='Image-contanier'>
      <h1>loading...</h1>
    </section>
  }

if(isError){
    return 
    <section className='Image-contanier'>
      <h1>Error...</h1>
    </section>
  }

  
  return (
    <div>Gallery</div>
  )
}

export default Gallery