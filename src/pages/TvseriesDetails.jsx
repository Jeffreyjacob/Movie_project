import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetTvseriesDetailQuery, useGetTvseriesVideoQuery } from '../redux/services/Tmdb';
import { SelectPicker, Stack } from 'rsuite';
import millify from 'millify';
import LoaderComponent from '../container/Loader';
import RelatedMovies from '../container/RelatedMovies';

const TvseriesDetails = () => {
  const { tvseriesId, tvseriesName } = useParams();
  const { data: tvDetails, isFetching: isFetchingMovieDetails, error } = useGetTvseriesDetailQuery({ tvseriesId });
  const {data:videoDetails,isFetching} = useGetTvseriesVideoQuery({tvseriesId});
  const videoKey = videoDetails?.results[0]?.key
  const [selectEpisode, setSelectEpisode] = useState("1")
  const FilterEpisode = tvDetails?.episodes?.find((episode) => episode?.episode_number == selectEpisode)
  console.log(videoDetails)
  if (isFetchingMovieDetails) return <LoaderComponent />
  return (
    <div className='w-full md:flex md:justify-center  max-lg:px-7 font-roboto-condensed mb-8 pt-[100px]'>

      <div className='mt-9 mb-12 pb-12 border-b-2 border-red-600  '>
        <div>
        <div className='flex justify-center mb-8'>
          <iframe
        src={`https://www.youtube.com/embed/${videoKey}`}
        title="YouTube video player" 
        className='lg:w-[800px] max-lg:w-[100%] h-[380px]'
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
        </iframe>
          </div>
          <h1 className='text-white text-5xl font-extrabold'>
            {tvseriesName}
          </h1>
          {
            tvDetails?.overview && 
            <p className='text-white text-lg mt-5 max-md:text-md lg:max-w-3xl leading-normal'>
            { tvDetails?.overview}
         </p>
          }
  
          <p className='text-white text-lg'>
            <span className='text-red-600 lg:pr-[80px] max-lg:pr-14'>Season</span>
            {tvDetails?.name}
          </p>
          <p className='text-white text-lg max-md:text-sm mt-2'>
            <span className='pr-9'>Release Date</span>
            {tvDetails?.air_date}
          </p>
          <p className='text-white text-lg max-md:text-sm mt-2'>
            <span className='pr-16'>Revenue</span>
            ${millify(tvDetails?.revenue)}
          </p>
          <div className='flex gap-9 mt-3'>
            <p className='text-red-600 text-lg'>Episode</p>
            <select className='w-[100px] rounded-md px-3' value={selectEpisode} onChange={(e) => setSelectEpisode(e.target.value)}>
              {
                tvDetails?.episodes?.map((episode) => (
                  <option >{episode.episode_number}</option>
                ))
              }
            </select>
          </div>
          <div>
            <p className='text-white mt-6 border-b-2
                 border-white leading-normal pb-3 w-full'>Episodes Details</p>

            <div className='lg:w-[420px] lg:h-[300px] mt-5 lg:flex lg:gap-3'>
              <img src={`https://image.tmdb.org/t/p/original/${FilterEpisode?.still_path}`} />
              <div>
                <h3 className='text-3xl text-white leading-normal max-lg:mt-4'>{FilterEpisode?.name}</h3>
                <p className='text-md text-white leading-normal lg:w-[340px] line-clamp-3'>{FilterEpisode?.overview}</p>
                <p className='text-md text-white'>
                  <span className='text-red-600 pr-4'>Runtime</span>
                  {FilterEpisode?.runtime} mins
                </p>
                <p className='text-md text-white leading-normal'>
                  <span className='text-red-600 pr-7'>Rating</span>
                  {FilterEpisode?.vote_average}
                </p>
                <p className='text-md text-white leading-normal'>
                  <span className='text-red-600 pr-7'>Actors</span>
                  {
                    FilterEpisode?.guest_stars?.map((actor) => (
                      <span className='pr-1'>{actor?.original_name},</span>
                    ))
                  }
                </p>
              </div>

            </div>

          </div>
        </div>


      </div>
        
     
    </div>
  )
}

export default TvseriesDetails