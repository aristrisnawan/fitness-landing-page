import React, { useEffect, useState } from "react";
import Excercise from "../image/exercise.png";
import { VscArrowRight } from "react-icons/vsc";
import dataJson from "../dataJson/dataPopular.json";
import dataList from "../dataJson/dataList.json";

export default function ExcerciseComponent() {
  return (
    <div className="hidden Laptop:block">
      <div className="  text-white px-20">
        <div className="flex flex-row bg-gray-500 p-2 w-128 opacity-50 rounded-full mt-20 justify-between">
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
          <div className=" mr-60">
            <img src={Excercise} alt="" className=" h-full absolute pb-56" />
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

        <div className="flex flex-row">
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

        <div className=" mt-40">
          <PopularExcercise />
        </div>
      </div>
      <WorkoutProgram />
      <ListExercise />
      <FooterComponent />
    </div>
  );
}

export function PopularExcercise() {
  const [data, setData] = useState(dataJson);

  useEffect(() => {});

  return (
    <div>
      <div className="flex flex-row justify-between text-white">
        <p className=" text-2xl font-bold">Popular Exercises</p>
        <p className=" text-slate-200 opacity-50 text-xs">SEE MORE EXERCISES</p>
      </div>
      <div className=" mt-10 pb-6 grid grid-cols-4 justify-items-center LaptopL:grid-cols-4 Laptop:grid-cols-3">
        {data.popular.map((items) => {
          return (
            <div
              className="mb-5 transition ease-in duration-500 hover:cursor-pointer hover:-translate-y-3"
              key={items.id}
            >
              <div className=" w-60 h-40 rounded relative mb-10">
                <div className="">
                  <img className="rounded" src={items.url} alt="" />
                </div>
                <div className="absolute -bottom-9 left-0 flex flex-col pl-3">
                  <span className=" text-2xl font-bold">{items.title}</span>
                  <span className=" mt-2 text-xs text-slate-200 opacity-60">
                    250 est calories
                  </span>
                </div>
                <span className=" bg-black rounded-tl-md py1 px-2 absolute bottom-0 right-0">
                  58:24
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function WorkoutProgram() {
  return (
    <div>
      <div className="flex flex-row justify-between pb-7 mt-16">
        <div className="pl-20 space-x-2 text-white text-8xl font-extrabold">
          <p>Workout</p>
          <p>Program</p>
          <p>Made</p>
          <p>For</p>
          <p>You</p>
        </div>
        <div className=" bg-zinc-700 w-7/12 h-96 flex flex-col justify-center">
          <div className="mx-auto text-slate-200 opacity-50 ">
            <p>Lorem ipsum dolor sit amet, consectetur </p>
            <p> adipiscing elit, sed do eiusmod tempor </p>
            <p> incididunt ut labore et dolore magna </p>
            <p>aliqua consectetur adipiscing.</p>
          </div>
          <div className="mx-auto mt-6">
            <button className="px-4 py-2 rounded-md bg-green-500 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ListExercise() {
  const [data, setData] = useState(dataList);

  useEffect(() => {});
  return (
    <div className="px-20 text-white">
      {data.list.map((items) => {
        return (
          <div
            className="flex flex-row justify-between py-5 border-b-4 border-slate-600 opacity-50 cursor-pointer"
            key={items.id}
          >
            <div className=" my-auto">
              <span>0{items.id}</span>
            </div>
            <div className=" w-72">
              <p className="text-3xl font-bold">{items.title}</p>
              <p className="text-sm">{items.jml} videos</p>
            </div>
            <div className=" my-auto">
              <span>
                <VscArrowRight className=" w-6 h-5" />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function FooterComponent() {
  return (
    <div className="text-white">
      <div className="flex flex-row justify-center py-9">
        <p>
          Created by{" "}
          <a href="https://github.com/aristrisnawan" className="italic">
            aristrisnawan&nbsp;
          </a>{" "}
        </p>
        <p>
          {" "}
          | Design by{" "}
          <a href="https://twitter.com/dwinawan_" className="italic">
            Dwinawan
          </a>
        </p>
      </div>
    </div>
  );
}
