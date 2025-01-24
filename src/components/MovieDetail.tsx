'use client'
import { Image } from '@heroui/react'
import React from 'react'

export const MovieDetail = ({movie} : any) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} width={270} />
      <p>{movie.overview}</p>
    </div>
  )
}
