import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import sunny from "../assets/sunny.png";
import cloudy from "../assets/cloudy.png";
import drizzle from "../assets/drizzle.png";
import Humidity from "../assets/Humidity.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";

function Weather() {
  return (
    <>
      <div className="place-self-center bg-gradient-to-r from-violet-500 to-fuchsia-500 p-[30px]  rounded-[20px] flex items-center flex-col">
        <div className="flex items-center gap-4">
          <input
            className="bg-slate-100 p-3 w-[250px] rounded-full"
            type="text"
            placeholder="Search"
          />
          <button className="bg-slate-100 rounded-full p-3">
            <FaSearchLocation size={21} />
          </button>
        </div>
        <img className="h-[250px] p-5" src={cloudy} alt="" />
        <p className=" text-4xl font-semibold">16°c</p>
        <h1 className="text-3xl font-semibold ">London</h1>
        <div className="flex items-center gap-20 mt-10">
          <div className="flex flex-col items-center">
            <img className="h-[50px]" src={Humidity} alt="" />
            <p className="font-semibold">91%</p>
            <span className="font-medium">Humidity</span>
          </div>
          <div className="flex flex-col items-center">
            <img className="h-[50px]" src={wind} alt="" />
            <p className="font-semibold">3.6 Km/h</p>
            <span className="font-medium">Wind Speed</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
