"use client";
import { createContext, useState, useEffect, useContext } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [overlayStates, setOverlayStates] = useState({
    sendMoney: false,
    receiveMoney: false,
    deposit: false,
    withdraw: false,
    convert: false,
    manageCards: false,
  });

  const toggleOverlay = (overlayName) => {
    setOverlayStates((prevState) => ({
      ...prevState,
      [overlayName]: !prevState[overlayName],
    }));
  };

  useEffect(() => {
    // Initialize state or perform other setup here
  }, []);

  return (
    <GlobalStateContext.Provider value={{ overlayStates, toggleOverlay }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
