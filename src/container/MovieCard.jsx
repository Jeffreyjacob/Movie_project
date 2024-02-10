import React from 'react'

import {PlayCircleIcon,HeartIcon, ShareIcon, PlusIcon} from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { useGetMovieGenreQuery } from '../redux/services/Tmdb';

const MovieCard = ({ ImgId, Title,movieid,genre,rating,similarMovie,tvSeries,mediaType}) => {
    const {data} = useGetMovieGenreQuery();
    const foundGenre = data?.genres.find((genresInfo) => genresInfo.id === genre);

    return (
        <div className='flex flex-col'>
            <div className='relative group'>
                <img src={`https://image.tmdb.org/t/p/original/${ImgId}`} className='w-full h-auto relative' />
                <div className="absolute inset-0 bg-black opacity-20 
                transition-opacity group-hover:opacity-50"></div>

                <div className="absolute inset-0 flex items-center justify-center 
                 opacity-0 group-hover:opacity-100">
                    <Link to={tvSeries ? `/tvshowdetails/${movieid}/${Title}`:`/movieDetails/${movieid}`}>
                    <PlayCircleIcon className='w-16 h-16 text-red-600' />
                    </Link>
                </div>
                <div className='absolute bottom-3 right-24 '>
                 <HeartIcon className='w-6 h-6 text-white'/>
                </div>
                <div className='absolute bottom-3 right-14'>
                    <ShareIcon className='w-6 h-6 text-white'/>
                </div>
                <div className='absolute bottom-3 right-4'>
                    <PlusIcon className='w-6 h-6 text-white'/>
                </div>
            </div>

            <div style={similarMovie  && {backgroundColor:"#221f1f",
            height:"100px",paddingLeft:"15px",paddingRight:"15px"}}>
            <p className='text-white leading-normal text-xl mt-2'>{Title}</p>
             <div className='flex items-center gap-4'>
             <p className='text-white leading-normal text-sm'>
                <span className='text-red-600'>IMDB</span> {rating}
             </p>
             <p className='text-red-600 leading-normal text-sm font-extrabold'>.{foundGenre?.name}</p>
            </div>
         
             </div>
           

        </div>
    )
}

export default MovieCard