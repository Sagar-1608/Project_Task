import React from "react";
import { IoTimer } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { MdEmail } from "react-icons/md";



import Profile from "../assets/Profile.png"

export default function Score() {
  return (
    <div className=" flex  flex-col gap-3 mx-4 mt-5">
    <div className="flex gap-3">
    <div className="w-[50%] flex gap-5 bg-slate-100 p-4 px-7 rounded-md">
        <div className=" relative">
        <div className=" absolute w-5 h-3 right-3 bg-slate-100">

        </div>

            <div className="flex items-center justify-center border-4 border-orange-500 rounded-full p-2 w-14 h-14 text-orange-500  font-bold">
                9/10
            </div>
        </div>
        <div className=" font-bold text-slate-700">
          <p >Quality</p>
          <p>Score</p>
        </div>
      </div>
      <div className=" w-[50%] flex gap-5 bg-slate-100 p-4 px-7 rounded-md">
        <div className=" relative">
        <div className=" absolute w-5 h-3 right-3 bg-slate-100">

        </div>
            <div className="flex items-center justify-center border-4   border-blue-700 rounded-full p-2 w-14 h-14  text-blue-700 font-bold">
                65%
            </div>
        </div>
        <div className=" font-bold text-slate-700">
          <p >Completion</p>
          <p>Score</p>
        </div>
      </div>


    </div>
      
      <div className=" flex bg-slate-100  p-3 rounded-md gap-x-3">
      <div>
        <img src={Profile} className=" rounded-full w-14 h-14 "/>
      </div>

      <div>
      <p className=" text-gray-900 font-bold"> Dr Loreum Ipsum <span className=" text-xs font-medium text-gray-400"> center name</span></p>
      <p className=" text-slate-500"> Barnd Name</p>

      </div>
      <div className=" flex justify-end w-[20%]  mx-7 items-center ">
      <div className="  bg-orange-200 rounded-full flex items-center justify-center p-2  w-14 h-14">
          <AiOutlineMessage size={100} className="  text-orange-600" />
        </div>
      </div>
      

      </div>

      <div  className=" flex  justify-between  -mt-2 bg-indigo-100">

      <div className=" flex items-center">
        <FaPhoneAlt className=" text-indigo-500"/> 
        <p className=" text-indigo-500 font-bold ml-2"> +91 00000 0000</p>
      </div>
      <div className=" flex items-center">
        <MdEmail size={20} className=" text-indigo-500"/> 
        <p className=" text-indigo-500 font-bold ml-2">loreumipsum@gmail.com</p>
      </div>

      </div>

     
    </div>
  );
}
