import React from 'react'
import { FaWifi } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";

export default function Statusbar() {
  return (
    <div className=" flex flex-row h-10 font-bold justify-between mx-5">
      <div className=' flex items-center justify-center  font-semibold'>
       9:27
      </div>
      <div className=' flex gap-x-2 items-center justify-center'>
      <FaSignal/>
      <FaWifi/>
      <FaBatteryFull/>
      </div>
    </div>
  )
}
