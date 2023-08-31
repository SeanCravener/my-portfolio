import React, { useState, createContext } from "react";
import { Config } from "../config/config";

export const WindowContext = createContext();

export const WindowProvider = (props) => {
  const applications = Config;
  const [activeWindow, setActiveWindow] = useState(applications[1]);

  const openWindow = (application) => {
    if (application.type === "link") {
      window.open(application.link, "_blank");
      return;
    }

    setActiveWindow(application);
  };

  const closeWindow = (id) => {
    setActiveWindow(null);
  };

  return (
    <WindowContext.Provider
      value={{ applications, activeWindow, openWindow, closeWindow }}
    >
      {props.children}
    </WindowContext.Provider>
  );
};
