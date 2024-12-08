import { createContext, useState } from "react";
import { Message } from "../data/message";

const defaultValue = {
  buble: [],
  countAction: 0,
  setBuble: () => {},
  incrementActionCount: () => {},
};

export const AppContext = createContext(defaultValue);

// eslint-disable-next-line react/prop-types
const BubleProvider = ({ children }) => {
  const [buble, setBuble] = useState([]);

  const [countAction, setCountAction] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const incrementActionCount = () => {
    setCountAction((prevCount) => prevCount + 1);
  };

  const startGetting = () => {
    const startTime = Date.now();
    let index = 0;
    setIsTyping(true);

    const interval = setInterval(() => {
      if (index < Message.length) {
        const now = Date.now();
        const elapsedTime = now - startTime;
        const timeExecution = elapsedTime - (index + 1) * 3000;
        setBuble((prevMessages) => {
          const updatedMessages = [
            ...prevMessages,
            {
              ...Message[index],
              id: index,
              time_execution: `${timeExecution} ms`,
            },
          ];
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
  };

  return (
    <AppContext.Provider
      value={{
        buble,
        setBuble,
        countAction,
        incrementActionCount,
        isTyping,
        startGetting,
        setIsTyping
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default BubleProvider;
