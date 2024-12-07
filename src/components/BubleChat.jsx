/* eslint-disable react/prop-types */
import { Basket } from "@phosphor-icons/react";
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
        <div className="w-fit">
          <div
            className={`w-fit rounded-lg px-4 py-2 shadow-2xl ${
              messages?.sender === "User"
                ? "bg-blue-600 text-white"
                : "bg-white "
            }`}
          >
            <div className="flex justify-between">
              <h1 className="text-lg font-medium ">{messages?.sender}</h1>
              <p className="ml-10 text-gray-700 font-light">{messages?.time_execution}</p>
            </div>

            {messages?.sender !== "User" ? (
              isLoading ? (
                <p className="mt-2 thinking">Thinking...</p>
              ) : (
                <p
                  className="mt-2"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )
            ) : (
              <p
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: messages?.content || "" }}
              />
            )}

            {/* <AnimatedText content={messages?.content} /> */}

            {messages?.sender === "PolicyAgent" && (
              <div className="mt-4 rounded-md py-2 flex justify-end w-full">
                <div className="flex gap-2 items-center">
                  <ModalComponent buttonText="Policy" buttonColor="blue">
                    <img src="/public/modal/policy.png" alt="" />
                  </ModalComponent>
                </div>
              </div>
            )}

            {messages?.sender === "OrchestratorAgent" && (
              <div className="mt-4 py-2 flex  justify-end w-full">
                <div className="flex gap-2 items-center">
                  <ModalComponent buttonText="Whatsapp">
                    <img src="/public/modal/whatsapp.png" alt="" />
                  </ModalComponent>
                  <ModalComponent buttonText="Email" buttonColor="blue">
                    <img src="/public/modal/email.webp" alt="" />
                  </ModalComponent>
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
      </div>

      {/* Product Purchased */}
      {messages?.status === "success" && (
        <div className="flex  bg-white shadow-xl rounded-lg mt-3 py-2 px-4 mx-auto items-center ">
          <Basket size={22} weight="fill" className="text-blue-700 mr-4" />
          <span className="mr-3 bg-[#EBFAFF] font-semibold text-[#197493] px-2 py-1 rounded-lg">
            @Ekrem Kenter
          </span>
          <p className="font-medium">
            Product purchased!{" "}
            <span className="bg-black text-white px-2 py-1 rounded-full">
              $99
            </span>{" "}
            SNOW TEETH WHITENING KIT
          </p>
          <span className="text-sm text-slate-500 ml-4">2m ago</span>
        </div>
      )}
    </>
  );
};

export default BubleChat;
