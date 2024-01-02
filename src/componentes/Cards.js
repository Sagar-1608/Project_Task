import React from "react";

import { GiTargetDummy } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";
import { IoTimer } from "react-icons/io5";

export default function Cards() {
  return (
    <div className=" grid grid-cols-2 px-3 py-5 gap-4">
      <div className=" flex flex-col gap-y-[5px] items-center  justify-center bg-slate-50 rounded-md py-2">
        <div className=" bg-orange-200 rounded-full flex items-center justify-center p-2  w-10 h-10">
          <GiTargetDummy size={90}  className=" text-orange-400" />
        </div>
        <div className=" font-bold">5</div>
        <div className=" text-slate-500 font-medium text-sm">Total Exercise</div>
      </div>

      <div className=" flex flex-col gap-y-[5px] items-center  justify-center bg-slate-50 rounded-md py-2">
        <div className=" bg-sky-200 rounded-full flex items-center justify-center p-2  w-10 h-10">
          <IoCalendarNumber size={90} className=" text-sky-400" />
        </div>
        <div className=" font-bold">65/21</div>
        <div className=" text-slate-500 font-medium text-sm">Sessions/Days</div>
      </div>

      <div className=" flex flex-col gap-y-[5px] items-center  justify-center bg-slate-50 rounded-md py-2">
        <div className="  bg-fuchsia-200 rounded-full flex items-center justify-center p-2  w-10 h-10">
          <FaDumbbell className="  text-fuchsia-600" />
        </div>
        <div className=" font-bold">50/15</div>
        <div className=" text-slate-500 font-medium text-sm">Reps/sets</div>
      </div>
      <div className=" flex flex-col gap-y-[5px] items-center  justify-center bg-slate-50 rounded-md py-2">
        <div className=" bg-blue-200 rounded-full flex items-center justify-center p-2  w-10 h-10">
          <IoTimer size={90} className=" text-blue-400" />
        </div>
        <div className=" font-bold">5 hrs</div>
        <div className=" text-slate-500 font-medium text-sm">Duration</div>
      </div>
    </div>
  );
}
