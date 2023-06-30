import React from "react";
import ReactSwitch from "react-switch";
import ChartScreen from "./ChartScreen";
import { FaSun } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SiAddthis } from "react-icons/si";
import { TfiLocationArrow } from "react-icons/tfi";
import { FiSunrise, FiSunset } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="w-[800px] h-[600px] rounded-3xl bg-[#3a86ff] overflow-hidden flex flex-row items-stretch shadow-2xl">
      <div className="flex flex-col w-56 h-full px-6 py-8 overflow-hidden">
        <div className="flex flex-col h-full text-white">
          <div className="flex flex-col w-auto h-5 mb-4">
            <div className="w-full h-auto flex flex-row justify-between items-center">
              <span>
                <SiAddthis className="rounded-sm" />
              </span>
              <div className="ml-6 flex w-6 justify-between">
                <div className="w-3 bg-white h-1 rounded-xl"></div>
                <div className="w-1 h-1 bg-white opacity-50 rounded-xl"></div>
                <div className="w-1 h-1 bg-white opacity-50 rounded-xl"></div>
              </div>
              <div className="w-auto h-auto flex items-center justify-between gap-1">
                <span className="text-[8px]">&#8451;</span>
                <ReactSwitch
                  onColor="#D1D5DB"
                  onHandleColor="#000000"
                  handleDiameter={14}
                  uncheckedIcon={true}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={6}
                  width={20}
                  className="react-switch"
                  id="material-switch"
                ></ReactSwitch>
                <span className="text-[8px]">&#8457;</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full h-auto">
            <div className="flex flex-row w-full justify-between items-center mt-4">
              <div className="flex flex-row gap-1">
                <span>
                  <TfiLocationArrow className="rotate-90" />
                </span>
                <div>
                  <p className="text-xs">New York, USA</p>
                </div>
              </div>
              <div className="flex items-center justify-end w-16">
                <div className="flex flex-row gap-1 items-center">
                  <div>
                    <span>
                      <FiSunrise className="w-3 h-3" />
                    </span>
                  </div>
                  <div>
                    <p className="text-xs">07:19</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full justify-between items-center">
              <div>
                <p className="text-xs">Today 28 Sept</p>
              </div>
              <div className="flex items-center justify-end w-16">
                <div className="flex flex-row gap-1">
                  <div>
                    <span>
                      <FiSunset className="w-3 h-3" />
                    </span>
                  </div>
                  <div>
                    <p className="text-xs">07:32</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full items-center justify-between h-auto mt-8 gap-4">
            <div className="flex flex-row w-full h-auto items-center justify-between">
              <span>
                <FiChevronLeft />
              </span>
              <p className="text-7xl ml-6">27&deg;</p>
              <span>
                <FiChevronRight />
              </span>
            </div>
            <div className="flex flex-row items-center w-full justify-center">
              <span>
                <FaSun />
              </span>
              <p>Sunny</p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-center overflow-hidden">
          <FaSun className="w-96 h-96 text-yellow-400" />
        </div>
      </div>
      <div>
        <ChartScreen />
      </div>
    </div>
  );
};

export default Dashboard;
