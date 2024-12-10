import BubleChat from "./BubleChat";
import { useContext, useRef, useState } from "react";
import ChatHeadersAI from "./ChatHeadersAI";
import { FileImage, FileText, PaperPlaneTilt } from "@phosphor-icons/react";
import { AppContext } from "../context/buble";
import { MessageResponse as messageResponse } from "../data/message";

const ChatContentAI = () => {
  const { buble, setBuble, isTyping, setIsTyping, isInitialLoading } =
    useContext(AppContext);
  const messagesEndRef = useRef(null);

  const [formData, setFormData] = useState({
    message: "",
    file: null,
  });

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

    if (!formData.message.trim() && !formData.file) return;

    const newMessage = {
      sender: "User",
      content: formData.message,
      time: new Date().toLocaleString(),
      photo: "/avatar.jpg",
    };

    setBuble((prevMessages) => [...prevMessages, newMessage]);

    if (formData.file) {
      const fileMessage = {
        sender: "User",
        content: `File sent: ${formData.file.name}`,
        time: new Date().toLocaleString(),
        photo: "/avatar.jpg",
      };
      setBuble((prevMessages) => [...prevMessages, fileMessage]);
    }

    setFormData({
      message: "",
      file: null,
    });

    setIsTyping(true);

    messageResponse.forEach((msg, index) => {
      setTimeout(() => {
        setBuble((prevMessages) => [...prevMessages, { ...msg }]);
        if (index === messageResponse.length - 1) {
          setIsTyping(false);
        }
      }, (index + 1) * 2000);
    });
  };

  return (
    <div className="col-span-5">
      <ChatHeadersAI />
      <div className="bg-[#F7FBFC] px-4 py-3 bg-cover rounded-lg h-[700px] overflow-y-auto custom-scrollbar">
        <div className="flex flex-col gap-4 my-4">
          {isInitialLoading ? (
            <div className="initial-loader">Retrieving data WhatsApp...</div>
          ) : (
            <>
              {buble.map((message, index) => (
                <div key={index}>
                  <BubleChat messages={message} />
                  <div ref={messagesEndRef} />
                </div>
              ))}
              {isTyping && (
                <div className="loader">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              )}
            </>
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

        {formData.file && (
          <div className="p-4 flex items-center gap-2 bg-gray-50 border-t">
            <FileText size={25} className="text-gray-600" weight="fill" />
            <span className="text-gray-700 truncate max-w-full">
              {formData.file.name}
            </span>
          </div>
        )}

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
          <button
            type="submit"
            className="focus:outline-none"
            disabled={!formData.message.trim() && !formData.file}
          >
            <PaperPlaneTilt
              className={`${
                formData.message.trim() || formData.file
                  ? "text-gray-700"
                  : "text-gray-400"
              }`}
              size={22}
              weight="fill"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatContentAI;
