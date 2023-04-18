import React from "react";
import { createRoot } from "react-dom/client";

class App extends React.Component {
  render() {
    return <div>Hi</div>
  }
}

const root = createRoot(document.getElementById("app"));

root.render(<App />);
