import { createContext, useState } from "react";

const defaultValue = {
  buble: [],  
  countAction: 0,  
  setBuble: () => {} ,
  incrementActionCount: () => {}, 
}

export const AppContext = createContext(defaultValue);

// eslint-disable-next-line react/prop-types
const BubleProvider = ({ children }) => {
  const [buble, setBuble] = useState([]);  

  const [countAction, setCountAction] = useState(0);
  const incrementActionCount = () => {
    setCountAction((prevCount) => prevCount + 1);
  };


  return (
    <AppContext.Provider value={{ 
        buble, 
        setBuble, 
        countAction, 
        incrementActionCount 
      }}>
      {children}
    </AppContext.Provider>
  );
}

export default BubleProvider;
