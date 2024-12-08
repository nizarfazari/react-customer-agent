import {
  BugBeetle,
  ChatTeardropDots,
  Clock,
  Eye,
  HardDrives,
  MagnifyingGlass,
  Robot,
  User,
} from "@phosphor-icons/react";

import { Segmented } from "antd";
import UserInformationComponent from "./UserInformationComponent";
import { AppContext } from "../context/buble";
import { useContext, useEffect, useState } from "react";

const IconComponentAI = () => {
  const { buble, countAction } = useContext(AppContext);
  let [rate, setRate] = useState(0);

  useEffect(() => {
    if (buble.length > 0) {
      const interval = setInterval(() => {
        setRate((prevRate) => {
          if (prevRate >= 99) {
            clearInterval(interval);
            return 99;
          }
          return prevRate + 9;
        });
      }, 2000);

      
      return () => clearInterval(interval);
    }
  }, [buble]); 

  return (
    <div className="p-5 rounded-l-lg col-span-2">
      <div className="flex items-center flex-col">
        <div className="icon-ai relative w-fit">
          <img
            src="/AgentAI.png"
            className="w-32 h-32 object-cover rounded-full"
            alt=""
          />
          <div className="absolute w-5 h-5 bg-green-500 rounded-full bottom-0 right-5"></div>
        </div>
        <h1 className="text-lg font-medium">
          Intelligent Multi Agent Operations
        </h1>

        <div className="details grid grid-cols-2 mt-4 gap-5">
          <div className="border border-gray-300 bg-white shadow-lg  p-4 rounded-lg">
            <div>
              <div className="flex items-center gap-2">
                <ChatTeardropDots
                  size={18}
                  weight="fill"
                  className="text-slate-500"
                />
                <p className="text-slate-600 text-[14px]">No of Iterations</p>
              </div>
              <p className="font-semibold text-2xl mt-1 text-center">
                {buble.length}
              </p>
            </div>
          </div>
          <div className="border border-gray-300 bg-white shadow-lg  p-4 rounded-lg">
            <div>
              <div className="flex items-center gap-2">
                <Robot size={18} weight="fill" className="text-slate-500" />
                <p className="text-slate-600 text-[14px]">Automation Rate</p>
              </div>
              <p className="font-semibold text-2xl mt-1 text-center">
                {rate} %
              </p>
            </div>
          </div>
          <div className="border border-gray-300 bg-white shadow-lg  p-4 rounded-lg">
            <div>
              <div className="flex items-center gap-2">
                <BugBeetle size={18} weight="fill" className="text-slate-500" />
                <p className="text-slate-600 text-[14px]">Exceptions</p>
              </div>
              <p className="font-semibold text-2xl mt-1 text-center">0</p>
            </div>
          </div>
          <div className="border border-gray-300 bg-white shadow-lg  p-4 rounded-lg">
            <div>
              <div className="flex items-center gap-2">
                <Eye size={18} weight="fill" className="text-slate-500" />
                <p className="text-slate-600 text-[14px]">Actions</p>
              </div>
              <p className="font-semibold text-2xl mt-1 text-center">
                {countAction}
              </p>
            </div>
          </div>
        </div>

        <Segmented
          className="mt-4 segemented w-full"
          options={[
            {
              label: (
                <div className="w-full flex justify-center">
                  <User size={24} weight="fill" />
                </div>
              ),
              value: "user1",
            },
            {
              label: (
                <div className="w-full flex justify-center">
                  <HardDrives size={24} weight="fill" />
                </div>
              ),
              value: "user2",
            },
            {
              label: (
                <div className="w-full flex justify-center">
                  <Clock size={24} weight="fill" />
                </div>
              ),
              value: "user3",
            },
          ]}
        />

        <div className="mt-4 w-full flex items-center px-5 py-2 bg-[#F5F5F5] rounded-lg border border-[#55555]">
          <MagnifyingGlass className="mr-4 " size={20} />
          <input
            type="text"
            className="outline-none w-full bg-[#F5F5F5]"
            placeholder="Search in Genaral"
          />
        </div>

        <UserInformationComponent />
      </div>
    </div>
  );
};

export default IconComponentAI;
