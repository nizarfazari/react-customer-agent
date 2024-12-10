/* eslint-disable react/prop-types */
import { AppContext } from "../context/buble";
import ModalComponent from "./ModalComponent";
import { useContext, useEffect, useState } from "react";

const BubleChat = ({ messages }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleContent, setVisibleContent] = useState("");
  const { isInitialLoading } = useContext(AppContext);
  console.log(isInitialLoading);

  useEffect(() => {
    if (Array.isArray(messages?.content)) {
      // Tangani jika content berupa array
      let index = 0;
      const interval = setInterval(() => {
        if (index < messages.content.length) {
          setVisibleContent((prevContent) => [
            ...prevContent,
            messages.content[index],
          ]);
          
          setTimeout(() => {
            index++;
          },1000)
        } else {
          clearInterval(interval); // Hentikan interval jika semua konten sudah ditampilkan
          setIsLoading(false);
        }
      }, 1000); // Interval antar item
      return () => clearInterval(interval);
    } else {
      // Tangani jika content berupa string biasa
      setTimeout(() => {
        setVisibleContent([messages?.content]);
        setIsLoading(false);
      }, 2000);
    }
  }, [messages]);

 

  return (
    <>
      <div
        className={`flex ${
          messages?.sender === "User" ? "flex-row-reverse" : ""
        } gap-4`}
      >
        {/* Icon */}
        <div>
          <img
            src={messages?.photo}
            className="w-12 h-12 object-cover rounded-full"
            alt=""
          />
        </div>

        {/* Handle Loading */}
        {messages?.sender !== "User" && isLoading ? (
          <p className="mt-2 thinking">Thinking...</p>
        ) : (
          <div className="w-fit">
            <div
              className={`w-fit rounded-lg px-4 py-2 shadow-2xl ${
                messages?.sender === "User"
                  ? "bg-blue-600 text-white"
                  : "bg-white "
              } ${
                messages?.icon === "email" && "border border-lightblue-700"
              }  ${messages?.icon === "whatsapp" && "border border-[#90ee90]"}`}
            >
              <div className="flex justify-between ">
                <h1 className="text-lg font-medium ">{messages?.sender}</h1>

                {messages?.icon === "policy" && (
                  <ModalComponent modalTitle="Policy">
                    <img src="/modal/policy.png" className="w-full" alt="" />
                  </ModalComponent>
                )}

                {/* Handle Icon Type */}
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

              {/* Handle Content User */}
              {messages?.sender !== "User" && isInitialLoading ? (
                <p
                  className="mt-2"
                  dangerouslySetInnerHTML={{ __html: visibleContent }}
                />
              ) : (
                <p
                  className="mt-2"
                  dangerouslySetInnerHTML={{ __html: messages?.content || "" }}
                />
              )}

              {/* Handle Button Type */}
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

            {/* Handle Time */}
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
