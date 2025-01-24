import { MovieDetail } from '@/components/MovieDetail';
import { getMovieById } from '@/services/getMovieById';
import { Image } from '@heroui/react';
import React from 'react'

const page = async ({ params }: {params: {id: number}}) => {
  const id = params.id;
  const movie = await getMovieById(id);
  console.log(movie)
  return (
    <div>
      <MovieDetail movie={movie}/>
    </div>
  )
}

export default page