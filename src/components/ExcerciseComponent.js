import React from "react";

export default function ExcerciseComponent() {
  return (
    <div>
      <div className="  text-white px-20 h-screen">
        <div className="flex flex-row bg-gray-500 p-2 w-128 opacity-50 rounded-full mt-28 justify-between">
          <button className="bg-green-600 rounded-full text-white py-1 px-4 cursor-pointer">
            NEW
          </button>
          <span className="p-2 text-slate-200">
            High intensity workout to burn calories
          </span>
        </div>

        <div className="flex flex-row mt-11 justify-between">
          <div>
            <p className="font-extrabold text-9xl tracking-wider">Cardio</p>
            <p className="font-extrabold text-9xl tracking-wider">Exercise</p>
          </div>
          <div className="py-5">
            <div className="  bg-gray-600 opacity-75 px-6 py-3 rounded-md">
              <p className="text-yellow-400 font-extrabold text-4xl">38:14</p>
              <p className="text-slate-200">TIME</p>
            </div>
            <div className=" bg-gray-600 opacity-75 px-6 py-3 rounded-md mt-5">
              <p className="font-extrabold text-4xl text-red-600">165</p>
              <p className="text-slate-200">EST CALORIES</p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p className="w-96 mt-5 text-sm text-slate-200 opacity-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-5">
              <button className="px-4 py-2 rounded-md bg-green-500 mr-2">
                Get Started
              </button>
              <button className="px-4 py-2 rounded-md bg-gray-500">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
