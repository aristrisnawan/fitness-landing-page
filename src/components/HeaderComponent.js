import React from "react";

export default function HeaderComponent() {
  return (
    <div className="hidden Laptop:block">
      <div className="flex flex-row justify-between px-20 py-5">
        <span className=" font-semibold text-white">WORKOUT</span>
        <div className=" space-x-8 text-slate-200 opacity-50">
          <span className=" hover:outline hover:outline-offset-2 hover:outline-white hover:rounded cursor-pointer p-2">
            EXCERCISE
          </span>
          <span className=" hover:outline hover:outline-offset-2 hover:outline-white hover:rounded cursor-pointer p-2">
            TRAINERS
          </span>
          <span className=" hover:outline hover:outline-offset-2 hover:outline-white hover:rounded cursor-pointer p-2">
            PRICING
          </span>
          <span className=" hover:outline hover:outline-offset-2 hover:outline-white hover:rounded cursor-pointer p-2">
            LOGIN
          </span>
        </div>
      </div>
    </div>
  );
}
