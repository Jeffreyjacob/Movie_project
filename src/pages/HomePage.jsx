import React from 'react'
import Hero from '../container/Hero'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Pagination } from 'swiper/modules';
import Button from '../container/Button';
import { useGetNowPlayingMoviesQuery, useGetTopRatedMoviesQuery,
     useGetTopRatedTvseriesQuery, useGetUpcomingMoviesQuery } from '../redux/services/Tmdb';
import MovieCard from '../container/MovieCard';
import LoaderComponent from '../container/Loader';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const navigate = useNavigate();
    const {data:NowPlaying,isFetching:isFetchingNowPlaying,error:errorNowplaying} = useGetNowPlayingMoviesQuery();
    const {data:TopRated,isFetching:isFetchingTopRated,error:errorTopRated} = useGetTopRatedMoviesQuery();
    const {data:Upcoming,isFetching:isFetchingUpcoming,error:errorUpcoming} = useGetUpcomingMoviesQuery();
    const {data:TopRatedTvseries,isFetching:isFetchingTvseries,error:errorTvseries} = useGetTopRatedTvseriesQuery();
    const NowplayingMovie = NowPlaying?.results?.slice(0,10);
    const TopRatedMovie = TopRated?.results?.slice(0,10);
    const Upcomingmovie = Upcoming?.results.slice(0,10);
    const TvSeries = TopRatedTvseries?.results?.slice(0,15)
    console.log(TvSeries)
     if(isFetchingNowPlaying,isFetchingTopRated,
        isFetchingUpcoming,isFetchingTvseries) return <LoaderComponent/>;
     
    return (
        <div className='flex flex-col w-full justify-center bg-[#161616]'>
            <Hero />
            {/* NowPlaying Movie section */}
            <div className='lg:flex lg:justify-center pb-7'>
                <div className='lg:w-[900px] max-lg:px-8 mt-8 font-roboto-condensed'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl text-white font-extrabold'>Now Playing</h3>
                    <div className='max-sm:hidden'onClick={()=>navigate('/movie')}>
                    <Button title='More Videos'/>
                    </div>
                </div>
                 <Swiper slidesPerView='auto' spaceBetween={15} freeMode centeredSlidesBounds
                    className="mt-4"
                    >
                     {
                        NowplayingMovie?.map((movie)=>(
                            <SwiperSlide
                            style={{width:"300px"}}
                             key={movie?.id}>
                              <MovieCard
                               Title={movie?.title || movie?.name}
                              ImgId={movie?.backdrop_path} 
                              movieid={movie?.id}
                              rating={movie?.vote_average}
                              genre={movie?.genre_ids[0]}
                              />
                            </SwiperSlide>
                           
                        ))
                     }
                    </Swiper>
                </div>
            </div>
            {/* Top Rated Movie section*/}
    
             <div className='lg:flex lg:justify-center pb-7'>
                <div className='lg:w-[900px] max-lg:px-8 mt-8 font-roboto-condensed'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl text-white font-extrabold'>Top Rated</h3>
                    <div className='max-sm:hidden' onClick={()=>navigate('/movie')}>
                    <Button title='More Videos'/>
                    </div>
                </div>
                 <Swiper slidesPerView='auto' spaceBetween={15} freeMode centeredSlidesBounds
                    className="mt-4"
                    >
                     {
                        TopRatedMovie?.map((movie)=>(
                            <SwiperSlide
                            style={{width:"300px"}}
                             key={movie?.id}>
                              <MovieCard
                               Title={movie?.title || movie?.name}
                              ImgId={movie?.backdrop_path} 
                              movieid={movie?.id}
                              rating={movie?.vote_average}
                              genre={movie?.genre_ids[0]}
                              />
                            </SwiperSlide>
                           
                        ))
                     }
                    </Swiper>
                </div>
            </div>

            {/*Upcoming movies */}
            <div className='lg:flex lg:justify-center pb-16'>
                <div className='lg:w-[900px] max-lg:px-8 mt-8 font-roboto-condensed'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl text-white font-extrabold'>Upcoming </h3>
                    <div className='max-sm:hidden' onClick={()=>navigate('/movie')}>
                    <Button title='More Videos'/>
                    </div>
                </div>
                 <Swiper slidesPerView='auto' spaceBetween={15} freeMode centeredSlidesBounds
                    className="mt-4"
                    >
                     {
                        Upcomingmovie?.map((movie)=>(
                            <SwiperSlide
                            style={{width:"300px"}}
                             key={movie?.id}>
                              <MovieCard
                               Title={movie?.title || movie?.name}
                              ImgId={movie?.backdrop_path} 
                              movieid={movie?.id}
                              rating={movie?.vote_average}
                              genre={movie?.genre_ids[0]}
                              />
                            </SwiperSlide>
                           
                        ))
                     }
                    </Swiper>
                </div>
            </div>
            {/* tvseries */}
            <div className='lg:flex lg:justify-center pb-16'>
                <div className='lg:w-[900px] max-lg:px-8 mt-8 font-roboto-condensed'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl text-white font-extrabold'>Tv Series </h3>
                    <div className='max-sm:hidden' onClick={()=>navigate('/Tvshow')}>
                    <Button title='More Videos'/>
                    </div>
                </div>
                 <Swiper 
                  slidesPerView='auto' spaceBetween={15} freeMode centeredSlidesBounds
                  className="mt-4"
                  
                    >
                     {
                        TvSeries?.map((movie)=>(
                            <SwiperSlide
                             key={movie?.id}>
                              <MovieCard
                               Title={movie?.original_name}
                              ImgId={movie?.backdrop_path} 
                              movieid={movie?.id}
                              rating={movie?.vote_average}
                              genre={movie?.genre_ids[0]}
                              tvSeries = {true}
                              />
                            </SwiperSlide>
                           
                        ))
                     }
                    </Swiper>
                </div>
            </div>
    
        </div>
    )
}

export default HomePage