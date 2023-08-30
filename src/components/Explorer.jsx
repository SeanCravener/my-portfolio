import { useContext } from "react";
import { WindowContext } from "../context/WindowContext";
import { Frame } from "@react95/core";
import "./Window.css";

export default function Explorer({ content }) {
  const { openWindow } = useContext(WindowContext);

  const handleOpenProject = (project) => {
    openWindow(project);
  };

  return (
    <Frame bg="white" boxShadow="in" className="frame-container">
      <div className="explorer-container">
        {content.map((project, index) => {
          return (
            <div
              key={index}
              className="explorer-item"
              onClick={() => handleOpenProject(project)}
            >
              <img
                src={project.icon}
                alt={project.title}
                className="explorer-item-icon"
              />
              <p>{project.title}</p>
            </div>
          );
        })}
      </div>
    </Frame>
  );
}
