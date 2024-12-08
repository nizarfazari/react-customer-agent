import "./App.css";
import IconComponentAI from "./components/IconComponentAI";
import ChatContentAI from "./components/ChatContentAI";

function App() {


  return (
    <>
      <div className="container ">
      <div className="flex justify-between items-center mt-5">
        <img src="/public/logo/black.webp" className="h-16" alt="" />
        <img src="/public/logo/logo-prudent.png" className="h-14" alt="" />
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
