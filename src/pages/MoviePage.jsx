import React from 'react'
import HeaderDetails from '../container/HeaderDetails'
import { useGetPopularMoviesQuery } from '../redux/services/Tmdb'
import MovieCard from '../container/MovieCard';
import LoaderComponent from '../container/Loader';

const MoviePage = () => {
    const {data,isFetching,error} = useGetPopularMoviesQuery();
    if(isFetching) return <LoaderComponent/>
  return (
    <div>
        <HeaderDetails
        MainTitle='Movies'
        subTitle='movie'/>
         
         <div className='flex justify-center mt-8 mb-8'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    data?.results.map((movie) => (
                        <div>
                            {
                            movie?.backdrop_path && 
                           (<div key={movie?.id} className='lg:w-[300px] md:w-[370px] w-[100%] px-7 py-5'>
                            <MovieCard
                                ImgId={movie?.backdrop_path}
                                Title={movie?.title || movie?.name}
                                movieid={movie?.id}
                                genre={movie?.genre_ids[0]} 
                                rating={movie?.vote_average}
                                similarMovie={true} />
                        </div>)
                        }
                        </div>
                        
                    ))
                }
            </div>
            </div>

    </div>
  )
}

export default MoviePage