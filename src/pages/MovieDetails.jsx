import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetMovieDetailsQuery, useGetMovieVideoQuery } from '../redux/services/Tmdb';
import LoaderComponent from '../container/Loader';
import { millify } from 'millify';
import RelatedMovies from '../container/RelatedMovies';


const MovieDetails = () => {
    const {movieId} = useParams();
    const {data:movieDetails,isFetching:isFetchingMovieDetails,error} = useGetMovieDetailsQuery({movieId});
    const {data:videoDetails,isFetching:isFetchingVideo,error:videoError} = useGetMovieVideoQuery({movieId});
    const videoKey = videoDetails?.results[0]?.key
    let isFetchingRelated
    if(isFetchingMovieDetails,isFetchingVideo,isFetchingRelated) return <LoaderComponent/> 
  return (
    <div  className='w-full md:flex md:justify-center  max-lg:px-7 font-roboto-condensed mb-8'>
        <div className='pt-20 '>
          <div className='flex justify-center'>
          <iframe
        src={`https://www.youtube.com/embed/${videoKey}`}
        title="YouTube video player" 
        className='lg:w-[800px] max-lg:w-[100%] h-[380px]'
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
        </iframe>
          </div>
        <div className='mt-9 mb-12 pb-12 border-b-2 border-red-600'>
          <h1 className='text-white text-5xl font-extrabold'>
            {movieDetails?.title || movieDetails?.original_title }
            </h1>
            <p className='text-white text-lg mt-5 max-md:text-md lg:max-w-3xl leading-normal'>
              {movieDetails?.overview}
            </p>
            <p className='text-white text-lg mt-6 max-md:text-sm '>
              <span className='pr-14'>Language</span> {movieDetails?.spoken_languages?.map((language)=>(
                <span key={language.english_name}>{language?.english_name},</span>
              ))}
            </p>
            <p className='text-white text-lg max-md:text-sm leading-normal mt-2'>
              <span className='pr-[74px]'>Tagline</span> {movieDetails?.tagline}
            </p>
            <p className='text-white text-lg max-md:text-sm leading-normal mt-2'>
              <span className='pr-20'>Genres</span>
              {
                movieDetails?.genres.map((genre)=>(
                  <span className='text-red-600' key={genre.id}>{genre.name},</span>
                ))
              }
            </p>
            <p className='text-white text-lg max-md:text-sm mt-2'>
              <span className='pr-16'>RunTime</span>
              {movieDetails?.runtime}mins
            </p>
            <p className='text-white text-lg max-md:text-sm mt-2'>
              <span className='pr-9'>Release Date</span>
              {movieDetails?.release_date}
            </p>
            <p className='text-white text-lg max-md:text-sm mt-2'>
              <span className='pr-16'>Revenue</span>
              ${millify(movieDetails?.revenue)}
            </p>
        </div>

        <RelatedMovies IsFetchingRelatedMovie={isFetchingRelated}/>
        </div>
        

    </div>
  )
}

export default MovieDetails