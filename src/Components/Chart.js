import React from "react";
import { FiChevronDown, FiChevronRight, FiSun, FiCloud } from "react-icons/fi";

const Chart = () => {
  return (
    <div className="bg-white w-full h-[200px] rounded-3xl px-6 py-4 flex flex-col gap-4">
      <div className="flex flex-row items-center w-full justify-between">
        <div>
          <p className="text-xs font-semibold">Upcoming hours</p>
        </div>
        <div className="flex flex-row gap-1">
          <div>
            <div className="flex flex-row items-center w-full bg-gray-100 rounded-lg text-xs box-border px-2 py-1 text-[#000000]/[0.6]">
              <p className="text-[8px]">Rain precipitation</p>
              <span>
                <FiChevronDown />
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center w-full bg-gray-100 rounded-lg text-xs font-semibold box-border px-2 py-1 text-black">
              <p className="text-[8px]">Next Days</p>
              <span>
                <FiChevronRight />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full items-center justify-between">
        <div className="flex flex-col gap-1 items-center justify-center">
          <div>
            <p className="text-[10px]">Now</p>
          </div>
          <div>
            <FiSun className="w-3"/>
          </div>
          <div>
            <p className="text-xs font-semibold">27&deg;</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <div>
            <p className="text-[10px]">11:00</p>
          </div>
          <div>
            <FiSun className="w-3"/>
          </div>
          <div>
            <p className="text-xs font-semibold">28&deg;</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <div>
            <p className="text-[10px]">12:00</p>
          </div>
          <div>
            <FiCloud className="w-3"/>
          </div>
          <div>
            <p className="text-xs font-semibold">28&deg;</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <div>
            <p className="text-[10px]">13:00</p>
          </div>
          <div>
            <FiCloud className="w-3"/>
          </div>
          <div>
            <p className="text-xs font-semibold">29&deg;</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <div>
            <p className="text-[10px]">14:00</p>
          </div>
          <div>
            <FiSun className="w-3"/>
          </div>
          <div>
            <p className="text-xs font-semibold">30&deg;</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <div>
            <p className="text-[10px]">15:00</p>
          </div>
          <div>
            <FiCloud className="w-3"/>
          </div>
          <div>
            <p className="text-xs font-semibold">29&deg;</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <div>
            <p className="text-[10px]">16:00</p>
          </div>
          <div>
            <FiCloud className="w-3"/>
          </div>
          <div>
            <p className="text-xs font-semibold">29&deg;</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <div>
            <p className="text-[10px]">17:00</p>
          </div>
          <div>
            <FiSun className="w-3"/>
          </div>
          <div>
            <p className="text-xs font-semibold">28&deg;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
