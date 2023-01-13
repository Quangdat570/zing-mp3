import React from 'react'
import icons from '../ultis/icons'
import SearchHeader from './SearchHeader'

const {HiOutlineArrowLeft,HiOutlineArrowRight } = icons

function Header() {
  return (
    <div className='flex justify-between w-full items-center'>
        <div className='flex gap-6 w-full items-center'>
            <div className='flex gap-6 text-gray-400'>
                <span>
                    <HiOutlineArrowLeft size={24}/>
                </span>
                <span>
                    <HiOutlineArrowRight size={24}/>
                </span>
                
            </div>

            <div className='w-1/2'>
                <SearchHeader/>
            </div>
        </div>

        <div>
            Login
        </div>
    </div>
  )
}

export default Header