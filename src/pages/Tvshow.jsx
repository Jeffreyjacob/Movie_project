import React from 'react'
import HeaderDetails from '../container/HeaderDetails';
import MovieCard from '../container/MovieCard';
import { useGetTrendingTvseriesQuery } from '../redux/services/Tmdb';
import LoaderComponent from '../container/Loader';

const Tvshow = () => {
    const {data,isFetching,error} = useGetTrendingTvseriesQuery();
    if(isFetching) return <LoaderComponent/>
    const filteredMovies = data?.results?.filter((movie) => movie?.backdrop_path);
    console.log(data)
    return (
        <div>
            <HeaderDetails
                MainTitle='TvShows'
                subTitle='TvShow' />


            <div className='flex justify-center mt-8 mb-8'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                    {
                        filteredMovies?.map((movie) => (
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
                                            similarMovie={true}
                                            tvSeries={true} />
                                            
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

export default Tvshow