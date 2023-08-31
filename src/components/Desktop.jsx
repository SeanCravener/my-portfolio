import { useContext } from "react";
import { WindowContext } from "../context/WindowContext";
import Window from "./Window";
import { TaskBar, List } from "@react95/core";

function Desktop() {
  const { applications, activeWindow, openWindow } = useContext(WindowContext);

  return (
    <div className="desktop" style={{ width: "100vw", height: "100vh" }}>
      {activeWindow && <Window selectedWindow={activeWindow} />}
      <TaskBar
        list={
          <List>
            {applications.map((application, index) => {
              return (
                <List.Item
                  key={index}
                  icon={
                    <img
                      src={application.icon}
                      alt={application.title}
                      style={{ width: "32px", height: "32px" }}
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
