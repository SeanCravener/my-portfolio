import { useContext } from "react";
import { WindowContext } from "../context/WindowContext";
import Window from "./Window";

function Desktop() {
  const { activeWindow } = useContext(WindowContext);

  return (
    <div className="desktop">
      {activeWindow && <Window selectedWindow={activeWindow} />}
    </div>
  );
}

export default Desktop;
