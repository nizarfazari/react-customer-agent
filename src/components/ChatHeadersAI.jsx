import {  WhatsappLogo } from "@phosphor-icons/react";
import { Select } from "antd";

const ChatHeadersAI = () => {
  const onChange = (value) => {
    console.log("Selected value:", value);
  };
  return (
    <div className="flex items-center justify-between">
      <div className=" px-4 py-3">
        <div className="flex gap-3 items-center">
          <div>
            <img
              src="/public/AgentAI.png"
              className="w-16 h-16 object-cover rounded-full"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-normal font-medium">AI Ogus Yaka Kara</h1>
            <p className="text-slate-500 text-sm">user@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <Select
          placeholder="Select an option"
          className="w-48"
          onChange={onChange}
          defaultValue={"WhatsApp"}
        >
          <Select.Option value="WhatsApp">
            <div className="flex items-center gap-2">
              <WhatsappLogo
                size={20}
                weight="fill"
                className="text-green-500"
              />
              <p className="font-medium text-md">WhatsApp</p>
            </div>
          </Select.Option>
        </Select>
      </div>
    </div>
  );
};

export default ChatHeadersAI;
