import React from 'react'
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import Box from './Box';
import Box1 from './Box1';

export default function Weeks() {
  return (
    <div>
         {/* heading Part */}
      <div className=" flex  items-end justify-between mx-4  ">
      <div className='flex  items-center '>
      <IoChevronBack
          size={30}
          className="  bg-slate-400 mr-3  p-1 rounded-full text-yellow-50  font-bold"
        />
        <div className=" font-bold text-slate-700">Oct 31 - Nov 06 2023</div>
        <IoChevronForward
          size={30}
          className=" bg-indigo-600 mx-3 p-1 rounded-full text-yellow-50  font-bold"
        />

      </div>
        

        <p className=' text-slate-600 text-sm font-semibold'> Week 1 of 3</p>
      </div>

      {/* core part */}

      <div className='grid grid-cols-9 mx-3 bg-slate-50 mt-4 p-2   rounded-md text-sm font-semibold text-slate-600  '>

      <div className=' flex items-center justify-center col-span-2 border-b-2'>Slot</div>
      <div className=' flex flex-col items-center justify-center border-l-2 p-[5px]'>
        <p className=' text-slate-700 font-bold'>Mon</p>
        <p  className=' text-slate-500  text-xs'>Oct 31</p>
      </div>
      <div className=' flex flex-col items-center justify-center border-l-2 p-[5px]'>
        <p className=' text-slate-700 font-bold'>Tue</p>
        <p  className=' text-slate-500 text-xs'>Nov 01</p>
      </div>
      <div className=' flex flex-col items-center justify-center border-l-2'>
        <p className=' text-slate-700 font-bold'>Wed</p>
        <p  className=' text-slate-500 text-xs'>Nov 02</p>
      </div>
      <div className=' flex flex-col items-center justify-center border-l-2'>
        <p className=' text-slate-700 font-bold'>Thu</p>
        <p  className=' text-slate-500 text-xs'>Nov 03</p>
      </div>
      <div className=' flex flex-col items-center justify-center border-l-2'>
        <p className=' text-slate-700 font-bold'>Fri</p>
        <p  className=' text-slate-500 text-xs'>Nov 4</p>
      </div>
      <div className=' flex flex-col items-center justify-center border-l-2'>
        <p className=' text-slate-700 font-bold'>Sat</p>
        <p  className=' text-slate-500 text-xs'>Nov 5</p>
      </div>
      <div className=' flex flex-col items-center justify-center border-l-2'>
        <p className=' text-slate-700 font-bold'>Sun</p>
        <p  className=' text-slate-500 text-xs'>Nov 6</p>
      </div>
    

      <div className=' flex items-center justify-center col-span-2 border-b-2 '>Morning</div>
      <div className='flex flex-col items-center justify-center border-2 border-r-0'>
      <Box/>
      </div>
      <div className='flex flex-col items-center justify-center border-2 border-r-0'>
      <Box/>
      </div>
      <div className='flex flex-col items-center justify-center border-2 border-r-0'>
      <Box/>
      </div>
      <div className='flex flex-col items-center justify-center border-2 border-r-0'>
      <Box/>
      </div>
      <div className='flex flex-col items-center justify-center border-2 border-r-0'>
      <Box/>
      </div>
      <div className='flex flex-col items-center justify-center border-2 border-r-0'>
      <Box/>
      </div>
      <div className='flex flex-col items-center justify-center border-2 border-r-0'>
      <Box/>
      </div>
     
      <div className=' flex items-center justify-center col-span-2 border-b-2 '>Afternoon</div>
      <div className='flex flex-col items-center justify-center border-l-2 border-b-2 '>
      <Box/>
      </div>
      <div className='flex flex-col items-center justify-center border-l-2 border-b-2 '>
      <Box/>
      </div>
      <div className='flex flex-col items-center justify-center border-l-2 border-b-2 b'>
      <Box/>
      </div>
      
      <div className='flex flex-col items-center justify-center border-l-2 border-b-2 '>
        <Box1 num={"S11"}/>
      </div>
      <div className='flex flex-col items-center justify-center border-l-2 border-b-2 '>
        <Box1 num={"S12"}/>
      </div>
      <div className='flex flex-col items-center justify-center border-l-2 border-b-2 '>
        <Box1 num={"S13"}/>
      </div>
      <div className='flex flex-col items-center justify-center border-l-2 border-b-2 '>
        <Box1 num={"S14"}/>
      </div>
      

      <div className=' flex items-center justify-center col-span-2 border-b-2 '>Evening</div>
      <div className='flex flex-col items-center justify-center border-l-2  border-b-2 py-[2px] '>
        <Box1 num={"S15"}/>
      </div>
      <div className='flex flex-col items-center justify-center border-l-2  border-b-2 '>
        <Box1 num={"S16"}/>
      </div>
      <div className='flex flex-col items-center justify-center border-l-2  border-b-2 '>
        <Box1 num={"S17"}/>
      </div>
      <div className='flex flex-col items-center justify-center border-l-2  border-b-2 '>
        <Box1 num={"S18"}/>
      </div>
      <div className='flex flex-col items-center justify-center border-l-2  border-b-2 '>
        <Box1 num={"S19"}/>
      </div>
      <div className='flex flex-col items-center justify-center border-l-2  border-b-2 '>
        <Box1 num={"S20"}/>
      </div>
      <div className='flex flex-col items-center justify-center border-l-2  border-b-2 '>
        <Box1 num={"S21"}/>
      </div>

      <div className=' flex items-center justify-center col-span-2 '>Night</div>
      
      <div className='flex flex-col items-center justify-center border-l-2   py-[2px] '>
        <Box1 num={"S22"}/>
      </div>
      <div className='flex flex-col items-center justify-center border-l-2   '>
        <Box1 num={"S23"}/>
      </div>
      <div className='flex flex-col items-center justify-center border-l-2   '>
        <Box1 num={"S24"}/>
      </div>
      <div className='flex flex-col items-center justify-center border-l-2   '>
        <Box1 num={"S25"}/>
      </div>
      <div className='flex flex-col items-center justify-center border-l-2   '>
        <Box1 num={"S26"}/>
      </div>
      <div className='flex flex-col items-center justify-center border-l-2   '>
        <Box1 num={"S27"}/>
      </div>
      <div className='flex flex-col items-center justify-center border-l-2   '>
        <Box1 num={"S28"}/>
      </div>



      </div>
    </div>
  )
}
