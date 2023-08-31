import { useContext } from "react";
import { WindowContext } from "../context/WindowContext";
import Window from "./Window";
import { TaskBar, List } from "@react95/core";
import "./Desktop.css";

function Desktop() {
  const { applications, activeWindows, openWindow } = useContext(WindowContext);

  return (
    <div className="desktop-container">
      <div className="desktop">
        {applications.map((application, index) => {
          return (
            <div
              key={index}
              className="shortcut-container"
              onClick={() => openWindow(application)}
            >
              <img
                className="shortcut-image"
                src={application.icon}
                alt={application.title}
              />
              <p className="shortcut-text">{application.title}</p>
            </div>
          );
        })}
        {activeWindows &&
          activeWindows.map((application, index) => {
            return <Window key={index} selectedWindow={application} />;
          })}
      </div>
      <TaskBar
        list={
          <List>
            {applications.map((application, index) => {
              return (
                <List.Item
                  key={index}
                  icon={
                    <img
                      className="start-menu-icon"
                      src={application.icon}
                      alt={application.title}
                    />
                  }
                  onClick={() => openWindow(application)}
                >
                  {application.title}
                </List.Item>
              );
            })}
          </List>
        }
      />
    </div>
  );
}

export default Desktop;
