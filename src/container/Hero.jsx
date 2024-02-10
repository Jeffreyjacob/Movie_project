
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useGetTrendingMoviesQuery } from '../redux/services/Tmdb';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Button from './Button';
import {PlayIcon} from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom'
import LoaderComponent from './Loader';

const Hero = () => {
    const { data: Trending, isFetching, error } = useGetTrendingMoviesQuery();
    const trendingMovies = Trending?.results?.slice(0, 5);
   if(isFetching) return <LoaderComponent/>
    return (
        <div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    trendingMovies?.map((movie, i) => (
                        <div>
                            <SwiperSlide className='bg-cover  h-full max-lg:px-6 py-10'
                              key={movie?.id}
                              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),
                                  url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` }}>

                                <div className='mt-5 max-lg:mt-[120px] flex justify-center'>
                                <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                                 className='w-[750px]'/>
                                </div>

                                <div className='flex  justify-center mt-7 mb-8 font-roboto-condensed'>
                                <div>
                                <h1 className='max-lg:text-4xl text-6xl font-extrabold text-white font-sans '>{movie?.title || movie?.name}</h1>
                                <div className='flex gap-4 mt-5 '>
                                <p className='border w-fit px-3 py-2 text-sm  text-white'>PG-14</p>  
                                <p className='bg-red-600 px-4 py-2 text-sm text-white w-fit'>Action</p> 
                                </div>
                                <p className='text-base text-white  mt-4 max-md:max-w-[300px] max-w-[750px] line-clamp-2'>{movie?.overview}</p>
                                <p className='text-white mt-4 text-sm '><span className='text-red-600 font-bold'>Release date:</span> {movie?.release_date}</p>
                                <p className='text-white mt-4 text-sm '><span className='text-red-600 font-bold'>IMDB:</span> {movie?.vote_average}</p>
                                 <div className='mt-8'>
                                 <Link to={`/movieDetails/${movie?.id}`}>
                                 <Button title='Play now' icon={<PlayIcon className='w-7 h-7 text-white'/>}/>
                                 </Link>
                                 </div>
                                </div>                                
                                                               
                            </div>
                            </SwiperSlide>
                        </div>
                    ))
                }

            </Swiper>

        
        </div>
    )
}

export default Hero