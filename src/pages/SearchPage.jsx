import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSearchMovieQuery } from '../redux/services/Tmdb';
import HeaderDetails from '../container/HeaderDetails';
import LoaderComponent from '../container/Loader';
import SearchMoviecard from '../container/SearchMoviecard';

const SearchPage = () => {
    const { searchItem } = useParams();
    const { data: searchResult, isFetching: isFetchingSearch, error } = useGetSearchMovieQuery({ searchItem });
     if(isFetchingSearch) return <LoaderComponent/> 
    const filteredMovies = searchResult?.results?.filter((movie) => movie?.backdrop_path);
    console.log(filteredMovies)
    return (
        <div>
            <HeaderDetails
                MainTitle={`Search Result For : ${searchItem}`}
                subTitle={`Search Result For : ${searchItem}`} />
            <div className='flex justify-center mt-8'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    filteredMovies?.slice(0,10).map((movie) => (
                        <div>
                            {
                            movie?.backdrop_path && 
                           (<div key={movie?.id} className='lg:w-[300px] md:w-[370px] w-[100%] max-md:px-5 px-7 py-5'>
                            <SearchMoviecard
                                ImgId={movie?.backdrop_path}
                                Title={movie?.title || movie?.name}
                                movieid={movie?.id}
                                mediaType = {movie?.media_type}
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

export default SearchPage