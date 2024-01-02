import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaHeadSideVirus } from "react-icons/fa";
import { GiLeg } from "react-icons/gi";


import { IoCalendarNumber } from "react-icons/io5";
import Preview from "./Preview";

export default function Sessions() {
  return (
    <div className=" flex  flex-col">
      {/* heading Part */}
      <div className=" flex  items-center  ">
        <IoChevronBack
          size={30}
          className=" bg-indigo-600 mx-3 p-1 rounded-full text-yellow-50  font-bold"
        />
        <div className=" font-bold text-slate-700">Session 7</div>
        <IoChevronForward
          size={30}
          className=" bg-indigo-600 mx-3 p-1 rounded-full text-yellow-50  font-bold"
        />
      </div>

      {/* core part */}

      <div>
        <div className=" flex bg-slate-50 m-4 rounded-lg p-1 ">

          <div className=" w-[50%] flex gap-x-3  border-r-2 border-slate-400  my-2 px-2">
          <div className="  bg-green-200 rounded-full flex items-center justify-center p-2  w-10 h-10">
          <FaPersonWalkingLuggage size={90} className="  text-green-500" />
        </div>


        <div className=" flex flex-col ">
            <div className=" font-semibold text-slate-800">Exercise <span className=" font-normal text-xs  text-slate-600">(E1)</span></div>
            <div className="  font-medium  text-slate-600 text-sm">Back Pain Exercise</div>
        </div>
          </div>

          <div className=" w-[60%] flex p-2   justify-between">
            <div className=" flex flex-col items-center  justify-center mx-2 px-5 border-r-2 border-slate-400">
                <p className="font-semibold text-slate-800">Reps / Set</p>
                <p className="font-medium  text-slate-600 text-sm">10 / 3</p>
            </div>
            <div className="  flex flex-col justify-center items-center mx-2 ">
                <p className="font-semibold text-slate-800">Duration</p>
                <p className="font-medium  text-slate-600 text-sm">5 mins</p>
            </div>
          </div>
        </div>
        <Preview/>
        <div className=" flex bg-slate-50 m-4 rounded-lg p-1 ">

          <div className=" w-[50%] flex gap-x-3  border-r-2 border-slate-400  my-2 px-2">
          <div className="  bg-yellow-200 rounded-full flex items-center justify-center p-2  w-10 h-10">
          <FaHeadSideVirus size={90} className="  text-yellow-500" />
        </div>

        <div className=" flex flex-col ">
            <div className=" font-semibold text-slate-800">Exercise <span className=" font-normal text-xs  text-slate-600">(E1)</span></div>
            <div className="  font-medium  text-slate-600 text-sm">Back Pain Exercise</div>
        </div>
          </div>

          <div className=" w-[60%] flex p-2   justify-between">
            <div className=" flex flex-col items-center  justify-center mx-2 px-5 border-r-2 border-slate-400">
                <p className="font-semibold text-slate-800">Reps / Set</p>
                <p className="font-medium  text-slate-600 text-sm">10 / 3</p>
            </div>
            <div className="  flex flex-col justify-center items-center mx-2 ">
                <p className="font-semibold text-slate-800">Duration</p>
                <p className="font-medium  text-slate-600 text-sm">5 mins</p>
            </div>
          </div>
        </div>
        <div className=" flex bg-slate-50 m-4 rounded-lg p-1 ">

          <div className=" w-[50%] flex gap-x-3  border-r-2 border-slate-400  my-2 px-2">
          <div className=" bg-red-200 rounded-full flex items-center justify-center p-2  w-10 h-10">
          <GiLeg size={90} className=" text-red-500" />
        </div>

        <div className=" flex flex-col ">
            <div className=" font-semibold text-slate-800">Exercise <span className=" font-normal text-xs  text-slate-600">(E1)</span></div>
            <div className="  font-medium  text-slate-600 text-sm">Back Pain Exercise</div>
        </div>
          </div>

          <div className=" w-[60%] flex p-2   justify-between">
            <div className=" flex flex-col items-center  justify-center mx-2 px-5 border-r-2 border-slate-400">
                <p className="font-semibold text-slate-800">Reps / Set</p>
                <p className="font-medium  text-slate-600 text-sm">10 / 3</p>
            </div>
            <div className="  flex flex-col justify-center items-center mx-2 ">
                <p className="font-semibold text-slate-800">Duration</p>
                <p className="font-medium  text-slate-600 text-sm">5 mins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
