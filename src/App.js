import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbars from './container/Navbar';
import MovieDetails from './pages/MovieDetails';
import Footer from './container/Footer';
import "rsuite/dist/rsuite.css";
import SearchPage from './pages/SearchPage';
import MoviePage from './pages/MoviePage';
import Tvshow from './pages/Tvshow';
import TvseriesDetails from './pages/TvseriesDetails';

function App() {
  return (
    <div className='bg-[#161616]'>
      <Navbars/>
     <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/movieDetails/:movieId' element={<MovieDetails/>}/>
       <Route path='/Search/:searchItem' element={<SearchPage/>}/>
       <Route path='/movie' element={<MoviePage/>}/>
       <Route path='/tvshow' element={<Tvshow/>}/>
       <Route path='/tvshowdetails/:tvseriesId/:tvseriesName' element={<TvseriesDetails/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
