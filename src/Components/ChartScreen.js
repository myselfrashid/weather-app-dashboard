import React from "react";
import ProfilePicture from "./Assets/ai_generated_female_model_profile_created_using_a_by_ghostygrm_dfdvo3j-400t.jpg";
import Tiles from "./Tiles";
import Chart from "./Chart";

const ChartScreen = () => {
  return (
    <div className="w-[576px] bg-[#e7f2fc] h-[100%] flex flex-col p-8 rounded-3xl gap-4">
      <div className="flex flex-row justify-between w-full items-center">
        <div className="flex">
          <div className="flex flex-col">
            <p className="font-bold text-xs">Welcome back Isabella!</p>
            <p className="text-xs">Check out today's weather information</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </span>
          </div>
          <div>
            <img
              alt="profile-pic"
              className="w-7 h-7 rounded-md object-cover"
              src={ProfilePicture}
            ></img>
          </div>
        </div>
      </div>
      <div className="rounded-3xl">
        <Chart />
      </div>
      <div>
        <p className="font-bold text-[10px]">More details of today's weather</p>
      </div>
      <div>
        <Tiles />
      </div>
    </div>
  );
};

export default ChartScreen;
