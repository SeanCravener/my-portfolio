import { useContext } from "react";
import { WindowContext } from "../context/WindowContext";
import { Modal, List } from "@react95/core";
import Explorer from "./Explorer";
import IframeViewer from "./IframeViewer";
import Notepad from "./Notepad";

export default function Window({ selectedWindow }) {
  const { closeWindow } = useContext(WindowContext);

  const mobile = window.innerWidth < 600;

  const handleCloseWindow = () => {
    closeWindow(selectedWindow);
  };

  const typeSelector = () => {
    switch (selectedWindow.type) {
      case "folder-explorer":
        return <Explorer content={selectedWindow.content} />;
      case "iframe-viewer":
        return <IframeViewer content={selectedWindow} />;
      case "notepad":
        console.log(selectedWindow.content);
        return <Notepad content={selectedWindow.content} />;
      default:
        return console.log("Error: Window type not found.");
    }
  };

  const populateMenu = (menu) => {
    return [
      {
        name: "Links",
        list: (
          <List>
            {menu.map((item, index) => {
              return (
                <List.Item key={index}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.name}
                  </a>
                </List.Item>
              );
            })}
          </List>
        ),
      },
    ];
  };

  return (
    <Modal
      title={selectedWindow.title}
      closeModal={handleCloseWindow}
      menu={selectedWindow.menu && populateMenu(selectedWindow.menu)}
      style={{
        left: mobile ? "0%" : "20%",
        top: mobile ? "0%" : "5%",
        maxWidth: "100%",
        maxHeight: "100%",
      }}
      buttons={[{ value: "Close", onClick: handleCloseWindow }]}
    >
      {typeSelector()}
    </Modal>
  );
}
