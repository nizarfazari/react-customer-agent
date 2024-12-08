import BubleChat from "./BubleChat";
import { useContext, useEffect, useRef, useState } from "react";
import ChatHeadersAI from "./ChatHeadersAI";
import { FileImage, PaperPlaneTilt } from "@phosphor-icons/react";
import { AppContext } from "../context/buble";

const messages = [
  {
    sender: "OrchestratorAgent",
    content:
      "Policy for Customer <strong>2304992</strong> to expire matches threshold (<2 weeks).",
    time: new Date().toLocaleString(),
    photo: "/public/OrchestratorAgentAI.png",
  },
  {
    sender: "OrchestratorAgent",
    content:
      "Invoking PolicyAgent to retrieve details for Customer ID: <strong>2304992</strong>.",
    time: new Date().toLocaleString(),
    photo: "/public/OrchestratorAgentAI.png",
  },
  {
    sender: "PolicyAgent",
    content: "Policy Retrieved. Details as follows:",
    time: new Date().toLocaleString(),
    photo: "/public/PolicyAgentAI.png",
    icon: "policy",
  },
  {
    sender: "PolicyAgent",
    content:
      "Policy: <strong>Direct-PruProTech Life</strong> | Expiry: <span class='bg-black text-white px-2 py-1 rounded-full'>26 Dec 2024</span> | Premium: SGD <span class='bg-black text-white px-2 py-1 rounded-full'> $1,200 </span>",
    time: new Date().toLocaleString(),
    photo: "/public/PolicyAgentAI.png",
    icon: "policy",
  },
  {
    sender: "OrchestratorAgent",
    content:
      "Sending to Customer Service Agent to Prepare messages for Customer",
    time: new Date().toLocaleString(),
    photo: "/public/OrchestratorAgentAI.png",
  },
  {
    sender: "CustomerService",
    content:
      "Generated WhatsApp: 'Hi Mr. Kastanis, your policy is expiring on <strong>26 Dec 2024</strong>. Renew now?'",
    time: new Date().toLocaleString(),
    photo: "/public/MarketingAgentAI.png",
    icon: "whatsapp",
  },
  {
    sender: "CustomerService",
    content:
      "Generated Email: '<strong>Subject:</strong> Renew Your Policy | <strong>Body:</strong> Dear Mr. Kastanis, your policy expires on <strong>26 Dec 2024</strong> . Click <span class='link-style'>here</span> to renew.'",
    time: new Date().toLocaleString(),
    type: "user",
    photo: "/public/MarketingAgentAI.png",
    icon: "email",
  },
];

const ChatContentAI = () => {
  const { buble, setBuble } = useContext(AppContext);
  console.log(buble);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const [formData, setFormData] = useState({
    message: "",
    file: null,
  });

  useEffect(() => {
    const startTime = Date.now();
    let index = 0;
    setIsTyping(true);

    const interval = setInterval(() => {
      if (index < messages.length) {
        // console.log("Current message:", data);
        const now = Date.now();
        const elapsedTime = now - startTime;
        const timeExecution = elapsedTime - (index + 1) * 3000;
        setBuble((prevMessages) => {
          const updatedMessages = [
            ...prevMessages,
            {
              ...messages[index],
              id: index,
              time_execution: `${timeExecution} ms`,
            },
          ];
          //   console.log("Updated messages:", updatedMessages);
          return updatedMessages;
        });

        setTimeout(() => {
          index++;
        }, 2000);
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      message: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        file: e.target.files[0],
      }));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const messageResponse = [
      {
        sender: "PaymentAgent",
        content: "Processing renewal for the policy. Please wait...",
        photo: "/public/PaymentAgentAI.png",
        time: new Date().toLocaleString(),
      },
      {
        sender: "PaymentAgent",
        content: "Policy renewal successful. Confirmation sent to the user.",
        photo: "/public/PaymentAgentAI.png",
        time: new Date().toLocaleString(),
      },
    ];

    const newMessage = {
      sender: "User",
      content: formData.message,
      time: new Date().toLocaleString(),
      photo: "/public/diomendes.webp",
    };
    setBuble((prevMessages) => [...prevMessages, newMessage]);
    setFormData({
      message: "",
      file: null,
    });

    messageResponse.forEach((msg, index) => {
      setTimeout(() => {
        setBuble((prevMessages) => [...prevMessages, { ...msg }]);
        if (index === messageResponse.length - 1) {
          setIsTyping(false);
        }
      }, (index + 1) * 2000);
    });
  };

  //   const scrollToBottom = () => {
  //     messagesEndRef.current?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "end",
  //     });
  //   };

  //   useEffect(() => {
  //     scrollToBottom();
  //   }, [buble]);

  return (
    <div className=" col-span-5">
      <ChatHeadersAI />
      <div className="bg-[#F7FBFC] px-4 py-3 bg-[#F7FBFC] bg-cover rounded-lg h-[700px] overflow-y-auto custom-scrollbar">
        <div className="flex flex-col gap-4 my-4">
          {buble.map(
            (message, index) =>
              message && (
                <>
                  <BubleChat key={index} messages={message} />
                  <div ref={messagesEndRef} />
                </>
              )
          )}

          {isTyping && (
            <div className="loader">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg border border-slate-400 rounded-lg mt-3"
      >
        <textarea
          placeholder="Message"
          value={formData.message}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          className="w-full outline-none p-4 bg-transparent border-none resize-none focus:ring-0"
        ></textarea>
        <div className="p-4 flex justify-between items-center">
          <div>
            <label htmlFor="file-upload" className="cursor-pointer">
              <FileImage size={25} className="text-gray-600" weight="fill" />
            </label>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="focus:outline-none">
            <PaperPlaneTilt className="text-gray-700" size={22} weight="fill" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatContentAI;
