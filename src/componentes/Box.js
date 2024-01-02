import React from 'react'

export default function Box() {
  return (
    <div className=' flex flex-col gap-1 p-1'>
        <div className='flex  gap-x-1'>
            <p className=' w-4 h-4 text-emerald-600 bg-emerald-200 px-[3px]  text-xs font-semibold flex items-center justify-center' >E1</p>
            <p className='w-4 h-4  text-yellow-600 bg-yellow-300 px-[3px]  text-xs font-semibold flex items-center justify-center' >E2</p>
            
        </div>
        <div className=' flex gap-x-1'>
        <p className='w-4 h-4  text-red-600  bg-red-300 px-[3px]  text-xs font-semibold flex items-center justify-center' >E3</p>
        <p className='w-4 h-4 text-red-600  bg-red-300 px-[3px]  text-xs font-semibold flex items-center justify-center' >E4</p>
            
        </div>
    </div>
  )
}
