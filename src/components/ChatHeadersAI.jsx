import { DotsThreeOutlineVertical } from "@phosphor-icons/react";

const ChatHeadersAI = () => {

  return (
    <div className="flex items-center justify-between">
      <div className=" px-4 py-3">
        <div className="flex gap-3 items-center">
          <div>
            <img
              src="/AgentAI.png"
              className="w-16 h-16 object-cover rounded-full"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-normal font-medium">
              Intelligent Multi Agent Operations
            </h1>
            <p className="text-slate-500 text-sm">
              multiagent.ai@enterprise.net
            </p>
          </div>
        </div>
      </div>
      <div>
        <DotsThreeOutlineVertical size={32} weight="fill" />
      </div>
    </div>
  );
};

export default ChatHeadersAI;
