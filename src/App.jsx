import { useState } from "react";
import "./App.css";
import IconComponentAI from "./components/IconComponentAI";
import ChatContentAI from "./components/ChatContentAI";

function App() {
  const [noIteration, setIteration] = useState(0);

  return (
    <>
      <div className="container m-10">
      <div className="flex justify-between items-center">
        <img src="/public/logo/microsoft.png" className="h-16" alt="" />
        <img src="/public/logo/prudential.png" className="h-24" alt="" />
      </div>
        <div className="bg-white shadow rounded-lg p-4">
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
