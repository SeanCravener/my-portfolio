import React, { useState, createContext } from "react";
import { Config } from "../config/config";

export const WindowContext = createContext();

export const WindowProvider = (props) => {
  const [windows, setWindows] = useState(Config);
  const [activeWindow, setActiveWindow] = useState(Config[0]);

  const openWindow = (id) => {
    const window = windows.find((window) => window.id === id);
    if (window) {
      setActiveWindow(window);
    }
  };

  const closeWindow = (id) => {
    const window = windows.find((window) => window.id === id);
    if (window) {
      setActiveWindow(null);
    }
  };

  return (
    <WindowContext.Provider
      value={{ windows, activeWindow, openWindow, closeWindow }}
    >
      {props.children}
    </WindowContext.Provider>
  );
};
