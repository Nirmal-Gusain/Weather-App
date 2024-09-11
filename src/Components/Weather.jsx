import React, { useRef, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import sunny from "../assets/sunny.png";
import cloudy from "../assets/cloudy.png";
import drizzle from "../assets/drizzle.png";
import Humidity from "../assets/Humidity.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";
import { useEffect } from "react";

function Weather() {
  const [WeatherData, setWeatherData] = useState(false);
  const inputRef = useRef();

  const search = async (city) => {
    if (city === "") {
      alert("Please Enter City Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
        return;
      }
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      setWeatherData({
        location: data.name,
        temprature: Math.floor(data.main.temp),
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        icon: iconUrl,
        Description: data.weather[0].description,
        country: data.sys.country,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("error in fetchin data");
    }
  };
  useEffect(() => {
    search("dehradun");
  }, []);

  return (
    <>
      <div className="place-self-center bg-gradient-to-r from-violet-500 to-fuchsia-500 p-[30px]  rounded-[20px] flex items-center flex-col">
        <div className="flex items-center gap-4">
          <input
            className="bg-slate-100 py-3 px-6 text-xl font-semibold w-[250px] rounded-full"
            type="text"
            placeholder="Enter City Name"
            ref={inputRef}
          />
          <button
            className="bg-slate-100 rounded-full p-3"
            onClick={() => search(inputRef.current.value)}
          >
            <FaSearchLocation size={21} />
          </button>
        </div>
        {WeatherData ? (
          <>
            <img className="h-[250px] p-5" src={WeatherData.icon} alt="icon" />
            <p className=" text-4xl font-semibold">
              {WeatherData.temprature}°c
            </p>
            <h1 className="text-2xl font-medium ">
              ({WeatherData.Description})
            </h1>
            <h1 className="text-3xl font-semibold ">
              {WeatherData.location}({WeatherData.country})
            </h1>
            <div className="flex items-center gap-20 mt-10">
              <div className="flex flex-col items-center">
                <img className="h-[50px]" src={Humidity} alt="" />
                <p className="font-semibold">{WeatherData.humidity}%</p>
                <span className="font-medium">Humidity</span>
              </div>
              <div className="flex flex-col items-center">
                <img className="h-[50px]" src={wind} alt="" />
                <p className="font-semibold">{WeatherData.windspeed}Km/h</p>
                <span className="font-medium">Wind Speed</span>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Weather;
