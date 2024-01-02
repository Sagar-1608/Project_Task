import React from "react";
import Video from "../assets/Video.png";
import { GiStrongMan } from "react-icons/gi";


export default function Preview() {
  return (
    <div className=" flex  m-5 rounded-md bg-indigo-600 p-2 gap-x-2">
      <div className=" w-[40%]  ">
        <img className=" rounded-md h-[105px]" src={Video} />
      </div>

      <div className=" w[60%] flex gap-x-2">
        <div  className="flex flex-col  m-1">
            <p className="font-semibold text-slate-200" > Exercise 2 <span>(E2)</span></p>
            <p className="font-semibold text-slate-100"> Back Pain Exercise</p>
            <p className=" text-sm font-medium text-slate-300"><span > Reps 10</span><span> Set 3</span> </p>
            <div className=" w-[80%] bg-slate-50 text-indigo-600  font-bold  rounded-2xl text-center flex items-center justify-center mt-2">
                Preview
            </div>
        </div>

        <div className="ml-10 flex  flex-col items-end gap-y-12">
        <div className="  bg-orange-200 rounded-full flex items-center justify-center p-1  w-8 h-8">
          <GiStrongMan size={90} className=" text-orange-500" />
        </div>

          <div className=" text-slate-300 text-sm font-semibold">3:50min</div>
        </div>
      </div>
    </div>
  );
}
