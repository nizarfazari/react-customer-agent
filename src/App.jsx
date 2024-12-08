import "./App.css";
import IconComponentAI from "./components/IconComponentAI";
import ChatContentAI from "./components/ChatContentAI";
import { useContext } from "react";
import { AppContext } from "./context/buble";

function App() {
  const { startGetting } = useContext(AppContext);

  return (
    <>
      <div className="container ">
        <div className="flex justify-between items-center mt-5">
          <img src="/logo/black.webp" onClick={startGetting} className="h-10 cursor-pointer" alt="" />
          <img src="/logo/logo-prudent.png" className="h-10" alt="" />
        </div>
        <div className="bg-white shadow rounded-lg p-4 mt-8 mb-20">
          <div className="grid grid-cols-7">
            <ChatContentAI />
            <IconComponentAI />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
