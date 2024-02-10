import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useGetRelatedMoviesQuery } from '../redux/services/Tmdb';
import MovieCard from './MovieCard';
import { Pagination } from 'rsuite';

const RelatedMovies = ({IsFetchingRelatedMovie}) => {
  const { movieId } = useParams()
  const { data: similarMovie, isFetching, error } = useGetRelatedMoviesQuery({ movieId })
  const filteredMovies = similarMovie?.results?.filter((movie) => movie?.backdrop_path);
  console.log(similarMovie);
   IsFetchingRelatedMovie = isFetching
  return (
    <div>
      <h1 className='text-white text-4xl max-md:text-2xl 
        leading-normal capitalize font-extrabold'>
        More like this
      </h1>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {
          filteredMovies?.map((movie) => (
            <div key={movie?.id} className='lg:w-[300px] md:w-[370px] w-[100%] px-3 py-5'>
               <MovieCard 
               ImgId={movie?.backdrop_path}
               Title={movie?.title || movie?.name}
               movieid={movie?.id}
               genre={movie?.genre_ids[0]} 
               rating={movie?.vote_average}
               similarMovie={true}/>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default RelatedMovies;