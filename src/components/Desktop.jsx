import { useContext } from "react";
import { WindowContext } from "../context/WindowContext";
import Window from "./Window";

function Desktop() {
  const { activeWindow } = useContext(WindowContext);

  return (
    <div className="desktop" style={{ width: "100vw", height: "100vh" }}>
      {activeWindow && <Window selectedWindow={activeWindow} />}
    </div>
  );
}

export default Desktop;
