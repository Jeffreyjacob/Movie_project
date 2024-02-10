
import { UserIcon,MagnifyingGlassIcon,Bars3Icon,XMarkIcon} from '@heroicons/react/20/solid'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbars = () => {
    const [ShowSearchBar, setShowSearchBar] = useState(false)
    const [searchValue,setSearchValue] = useState("")
    const handleSearchChange = (value)=>{
      setSearchValue(value)
    }
    const navigate = useNavigate();
    const navigateToSearchPage = ()=>{
      setShowSearchBar(false);
      navigate(`/Search/${searchValue}`)
    }
  return (
    <div className='flex justify-between max-lg:px-6 px-[100px] py-4 
     absolute z-10  bg-transparent shadow-xl w-full'>
      <img 
      src='https://preview.gentechtreedesign.com/streamlab/red-demo/wp-content/uploads/sites/2/2021/02/Logo-2.png'
      width={200}
      height={200}
      className='object-contain'
      />
      <ul className='flex flex-1 justify-center items-center text-3xl 
      gap-6 text-white max-lg:hidden font-roboto-condensed '>
        <Link to='/'>
        <li className='text-white'>Home</li>
        </Link>
        <Link to='/movie'>
        <li className='text-white'>Movie</li>
        </Link>
        <Link to='/tvshow'>
        <li className='text-white'>Tv Show</li>
        </Link>
        <li>Video</li>
      </ul>
      <div className='flex relative justify-center items-center gap-4'>
      <div className='max-lg:hidden'>
        {
            ShowSearchBar ? <XMarkIcon className='w-7 h-7 text-white font-bold' 
            onClick={()=>setShowSearchBar(false)}/>:
            <MagnifyingGlassIcon className='w-7 h-7 text-white font-bold'
            onClick={()=>setShowSearchBar(true)}/>
        }
      </div>
          {
            ShowSearchBar && (
                
      <div className='absolute -bottom-[100px] right-[40px]
      bg-[#221f1f] py-4 px-4 text-white flex flex-1  '>
         <input type='text' placeholder='Search...' className='w-[250px] text-white
          bg-[#161616] px-4' onChange={(e)=>handleSearchChange(e.target.value)}/>
         <button className='px-4 py-4 bg-red-600'>
            <MagnifyingGlassIcon 
            className='w-5 h-5 text-white font-bold' 
            onClick={navigateToSearchPage} />
         </button>
     </div>
            )
          }

      <div className='px-3 py-3 rounded-full bg-red-600'>
        <UserIcon className='text-white w-7 h-7'/>
      </div>

        <div className='lg:hidden py-3 px-3 bg-red-600'>
           <Bars3Icon className='text-white w-7  h-7'/>
        </div>
      </div>
    </div>
  )
}

export default Navbars;