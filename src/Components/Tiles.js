import React from "react";
import { LuDroplets } from "react-icons/lu";
import { FaWind } from "react-icons/fa";
import { FaTemperatureThreeQuarters, FaCloudRain } from "react-icons/fa6";
import { BiCloudLightRain } from "react-icons/bi";
import { FiSun } from "react-icons/fi";

const Tiles = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-5">
        <div className="rounded-3xl bg-white w-44 h-28 overflow-hidden p-5 py-4">
          <div className="flex flex-col gap-1 justify-center items-center overflow-hidden">
            <div className="flex flex-row w-full justify-between items-center">
              <p className="text-[10px] font-semibold">Humidity</p>
              <span className="flex flex-col w-5 h-5 bg-[#3a86ff] rounded-md items-center justify-center">
                <LuDroplets className="text-white w-3 h-3 bg-[#3a86ff] rounded-md" />
              </span>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className="font-bold text-[12px]">
                82% <span className="text-[10px] font-normal">bad</span>
              </p>
            </div>
            <div className="flex flex-row w-full items-center justify-between">
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[8px] font-thin opacity-50">good</p>
                </div>
                <div className="w-9 h-[6px] rounded-md bg-[#3a86ff]"></div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[8px] font-thin opacity-50">normal</p>
                </div>
                <div className="w-9 h-[6px] rounded-md bg-[#3a86ff]"></div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[8px] font-thin opacity-50">bad</p>
                </div>
                <div className="w-9 h-[6px] rounded-md bg-gray-200">
                  <div className="w-4 h-[6px] rounded-l-md bg-[#3a86ff]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-white w-44 h-28 overflow-hidden p-5 py-4">
          <div className="flex flex-col gap-2 justify-center items-center overflow-hidden">
            <div className="flex flex-row w-full justify-between items-center">
              <p className="text-[10px] font-semibold">Wind</p>
              <span className="flex flex-col w-5 h-5 bg-[#3a86ff] rounded-md items-center justify-center">
                <FaWind className="text-white w-3 h-3 bg-[#3a86ff] rounded-md" />
              </span>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className="font-bold text-[12px]">8 km/h</p>
            </div>
            <div className="flex flex-row w-full items-center justify-between">
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[8px] font-thin opacity-50">0</p>
                </div>
                <div className="w-5 h-[6px] rounded-md bg-[#3a86ff]"></div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[8px] font-thin opacity-50">5</p>
                </div>
                <div className="w-5 h-[6px] rounded-md bg-gray-200">
                  <div className="w-2 h-[6px] rounded-l-md bg-[#3a86ff]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[8px] font-thin opacity-50">10</p>
                </div>
                <div className="w-5 h-[6px] rounded-md bg-gray-200"></div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[8px] font-thin opacity-50">20</p>
                </div>
                <div className="w-5 h-[6px] rounded-md bg-gray-200"></div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[8px] font-thin opacity-50">30</p>
                </div>
                <div className="w-5 h-[6px] rounded-md bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-white w-44 h-28 overflow-hidden p-5 py-4">
          <div className="flex flex-col gap-2 justify-center items-center overflow-hidden">
            <div className="flex flex-row w-full justify-between items-center">
              <p className="text-[10px] font-semibold">Precipitation</p>
              <span className="flex flex-col w-5 h-5 bg-[#3a86ff] rounded-md items-center justify-center">
                <BiCloudLightRain className="text-white w-3 h-3 bg-[#3a86ff] rounded-md" />
              </span>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className="font-bold text-[12px]">1.4 cm</p>
            </div>
            <div className="flex flex-row w-full items-center justify-between">
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[7px] font-thin opacity-50">0</p>
                </div>
                <div className="w-2 h-[6px] rounded-md bg-[#3a86ff]"></div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[7px] font-thin opacity-50">10</p>
                </div>
                <div className="w-2 h-[6px] rounded-md bg-gray-200">
                  <div className="w-[5px] h-[6px] rounded-l-md bg-[#3a86ff]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[7px] font-thin opacity-50">20</p>
                </div>
                <div className="w-2 h-[6px] rounded-md bg-gray-200"></div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[7px] font-thin opacity-50">30</p>
                </div>
                <div className="w-2 h-[6px] rounded-md bg-[#3a86ff]"></div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[7px] font-thin opacity-50">40</p>
                </div>
                <div className="w-2 h-[6px] rounded-md bg-[#3a86ff]"></div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[7px] font-thin opacity-50">50</p>
                </div>
                <div className="w-2 h-[6px] rounded-md bg-[#3a86ff]"></div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[7px] font-thin opacity-50">60</p>
                </div>
                <div className="w-2 h-[6px] rounded-md bg-[#3a86ff]"></div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[7px] font-thin opacity-50">70</p>
                </div>
                <div className="w-2 h-[6px] rounded-md bg-[#3a86ff]"></div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[7px] font-thin opacity-50">80</p>
                </div>
                <div className="w-2 h-[6px] rounded-md bg-[#3a86ff]"></div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[7px] font-thin opacity-50">90</p>
                </div>
                <div className="w-2 h-[6px] rounded-md bg-[#3a86ff]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <div className="rounded-3xl bg-white w-44 h-28 overflow-hidden p-5 py-4">
          <div className="flex flex-col gap-2 justify-center items-center overflow-hidden">
            <div className="flex flex-row w-full justify-between items-center">
              <p className="text-[10px] font-semibold">UV Index</p>
              <span className="flex flex-col w-5 h-5 bg-[#3a86ff] rounded-md items-center justify-center">
                <FiSun className="text-white w-3 h-3 bg-[#3a86ff] rounded-md" />
              </span>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className="font-bold text-[12px]">
                4 <span className="text-[10px] font-normal">medium</span>
              </p>
            </div>
            <div className="flex flex-row w-full items-center justify-between">
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[8px] font-thin opacity-50">0-2</p>
                </div>
                <div className="w-5 h-[6px] rounded-md bg-[#3a86ff]"></div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[8px] font-thin opacity-50">3-5</p>
                </div>
                <div className="w-5 h-[6px] rounded-md bg-gray-200">
                  <div className="w-2 h-[6px] rounded-l-md bg-[#3a86ff]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[8px] font-thin opacity-50">6-7</p>
                </div>
                <div className="w-5 h-[6px] rounded-md bg-gray-200"></div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[8px] font-thin opacity-50">8-10</p>
                </div>
                <div className="w-5 h-[6px] rounded-md bg-gray-200"></div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[8px] font-thin opacity-50">11+</p>
                </div>
                <div className="w-5 h-[6px] rounded-md bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-white w-44 h-28 overflow-hidden p-5 py-4">
          <div className="flex flex-col gap-2 justify-center items-center overflow-hidden">
            <div className="flex flex-row w-full justify-between items-center">
              <p className="text-[10px] font-semibold">Feels Like</p>
              <span className="flex flex-col w-5 h-5 bg-[#3a86ff] rounded-md items-center justify-center">
                <FaTemperatureThreeQuarters className="text-white w-3 h-3 bg-[#3a86ff] rounded-md" />
              </span>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className="font-bold text-[12px]">30&deg;</p>
            </div>
            <div className="flex flex-col w-full items-center justify-between gap-1">
              <div className="flex flex-row w-full justify-between ">
                <p className="text-[7px] font-thin opacity-50">0&deg;</p>
                <p className="text-[7px] font-thin opacity-50">25&deg;</p>
                <p className="text-[7px] font-thin opacity-50">50&deg;</p>
              </div>
              <div className="w-full h-[6px] rounded-md bg-gray-200">
                <div className="w-[70%] h-[6px] rounded-l-md bg-[#3a86ff]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-white w-44 h-28 overflow-hidden p-5 py-4">
          <div className="flex flex-col gap-2 justify-center items-center overflow-hidden">
            <div className="flex flex-row w-full justify-between items-center">
              <p className="text-[10px] font-semibold">Chance of rain</p>
              <span className="flex flex-col w-5 h-5 bg-[#3a86ff] rounded-md items-center justify-center">
                <FaCloudRain className="text-white w-3 h-3 bg-[#3a86ff] rounded-md" />
              </span>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className="font-bold text-[12px]">42%</p>
            </div>
            <div className="flex flex-col w-full items-center justify-between">
              <div className="flex flex-col w-full items-center justify-between gap-1">
                <div className="flex flex-row w-full justify-between">
                  <p className="text-[7px] font-thin opacity-50">0%</p>
                  <p className="text-[7px] font-thin opacity-50">25%</p>
                  <p className="text-[7px] font-thin opacity-50">50%</p>
                  <p className="text-[7px] font-thin opacity-50">75%</p>
                  <p className="text-[7px] font-thin opacity-50">100%</p>
                </div>
                <div className="w-full h-[6px] rounded-md bg-gray-200">
                  <div className="w-[40%] h-[6px] rounded-l-md bg-[#3a86ff]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
