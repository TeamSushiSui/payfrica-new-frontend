"use client";
import { createContext, useState, useEffect, useContext } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [overlayStates, setOverlayStates] = useState({
    sendMoney: false,
    receiveMoney: false,
    sendSuiToken: false,
    deposit: false,
    withdraw: false,
    convert: false,
    manageCards: false,
    payfricaPadi: false,
    payfricaPadiSui: false,
    enterAmount: false,
    enterSuiAmount: false,
    sending: false,
    success: false,
    failed: false,
  });

  const toggleOverlay = (overlayName) => {
    setOverlayStates((prevState) => ({
      ...prevState,
      [overlayName]: !prevState[overlayName],
    }));
  };

  const closeAllOverlays = () => {
    const allOverlays = Object.keys(overlayStates).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    setOverlayStates(allOverlays);
  };

  return (
    <GlobalStateContext.Provider
      value={{ overlayStates, toggleOverlay, closeAllOverlays }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
