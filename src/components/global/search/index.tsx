'use client'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '@/redux/slices/searchTerm'

type Props = {}

const Search = (props: Props) => {

  const dispatch = useDispatch();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value)); // <-- This updates Redux state
  };

  return (
    <div className='flex overflow-hidden gap-x-2 border-[1px]
      border-[#3352CC] rounded-full px-4 py-1 items-center flex-1'>
        <SearchIcon color='#3352CC'/>
        <Input
          onChange={handleChange} 
          placeholder='Search by automation name or keyword'
          className='border-none outline-none ring-0 focus:ring-0 flex-1'/>
      </div>
  )
}

export default Search