import React, { useState, createContext } from "react";
import { Config } from "../config/config";

export const WindowContext = createContext();

export const WindowProvider = (props) => {
  const windows = Config;
  const [activeWindow, setActiveWindow] = useState(windows[1]);

  const openWindow = (window) => {
    setActiveWindow(window);
  };

  const closeWindow = (id) => {
    setActiveWindow(null);
  };

  return (
    <WindowContext.Provider
      value={{ windows, activeWindow, openWindow, closeWindow }}
    >
      {props.children}
    </WindowContext.Provider>
  );
};
