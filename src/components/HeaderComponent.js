import React from "react";

export default function HeaderComponent() {
  return (
    <div>
      <div className="flex flex-row justify-between px-20 bg-black py-5">
        <span className=" font-semibold text-white">WORKOUT</span>
        <div className=" space-x-8 text-slate-200 opacity-50">
          <span>EXCERCISE</span>
          <span>TRAINERS</span>
          <span>PRICING</span>
          <span>LOGIN</span>
        </div>
      </div>
    </div>
  );
}
