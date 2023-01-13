import React from 'react'
import icons from '../ultis/icons'

const { TbSearch} = icons

function SearchHeader() {
  return (
    <div className='w-full flex items-center'>
      <span className='h-10 pl-4 flex items-center justify-center bg-[#DDE4E4] rounded-l-[20px] text-gray-500'>
        <TbSearch size={24} />
      </span>
      <input
       type='text'
      className='outline-none w-full bg-[#DDE4E4] px-4 py-2 rounded-r-[20px] h-10 text-gray-500 '
      placeholder='Tìm kiếm bài hát, nghệ sĩm lời bài hát...'
      />
    </div>
  )
}

export default SearchHeader