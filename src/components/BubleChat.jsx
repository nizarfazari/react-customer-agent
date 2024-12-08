/* eslint-disable react/prop-types */
import ModalComponent from "./ModalComponent";
import { useEffect, useState } from "react";

const BubleChat = ({ messages }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setContent(messages?.content);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [messages]);

  return (
    <>
      <div
        className={`flex ${
          messages?.sender === "User" ? "flex-row-reverse" : ""
        } gap-4`}
      >
        <div>
          <img
            src={messages?.photo}
            className="w-12 h-12 object-cover rounded-full"
            alt=""
          />
        </div>
        {messages?.sender !== "User" && isLoading ? (
          <p className="mt-2 thinking">Thinking...</p>
        ) : (
          <div className="w-fit">
            <div
              className={`w-fit rounded-lg px-4 py-2 shadow-2xl ${
                messages?.sender === "User"
                  ? "bg-blue-600 text-white"
                  : "bg-white "
              }`}
            >
              <div className="flex justify-between ">
                <h1 className="text-lg font-medium ">{messages?.sender}</h1>

                {messages?.icon === "policy" && (
                  <ModalComponent modalTitle="Policy">
                    <img
                      src="/modal/policy.png"
                      className="w-full"
                      alt=""
                    />
                  </ModalComponent>
                )}

                {["email", "whatsapp"].includes(messages?.icon) && (
                  <ModalComponent
                    modalTitle={
                      messages?.icon === "email" ? "Email" : "WhatsApp"
                    }
                    iconType={messages?.icon}
                  >
                    <img
                      src={`/modal/${messages.icon}.png`}
                      className="w-full"
                      alt={messages.sender.icon}
                    />
                  </ModalComponent>
                )}
              </div>

              {messages?.sender !== "User" ? (
                <p
                  className="mt-2"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              ) : (
                <p
                  className="mt-2"
                  dangerouslySetInnerHTML={{ __html: messages?.content || "" }}
                />
              )}

              {messages.button && (
                <div className="mt-4 rounded-md py-2 flex justify-end w-full">
                  <div className="flex gap-2 items-center">
                    <button className="px-8 py-1 border bg-[#D6ECFF] rounded-full text-[#158CFF] font-semibold">
                      <p>Edit</p>
                    </button>
                    <button className="px-7 py-1 border bg-lightgray-700 rounded-full text-white font-semibold">
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
            <p className="text-gray-600">
              {new Date(messages?.time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default BubleChat;
