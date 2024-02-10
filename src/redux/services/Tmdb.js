import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTc3NGUwMzcxM2EzOWFhZmM3ZDAxNGZlNTQ2ZDViZiIsInN1YiI6IjY0YjdhYmYzZWVlMTg2MDEzYTY1N2I1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qLbJ84DFt_LVBFESNprrO3RxWnfj55GcATnvwfjZTiU"
export const TmdbCoreApi = createApi({
    reducerPath:"tmdbcoreApi",
    baseQuery:fetchBaseQuery({
        baseUrl:'https://api.themoviedb.org/3/',
        prepareHeaders: (headers)=> {
            headers.set('Authorization', `Bearer ${token}`);
            headers.set('Content-Type', 'application/json');
        return headers;
        }
    }),

    endpoints:(builder)=>({
        getTrendingMovies:builder.query({query:()=> `/trending/movie/day?language=en-US`}),

        getNowPlayingMovies:builder.query({query:()=> `/movie/now_playing?language=en-US`}),

        getMovieGenre:builder.query({query:()=>`/genre/movie/list?language=en`}),

        getTopRatedMovies:builder.query({query:()=> `/movie/top_rated?language=en-US`}),

        getUpcomingMovies:builder.query({query: ()=> `/movie/upcoming?language=en-US'`}),

        getMovieDetails:builder.query({query:({movieId})=> `/movie/${movieId}?language=en-US`}),

        getMovieVideo:builder.query({query:({movieId})=> `/movie/${movieId}/videos?language=en-US`}),

        getRelatedMovies:builder.query({query:({movieId})=> `movie/${movieId}/recommendations?language=en-US&limit=50`}),

        getSearchMovie:builder.query({query:({searchItem})=> `/search/multi?query=${searchItem}&include_adult=false&language=en-US&limit=10`}),
        
        getPopularMovies:builder.query({query:()=> `movie/popular?language=en-US&`}),

        getTopRatedTvseries:builder.query({query:()=>`tv/top_rated?language=en-US`}),

        getTvseriesDetail:builder.query({query:({tvseriesId})=>`tv/${tvseriesId}/season/1?language=en-US`}),

        getTvseriesVideo:builder.query({query:({tvseriesId})=>`/tv/${tvseriesId}/season/1/videos?language=en-US`}),

        getTrendingTvseries:builder.query({query:()=>`/trending/tv/day?language=en-US`}),

    
    })
});

export const {useGetTrendingMoviesQuery,useGetNowPlayingMoviesQuery,
    useGetMovieGenreQuery,useGetTopRatedMoviesQuery,useGetUpcomingMoviesQuery,
    useGetMovieDetailsQuery,useGetMovieVideoQuery,useGetRelatedMoviesQuery,
     useGetSearchMovieQuery,useGetPopularMoviesQuery,
     useGetTopRatedTvseriesQuery,useGetTvseriesDetailQuery,useGetTvseriesVideoQuery,
    useGetTrendingTvseriesQuery} = TmdbCoreApi;