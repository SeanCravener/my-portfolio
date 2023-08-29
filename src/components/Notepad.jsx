import { Frame } from "@react95/core";

function Notepad({ content }) {
  const contentSelector = (line) => {
    switch (line.contentType) {
      case "header":
        return <h1 style={{ textAlign: "center" }}>{line.content}</h1>;
      case "paragraph":
        return line.content.map((paragraph, index) => {
          return (
            <p key={index} style={{ padding: "0.5rem" }}>
              {paragraph}
            </p>
          );
        });
      default:
        return <p>{line.content}</p>;
    }
  };

  return (
    <Frame
      bg="white"
      boxShadow="in"
      height="100%"
      style={{
        overflowY: "auto",
        maxHeight: "60vh",
        maxWidth: "60vw",
      }}
    >
      {content.map((line, index) => {
        return (
          <div key={index} style={{ margin: "1rem" }}>
            {contentSelector(line)}
          </div>
        );
      })}
    </Frame>
  );
}

export default Notepad;
